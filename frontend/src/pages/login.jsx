import { useState } from "react";
import { FaGoogle, FaFacebook, FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom"; // Add useNavigate

import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const [email, setEmail] = useState(""); // Add this
  const [password, setPassword] = useState(""); // Add this

  const [showPassword1, setShowPassword1] = useState(false);

  const [agreed, setAgreed] = useState(false);
  const navigate = useNavigate(); 

  const handleSignUp = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:3333/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" }, 
      body: JSON.stringify({ email, password }),

    });
    const data = await response.json();

    if (data.message === "Invalid email or password") {
      alert("Invalid email or password");
    } else {
      localStorage.setItem("email", email);
      navigate("/"); 
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-4">
      <div className="max-w-sm w-full space-y-6">
        <button className="text-gray-500"></button>
        <h2 className="text-2xl font-bold text-center">Sign In</h2>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Email Address"
              className="mt-1 w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 bg-gray-100"
            />
          </div>

          <div className="relative">
            <label className="block text-sm font-medium">Password</label>
            <input
              type={showPassword1 ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter Password"
              className="mt-1 w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 bg-gray-100"
            />
            <span
              className="absolute right-4 top-9 text-gray-500 cursor-pointer"
              onClick={() => setShowPassword1(!showPassword1)}
            >
              {showPassword1 ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={agreed}
              onChange={() => setAgreed(!agreed)}
              className="accent-green-500 w-4 h-4"
            />
            <label className="text-sm">
              I agree to the{" "}
              <span className="text-green-600 font-medium cursor-pointer">
                Terms and Conditions
              </span>
            </label>
          </div>

          <button
            className="w-full bg-green-500 text-white font-semibold py-3 rounded-full hover:bg-green-600 transition"
            onClick={handleSignUp}
          >
            Sign In
          </button>

          <div className="flex items-center justify-center gap-2 text-gray-400 my-2">
            <span className="border-t border-gray-300 w-1/4" />
            <span className="text-sm">Or</span>
            <span className="border-t border-gray-300 w-1/4" />
          </div>

          <div className="flex justify-center space-x-4">
            <button className="p-3 rounded-lg shadow hover:bg-gray-100">
              <FaGoogle className="text-xl" />
            </button>
            <button className="p-3 rounded-lg shadow hover:bg-gray-100">
              <FaFacebook className="text-xl text-blue-600" />
            </button>
          </div>

          <p className="text-center text-sm text-gray-600">
            Don't have an account?{" "}
            <Link to="/signup" className="text-green-600 font-semibold">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
