// import { useState } from "react";
// import { FaEye, FaEyeSlash } from "react-icons/fa";
// import { Link, useNavigate } from "react-router-dom";

// export default function WorkerLogin() {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     const response = await fetch("http://localhost:3333/workerLogin", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ username, password }),
//     });
//     const data = await response.json();
//     if (data.message === "Invalid username or password") {
//       alert("Invalid username or password");
//     } else {
//       localStorage.setItem("workerUsername", username);
//       window.dispatchEvent(new Event('authChange'));
//       navigate("/workerDashboard");
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-white p-4">
//       <div className="max-w-sm w-full space-y-6">
//         <h2 className="text-2xl font-bold text-center">Worker Login</h2>
//         <form className="space-y-4" onSubmit={handleLogin}>
//           <div>
//             <label className="block text-sm font-medium">Username</label>
//             <input
//               type="text"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               placeholder="Enter Username"
//               className="mt-1 w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 bg-gray-100"
//               required
//             />
//           </div>
//           <div className="relative">
//             <label className="block text-sm font-medium">Password</label>
//             <input
//               type={showPassword ? "text" : "password"}
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               placeholder="Enter Password"
//               className="mt-1 w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 bg-gray-100"
//               required
//             />
//             <span
//               className="absolute right-4 top-9 text-gray-500 cursor-pointer"
//               onClick={() => setShowPassword(!showPassword)}
//             >
//               {showPassword ? <FaEyeSlash /> : <FaEye />}
//             </span>
//           </div>
//           <button
//             className="w-full bg-green-500 text-white font-semibold py-3 rounded-full hover:bg-green-600 transition"
//             type="submit"
//           >
//             Login
//           </button>
//         </form>
//         <p className="text-center text-sm text-gray-600">
//           Not registered? {" "}
//           <Link to="/workerSignup" className="text-green-600 font-semibold">
//             Sign Up as Worker
//           </Link>
//         </p>
//         <p className="text-center text-xs text-gray-400">
//           &copy; {new Date().getFullYear()} Worker360
//         </p>
//       </div>
//     </div>
//   );
// }
