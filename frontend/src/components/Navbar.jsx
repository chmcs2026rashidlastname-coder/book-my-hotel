import { Link, useNavigate } from "react-router-dom";
import { Hotel, Menu } from "lucide-react";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <div
      className="navbar fixed top-0 z-50 h-20
                 bg-base-100 shadow-md border-b border-base-300
                 px-4 sm:px-8 lg:px-12"
    >
      {/* LEFT SECTION */}
      <div className="navbar-start gap-3">

        {/* Mobile Menu */}
        <div className="dropdown lg:hidden">
          <label tabIndex={0} className="btn btn-ghost">
            <Menu size={30} />
          </label>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] 
                       p-3 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/add">Add Hotel</Link>
            </li>
          </ul>
        </div>

        {/* Back Button (Bigger + Custom Tooltip) */}
        <div className="relative group">
          <button
            onClick={() => navigate(-1)}
            className="btn btn-ghost"
          >
            <span className="text-3xl font-bold">←</span>
          </button>

          <span
            className="absolute -bottom-10 left-1/2 -translate-x-1/2
                       bg-black text-white text-sm px-3 py-1.5
                       rounded-md shadow-lg
                       opacity-0 group-hover:opacity-100
                       transition duration-200
                       pointer-events-none whitespace-nowrap"
          >
            Go Back
          </span>
        </div>

      </div>

      {/* LOGO */}
      <div className="navbar-center lg:navbar-start">
        <Link
          to="/"
          className="text-2xl sm:text-3xl font-extrabold text-primary 
                     flex items-center gap-3"
        >
          <Hotel size={34} />
          Book My Hotel
        </Link>
      </div>

      {/* DESKTOP BUTTONS */}
      <div className="navbar-end hidden lg:flex gap-6">

        {/* Home Button */}
        <div className="relative group">
          <Link
            to="/"
            className="btn btn-ghost text-lg 
                       hover:bg-primary/10 
                       hover:scale-105 transition"
          >
            Home
          </Link>

          <span
            className="absolute -bottom-10 left-1/2 -translate-x-1/2
                       bg-black text-white text-sm px-3 py-1.5
                       rounded-md shadow-lg
                       opacity-0 group-hover:opacity-100
                       transition duration-200
                       pointer-events-none whitespace-nowrap"
          >
            Go to Home
          </span>
        </div>

        {/* Add Hotel Button */}
        <div className="relative group">
          <Link
            to="/add"
            className="btn btn-primary text-lg 
                       hover:scale-105 transition"
          >
            Add Hotel
          </Link>

          <span
            className="absolute -bottom-10 left-1/2 -translate-x-1/2
                       bg-black text-white text-sm px-3 py-1.5
                       rounded-md shadow-lg
                       opacity-0 group-hover:opacity-100
                       transition duration-200
                       pointer-events-none whitespace-nowrap"
          >
            Add New Hotel
          </span>
        </div>

      </div>
    </div>
  );
}