import { useEffect, useState } from "react";

// Mock data for demonstration
const mockStats = {
  totalTasks: 12,
  tasksCompletedToday: 3,
  hoursLoggedToday: 5.5,
  currentShift: "09:00 AM - 05:00 PM",
};

const mockTasks = [
  { id: 1, title: "Fix wiring in Room 201", deadline: "Today, 2:00 PM", status: "pending" },
  { id: 2, title: "Install AC in Office 3", deadline: "Today, 4:00 PM", status: "in-progress" },
  { id: 3, title: "Routine checkup - Block B", deadline: "Tomorrow, 10:00 AM", status: "pending" },
];

const mockAnnouncements = [
  { id: 1, message: "Safety training scheduled for Friday at 3 PM." },
  { id: 2, message: "Submit your timesheet by 6 PM today." },
];

export default function WorkerDashboard() {
  const [worker, setWorker] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [tasks, setTasks] = useState(mockTasks);
  const username = localStorage.getItem("username");

  useEffect(() => {
    const fetchWorker = async () => {
      try {
        const response = await fetch("http://localhost:3333/getWorker");
        if (!response.ok) throw new Error("Failed to fetch worker data");
        const data = await response.json();
        const found = data.find(w => w.username === username);
        setWorker(found);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchWorker();
  }, [username]);

  const handleTaskAction = (id, action) => {
    setTasks(prev =>
      prev.map(task =>
        task.id === id
          ? { ...task, status: action === "complete" ? "completed" : "in-progress" }
          : task
      )
    );
  };

  if (loading) {
    return <div className="flex justify-center items-center h-screen text-xl">Loading your dashboard...</div>;
  }
  if (error) {
    return <div className="flex justify-center items-center h-screen text-xl text-red-500">{error}</div>;
  }
  if (!worker) {
    return <div className="flex justify-center items-center h-screen text-xl text-gray-500">Worker not found.</div>;
  }

  const imageUrl = worker.image
    ? `http://localhost:3333/${worker.image.replace(/\\/g, '/')}`
    : "https://img.freepik.com/free-photo/construction-worker-with-hard-hat_23-2148762512.jpg";

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center pt-20 pb-10 px-2 md:px-4">
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Profile & Overview */}
        <div className="col-span-1 bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center">
          <img
            src={imageUrl}
            alt={worker.name}
            className="w-28 h-28 rounded-full object-cover border-4 border-green-400 mb-3"
          />
          <h2 className="text-2xl font-bold text-gray-900 mb-1">{worker.name}</h2>
          <p className="text-md text-gray-600 mb-1">@{worker.username}</p>
          <p className="text-md font-semibold text-gray-700 mb-2">{worker.occupation}</p>
          <div className="flex flex-wrap gap-2 mb-3">
            {worker.skills.map((skill, idx) => (
              <span key={idx} className="bg-green-100 text-green-800 text-xs font-medium px-3 py-1 rounded-full">
                {skill}
              </span>
            ))}
          </div>
          <button className="mt-2 mb-4 px-4 py-2 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 transition">Edit Profile</button>
          {/* Today's Overview / Stats */}
          <div className="w-full mt-2">
            <h3 className="text-lg font-bold text-gray-800 mb-2">Today's Overview</h3>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-green-50 rounded-lg p-3 text-center">
                <div className="text-2xl font-bold text-green-600">{mockStats.totalTasks}</div>
                <div className="text-xs text-gray-500">Total Tasks</div>
              </div>
              <div className="bg-green-50 rounded-lg p-3 text-center">
                <div className="text-2xl font-bold text-green-600">{mockStats.tasksCompletedToday}</div>
                <div className="text-xs text-gray-500">Completed Today</div>
              </div>
              <div className="bg-green-50 rounded-lg p-3 text-center">
                <div className="text-2xl font-bold text-green-600">{mockStats.hoursLoggedToday}</div>
                <div className="text-xs text-gray-500">Hours Logged</div>
              </div>
              <div className="bg-green-50 rounded-lg p-3 text-center">
                <div className="text-xs text-gray-500">Current Shift</div>
                <div className="font-semibold text-gray-700 text-sm">{mockStats.currentShift}</div>
              </div>
            </div>
          </div>
        </div>
        {/* Main Content: Tasks & Announcements */}
        <div className="col-span-2 flex flex-col gap-8">
          {/* Task List / Schedule */}
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-bold text-gray-800">Today's Tasks</h3>
              <button className="text-green-600 text-sm font-semibold hover:underline">View All Tasks</button>
            </div>
            <ul className="divide-y divide-gray-100">
              {tasks.map(task => (
                <li key={task.id} className="py-3 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <div>
                    <div className="font-semibold text-gray-700">{task.title}</div>
                    <div className="text-xs text-gray-500">{task.deadline}</div>
                  </div>
                  <div className="flex gap-2 mt-2 md:mt-0">
                    {task.status !== "completed" && (
                      <button
                        className="px-3 py-1 bg-green-500 text-white rounded-lg text-xs font-semibold hover:bg-green-600 transition"
                        onClick={() => handleTaskAction(task.id, "complete")}
                      >
                        Mark as Complete
                      </button>
                    )}
                    {task.status === "pending" && (
                      <button
                        className="px-3 py-1 bg-blue-500 text-white rounded-lg text-xs font-semibold hover:bg-blue-600 transition"
                        onClick={() => handleTaskAction(task.id, "start")}
                      >
                        Start Task
                      </button>
                    )}
                    {task.status === "in-progress" && (
                      <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-lg text-xs font-semibold">In Progress</span>
                    )}
                    {task.status === "completed" && (
                      <span className="px-3 py-1 bg-green-100 text-green-800 rounded-lg text-xs font-semibold">Completed</span>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
          {/* Announcements / Notices */}
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-bold text-gray-800">Announcements</h3>
              <button className="text-green-600 text-sm font-semibold hover:underline">View All</button>
            </div>
            <ul className="space-y-2">
              {mockAnnouncements.map(ann => (
                <li key={ann.id} className="text-gray-700 text-sm bg-green-50 rounded-lg px-4 py-2">
                  {ann.message}
                </li>
              ))}
            </ul>
          </div>
          {/* Quick Links */}
          <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-wrap gap-4 justify-between">
            <button className="flex-1 min-w-[120px] bg-green-100 text-green-700 font-semibold py-2 px-4 rounded-lg hover:bg-green-200 transition">View All Tasks</button>
            <button className="flex-1 min-w-[120px] bg-blue-100 text-blue-700 font-semibold py-2 px-4 rounded-lg hover:bg-blue-200 transition">Submit Timesheet</button>
            <button className="flex-1 min-w-[120px] bg-yellow-100 text-yellow-700 font-semibold py-2 px-4 rounded-lg hover:bg-yellow-200 transition">Request Leave</button>
            <button className="flex-1 min-w-[120px] bg-gray-100 text-gray-700 font-semibold py-2 px-4 rounded-lg hover:bg-gray-200 transition">Chat Support</button>
          </div>
        </div>
      </div>
      <div className="w-full text-center mt-8">
        <span className="text-xs text-gray-400">&copy; {new Date().getFullYear()} Worker360</span>
      </div>
    </div>
  );
}
