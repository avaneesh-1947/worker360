import { FaGoogle, FaFacebookF } from "react-icons/fa";
import { HiEye } from "react-icons/hi";

export default function SignIn() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-10 w-full max-w-md">
        {/* Back Arrow */}
        <button className="text-xl mb-4 text-gray-500">
          ←
        </button>

        {/* Title */}
        <h2 className="text-2xl font-semibold text-center mb-6">Sign In</h2>

        {/* Email Input */}
        <label className="block text-sm font-medium mb-1">Email Address</label>
        <input
          type="email"
          placeholder="Enter Email Address"
          className="w-full p-3 mb-4 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-400"
        />

        {/* Password Input */}
        <label className="block text-sm font-medium mb-1">Password</label>
        <div className="relative mb-4">
          <input
            type="password"
            placeholder="Enter Password"
            className="w-full p-3 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <HiEye className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
        </div>

        {/* Remember Me + Forgot */}
        <div className="flex items-center justify-between mb-6 text-sm">
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="accent-green-500" />
            <span>Remember Me</span>
          </label>
          <button className="text-green-600 font-medium">Forgot Password</button>
        </div>

        {/* Sign In Button */}
        <button className="w-full bg-green-500 text-white py-3 rounded-full font-semibold hover:bg-green-600 transition">
          Sign In
        </button>

        {/* Divider */}
        <div className="flex items-center my-6">
          <hr className="flex-grow border-t border-gray-300" />
          <span className="mx-2 text-gray-500">Or</span>
          <hr className="flex-grow border-t border-gray-300" />
        </div>

        {/* Social Buttons */}
        <div className="flex justify-center gap-4">
          <button className="bg-white border rounded-full p-3 shadow-md hover:bg-gray-100">
            <FaGoogle className="text-xl text-red-500" />
          </button>
          <button className="bg-white border rounded-full p-3 shadow-md hover:bg-gray-100">
            <FaFacebookF className="text-xl text-blue-600" />
          </button>
        </div>
      </div>
    </div>
  );
}
