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
      !skills
    ) {
      alert("Please fill all fields.");
      return;
    }

    const data = {
      name,
      occupation,
      experience: Number(experience),
      wageperhr: Number(wageperhr),
      location,
      mobile,
      skills: skills.split(",").map((s) => s.trim()),
    };

    try {
      const response = await fetch("http://localhost:3333/workerReg", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        // localStorage.setItem("email", response.data.email);
        navigate("/");
      } else {
        alert("Registration failed.");
      }
    } catch (error) {
      alert("Network error.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-4">
      <div className="max-w-md w-full space-y-6">
        <h2 className="text-2xl font-bold text-center">Worker Sign Up</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
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
          <button
            type="submit"
            className="w-full bg-green-500 text-white font-semibold py-3 rounded-full hover:bg-green-600 transition"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}