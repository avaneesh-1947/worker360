import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";


export default function Navbar() {
  const navigate  = useNavigate();
  const [flag , setflag] = useState(false);
  const handleLogout = () => {
    localStorage.removeItem("email");
    setflag(!flag);
    

  }
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const auth = localStorage.getItem("email");

  return (
    <nav className="bg-white shadow-md w-full fixed top-0 left-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 text-2xl font-bold">
            <span className="text-black">Worker</span>
            <span style={{ color: "#54B435" }}>360</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center">
            <NavLink to="/" className="block text-gray-700 hover:text-green-600">Home</NavLink>
            <NavLink to="/" className="block text-gray-700 hover:text-green-600">Hire Worker</NavLink>
            {!auth && (
              <>
                <NavLink to="/login" className="block text-gray-700 hover:text-green-600">Login</NavLink>
                <NavLink to="/signup" className="block text-gray-700 hover:text-green-600">Sign Up</NavLink>
              </>
            )}
            {auth && (
              <NavLink to="/" className="block text-gray-700 hover:text-green-600" onClick={handleLogout}>Logout</NavLink>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
              {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white px-4 pb-4 space-y-2">
          <NavLink to="/" className="block text-gray-700 hover:text-green-600">Home</NavLink>
          <NavLink to="/" className="block text-gray-700 hover:text-green-600">Hire Worker</NavLink>
          {!auth && (
            <>
              <NavLink to="/signin" className="block text-gray-700 hover:text-green-600">Login</NavLink>
              <NavLink to="/signup" className="block text-gray-700 hover:text-green-600">Sign Up</NavLink>
            </>
          )}
          {auth && (
            <NavLink to="/" className="block text-gray-700 hover:text-green-600">Logout</NavLink>
          )}
        </div>
      )}
    </nav>
  );
}