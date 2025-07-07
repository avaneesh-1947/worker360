import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function WorkerSignup() {
  const [name, setName] = useState("");
  const [occupation, setOccupation] = useState("");
  const [experience, setExperience] = useState("");
  const [wageperhr, setWageperhr] = useState("");
  const [location, setLocation] = useState("");
  const [mobile, setMobile] = useState("");
  const [skills, setSkills] = useState("");
  const [image, setImage] = useState(null); // State for the image file
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !name ||
      !occupation ||
      !experience ||
      !wageperhr ||
      !location ||
      !mobile ||
      !skills ||
      !image
    ) {
      alert("Please fill all fields and upload an image.");
      return;
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("occupation", occupation);
    formData.append("experience", experience);
    formData.append("wageperhr", wageperhr);
    formData.append("location", location);
    formData.append("mobile", mobile);
    formData.append("skills", skills.split(",").map((s) => s.trim()));
    formData.append("image", image);

    try {
      const response = await fetch("http://localhost:3333/workerReg", {
        method: "POST",
        body: formData, // No 'Content-Type' header, browser sets it for FormData
      });

      if (response.ok) {
        navigate("/hire");
      } else {
        const errorData = await response.json();
        alert(`Registration failed: ${errorData.message}`);
      }
    } catch (error) {
      alert("Network error.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4 pt-20">
      <div className="max-w-md w-full space-y-6 bg-white p-8 rounded-2xl shadow-lg">
        <h2 className="text-3xl font-bold text-center text-gray-900">Become a Worker</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* ... other input fields ... */}
          <div>
            <label className="block text-sm font-medium">Full Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="mt-1 w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 bg-gray-100"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Occupation</label>
            <input
              type="text"
              placeholder="e.g. Electrician"
              className="mt-1 w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 bg-gray-100"
              value={occupation}
              onChange={(e) => setOccupation(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Experience (years)</label>
            <input
              type="number"
              min="0"
              placeholder="e.g. 5"
              className="mt-1 w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 bg-gray-100"
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Wage per Hour (₹)</label>
            <input
              type="number"
              min="0"
              placeholder="e.g. 300"
              className="mt-1 w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 bg-gray-100"
              value={wageperhr}
              onChange={(e) => setWageperhr(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Location</label>
            <input
              type="text"
              placeholder="e.g. Delhi"
              className="mt-1 w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 bg-gray-100"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Mobile</label>
            <input
              type="text"
              placeholder="e.g. 9876543210"
              className="mt-1 w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 bg-gray-100"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Skills (comma separated)</label>
            <input
              type="text"
              placeholder="e.g. Wiring, Repair, Installation"
              className="mt-1 w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 bg-gray-100"
              value={skills}
              onChange={(e) => setSkills(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Upload Your Image</label>
            <input
              type="file"
              accept="image/*"
              className="mt-1 w-full text-sm text-gray-500
                         file:mr-4 file:py-2 file:px-4
                         file:rounded-full file:border-0
                         file:text-sm file:font-semibold
                         file:bg-green-50 file:text-green-700
                         hover:file:bg-green-100"
              onChange={(e) => setImage(e.target.files[0])}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#54B435] text-white font-semibold py-3 rounded-lg hover:bg-green-600 transition-colors duration-300"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
