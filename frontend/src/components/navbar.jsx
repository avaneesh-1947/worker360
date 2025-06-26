import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink, useNavigate, useLocation } from "react-router-dom";


export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [auth, setAuth] = useState(localStorage.getItem("email"));
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("email");
    setAuth(null);
    navigate("/landingPage");
  }

  const toggleMenu = () => setMenuOpen(!menuOpen);

  // Har render pe localStorage check karo aur custom event bhi listen karo
  useEffect(() => {
    // Initial check
    const checkAuth = () => {
      const email = localStorage.getItem("email");
      setAuth(email);
    };

    // Har render pe check karo
    checkAuth();

    // Storage event (dusre tabs ke liye)
    const handleStorageChange = () => {
      checkAuth();
    };

    // Custom event (same tab ke liye)
    const handleAuthChange = () => {
      checkAuth();
    };

    window.addEventListener('storage', handleStorageChange);
    window.addEventListener('authChange', handleAuthChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('authChange', handleAuthChange);
    };
  }, [location.pathname]); // Location change pe bhi check karo

  const isLandingPage = location.pathname === '/';

  return (
    <nav className="bg-white shadow-md w-full fixed top-0 left-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <NavLink to="/" className="flex-shrink-0 text-2xl font-bold">
            <span className="text-black">Worker</span>
            <span style={{ color: "#54B435" }}>360</span>
          </NavLink>

          {/* Menu */}
          <div className="hidden md:flex space-x-6 items-center">
            {auth ? (
              <>
                <NavLink to="/hire" className="block text-gray-700 hover:text-green-600">Hire Worker</NavLink>
               
                <button onClick={handleLogout} className="block text-gray-700 hover:text-green-600">Logout</button>
              </>
            ) : (
              <>
                {isLandingPage && <NavLink to="/" className="block text-gray-700 hover:text-green-600">Home</NavLink>}
                <NavLink to="/login" className="block text-gray-700 hover:text-green-600">Login</NavLink>
                <NavLink to="/signup" className="bg-[#54B435] text-white px-4 py-2 rounded-md font-semibold hover:bg-green-600 transition">Sign Up</NavLink>
              </>
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
           {auth ? (
              <>
                <NavLink to="/hire" className="block text-gray-700 hover:text-green-600">Hire Worker</NavLink>
                <NavLink to="/dashboard" className="block text-gray-700 hover:text-green-600">Dashboard</NavLink>
                <button onClick={handleLogout} className="block w-full text-left text-gray-700 hover:text-green-600">Logout</button>
              </>
            ) : (
              <>
                <NavLink to="/" className="block text-gray-700 hover:text-green-600">Home</NavLink>
                <NavLink to="/login" className="block text-gray-700 hover:text-green-600">Login</NavLink>
                <NavLink to="/signup" className="block text-gray-700 hover:text-green-600">Sign Up</NavLink>
              </>
            )}
        </div>
      )}
    </nav>
  );
}