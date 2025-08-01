import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function EditProfile() {
  const [form, setForm] = useState({
    name: "",
    occupation: "",
    experience: "",
    wageperhr: "",
    location: "",
    mobile: "",
    skills: "",
    image: null,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const username = localStorage.getItem("username");
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch current worker data
    const fetchWorker = async () => {
      try {
        const response = await fetch("http://localhost:3333/getWorker");
        if (!response.ok) throw new Error("Failed to fetch worker data");
        const data = await response.json();
        const found = data.find(w => w.username === username);
        if (found) {
          setForm({
            name: found.name || "",
            occupation: found.occupation || "",
            experience: found.experience || "",
            wageperhr: found.wageperhr || "",
            location: found.location || "",
            mobile: found.mobile || "",
            skills: found.skills ? found.skills.join(", ") : "",
            image: null,
          });
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchWorker();
  }, [username]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setForm(f => ({ ...f, image: files[0] }));
    } else {
      setForm(f => ({ ...f, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    const formData = new FormData();
    Object.entries(form).forEach(([key, value]) => {
      if (key === "skills") {
        formData.append(key, value.split(",").map(s => s.trim()));
      } else if (key === "image" && value) {
        formData.append(key, value);
      } else if (key !== "image") {
        formData.append(key, value);
      }
    });
    formData.append("username", username);
    try {
      const response = await fetch("http://localhost:3333/updateWorker", {
        method: "POST",
        body: formData,
      });
      if (response.ok) {
        setSuccess("Profile updated successfully!");
        setTimeout(() => navigate("/workerDashboard"), 1500);
      } else {
        const data = await response.json();
        setError(data.message || "Update failed");
      }
    } catch (err) {
      setError("Network error");
    }
  };

  if (loading) return <div className="flex justify-center items-center h-screen">Loading...</div>;
  if (error) return <div className="flex justify-center items-center h-screen text-red-500">{error}</div>;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4 mt-13">
      <form className="bg-white rounded-xl shadow-lg p-8 w-full max-w-lg space-y-6" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold mb-4 text-center">Edit Profile</h2>
        {success && <div className="text-green-600 text-center">{success}</div>}
        <div>
          <label className="block font-semibold mb-1">Name</label>
          <input name="name" value={form.name} onChange={handleChange} className="w-full border rounded px-3 py-2" required />
        </div>
        <div>
          <label className="block font-semibold mb-1">Occupation</label>
          <input name="occupation" value={form.occupation} onChange={handleChange} className="w-full border rounded px-3 py-2" required />
        </div>
        <div>
          <label className="block font-semibold mb-1">Experience (years)</label>
          <input name="experience" value={form.experience} onChange={handleChange} className="w-full border rounded px-3 py-2" type="number" min="0" required />
        </div>
        <div>
          <label className="block font-semibold mb-1">Wage per hour (₹)</label>
          <input name="wageperhr" value={form.wageperhr} onChange={handleChange} className="w-full border rounded px-3 py-2" type="number" min="0" required />
        </div>
        <div>
          <label className="block font-semibold mb-1">Location</label>
          <input name="location" value={form.location} onChange={handleChange} className="w-full border rounded px-3 py-2" required />
        </div>
        <div>
          <label className="block font-semibold mb-1">Mobile</label>
          <input name="mobile" value={form.mobile} onChange={handleChange} className="w-full border rounded px-3 py-2" required />
        </div>
        <div>
          <label className="block font-semibold mb-1">Skills (comma separated)</label>
          <input name="skills" value={form.skills} onChange={handleChange} className="w-full border rounded px-3 py-2" required />
        </div>
        <div>
          <label className="block font-bold mb-2 text-lg">Profile Image</label>
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <label className="bg-green-500 text-white font-semibold py-2 px-6 rounded-full shadow-md cursor-pointer hover:bg-green-600 transition duration-200 flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3" /></svg>
              Choose File
              <input
                name="image"
                type="file"
                accept="image/*"
                onChange={handleChange}
                className="hidden"
              />
            </label>
            <span className="text-gray-500 text-sm font-light mt-2 sm:mt-0">{form.image ? form.image.name : "No file chosen"}</span>
          </div>
          {form.image && (
            <div className="mt-4 flex justify-center">
              <img
                src={URL.createObjectURL(form.image)}
                alt="Preview"
                className="w-28 h-28 object-cover rounded-full border-4 border-green-300 shadow"
              />
            </div>
          )}
        </div>
        <button type="submit" className="w-full bg-green-600 text-white py-2 rounded font-semibold hover:bg-green-700 transition">Update Profile</button>
        {error && <div className="text-red-500 text-center mt-2">{error}</div>}
      </form>
    </div>
  );
}
