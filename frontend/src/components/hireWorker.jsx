import { useState, useEffect } from "react";
import { FaStar, FaMapMarkerAlt, FaToolbox, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import ChatBox from "./ChatBox";

const WorkerCard = ({ worker, onChatClick }) => {
  const placeholderImage = "https://img.freepik.com/free-photo/construction-worker-with-hard-hat_23-2148762512.jpg";
  // Image ka url set kar rahe hain
  const imageUrl = worker.image 
    ? `http://localhost:3333/${worker.image.replace(/\\/g, '/')}` 
    : placeholderImage;

  const handleHire = () => {
    console.log("Hire button clicked");
    alert("payment required");
  };

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col">
      <div className="relative">
        <img
          src={imageUrl}
          alt={worker.name}
          className="w-full h-48 object-cover"
        />
      </div>
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold text-gray-900">{worker.name}</h3>
        <p className="text-md font-semibold text-gray-600 mb-3">{worker.occupation}</p>
        <div className="flex items-center text-gray-500 mb-2">
          <FaToolbox className="mr-2 text-[#54B435]" /> {worker.experience} years of experience
        </div>
        <div className="flex items-center text-gray-500 mb-4">
          <FaMapMarkerAlt className="mr-2 text-[#54B435]" /> {worker.location}
        </div>
        <div className="mb-4">
          <p className="text-sm font-semibold text-gray-700 mb-2">Skills:</p>
          <div className="flex flex-wrap gap-2">
            {worker.skills.slice(0, 3).map(skill => (
              <span key={skill} className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-1 rounded-full">
                {skill}
              </span>
            ))}
            {worker.skills.length > 3 && (
              <span className="bg-gray-200 text-gray-800 text-xs font-medium px-2.5 py-1 rounded-full">
                +{worker.skills.length - 3} more
              </span>
            )}
          </div>
        </div>
        <div className="mt-auto pt-4 border-t border-gray-200">
          <div className="flex justify-between items-center gap-2">
            <p className="text-xl font-bold text-[#54B435]">
              ₹{worker.wageperhr}<span className="text-sm font-normal text-gray-500">/hr</span>
            </p>
            <button
              onClick={handleHire}
              className="bg-[#54B435] text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-green-600 transition duration-300"
            >
              Hire
            </button>
            {/* Chat Now button yahan add kiya hai */}
            <button
              onClick={() => onChatClick(worker)}
              className="bg-white border border-[#54B435] text-[#54B435] px-5 py-2.5 rounded-lg font-semibold hover:bg-[#54B435] hover:text-white transition duration-300"
            >
              Chat Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function HireWorker() {
  const [workers, setWorkers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // Kis worker ke sath chat kholni hai, uska state
  const [chatWorker, setChatWorker] = useState(null);

  useEffect(() => {
    const fetchWorkers = async () => {
      try {
        const response = await fetch("http://localhost:3333/getWorker");
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setWorkers(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchWorkers();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-2xl font-semibold">Loading workers...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-2xl font-semibold text-red-500">Error: {error}</div>
      </div>
    );
  }

  // Modal close karne ka function
  const closeModal = () => setChatWorker(null);

  // User ka email ko userId ke liye use kar rahe hain (aap chahe toh actual userId bhi use kar sakte hain)
  const userId = localStorage.getItem('email') || 'guest';

  return (
    <div className="bg-gray-50 min-h-screen pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900">
            Hire a Professional
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Find and connect with skilled, verified, and reliable workers for all your service needs.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {workers.map(worker => (
            <WorkerCard key={worker._id} worker={worker} onChatClick={setChatWorker} />
          ))}
        </div>
      </div>
      {/* Modal for ChatBox */}
      {chatWorker && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Background blur effect - liquid blur jaisa */}
          <div
            className="absolute inset-0 backdrop-blur-md bg-white/20"
            onClick={closeModal}
          />
          {/* Modal box sabse upar, ispe click karne se kuch na ho */}
          <div className="relative z-10 bg-white rounded-2xl shadow-xl p-0 w-full max-w-md mx-2 animate-fadeInUp pointer-events-auto">
            {/* Close button */}
            <button
              className="absolute top-3 right-3 text-gray-400 hover:text-[#54B435] text-xl"
              onClick={closeModal}
              aria-label="Close"
            >
              <FaTimes />
            </button>
            {/* ChatBox ko yahan render kar rahe hain */}
            <ChatBox
              roomId={`chat_${userId}_${chatWorker._id}`}
              userId={userId}
              workerName={chatWorker.name}
            />
          </div>
        </div>
      )}
    </div>
  );
}
