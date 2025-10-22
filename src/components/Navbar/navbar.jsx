import { Link } from "react-router-dom";
import { Bell } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-3 bg-white shadow-sm">
      {/* Logo */}
      <Link to="/" className="flex items-center space-x-1">
        <span className="font-bold text-lg">Foodwaste</span>
        <span className="font-bold text-lg text-green-600">vanish</span>
      </Link>

      {/* Menu */}
      <div className="hidden md:flex space-x-6 text-lg text-gray-700">
        <Link to="/browse" className="hover:text-green-600">Browse Donations</Link>
        <Link to="/mydonations" className="hover:text-green-600">My Donations</Link>
        <Link to="/received" className="hover:text-green-600">Received</Link>
      </div>

      {/* Right side */}
      <div className="flex items-center space-x-4">
        <Link to="/donate"
          className="flex items-center bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition">
          Donate Food
        </Link>

        <div className="relative">
          <Bell className="w-5 h-5 text-gray-700" />
        </div>

        <img
          src="https://cdn-icons-png.flaticon.com/512/4140/4140037.png"
          alt="User"
          className="w-8 h-8 rounded-full border"
        />
      </div>
    </nav>
  );
}
