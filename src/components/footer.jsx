 import {Link} from 'react-router-dom';
export default function Footer() {
  return (
    <footer className="bg-[#54B435] text-white mt-16">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo & Description */}
        <div>
          <h2 className="text-2xl font-bold mb-2">
            <span className="text-black">Worker</span>360
          </h2>
          <p className="text-sm text-white/90">
            Connecting you to verified local workers — electricians, plumbers, cleaners and more. Fast, trusted, and affordable services at your fingertips.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">About Us</a></li>
            <li><a href="#" className="hover:underline">Hire Worker</a></li>
            <li><a href="#" className="hover:underline">Login</a></li>
            <li><a href="#" className="hover:underline">Sign Up</a></li>
            <li><Link to="/contact" className="hover:underline">Contact Us</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact</h3>
          <p className="text-sm mb-2">📞 +91 98765 43210</p>
          <p className="text-sm mb-2">✉️ support@worker360.in</p>
          <p className="text-sm">📍 Lucknow, India</p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#4BA72E] py-4 text-center text-sm text-white/90">
        © {new Date().getFullYear()} Worker360. All rights reserved.
      </div>
    </footer>
  );
}
