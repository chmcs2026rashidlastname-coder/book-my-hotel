import { Link, useNavigate } from "react-router-dom";
import { Hotel, Menu } from "lucide-react";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <div
      className="navbar fixed top-0 z-50 h-20
                 bg-base-100/80 backdrop-blur-md
                 shadow-md border-b border-base-300
                 px-4 sm:px-8 lg:px-12"
    >
      {/* LEFT SECTION */}
      <div className="navbar-start gap-3">

        {/* Mobile Menu */}
        <div className="dropdown lg:hidden">
          <label tabIndex={0} className="btn btn-ghost" aria-label="Open Menu">
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

        {/* Back Button with DaisyUI Tooltip */}
        <div className="tooltip tooltip-bottom" data-tip="Go Back">
          <button
            aria-label="Go Back"
            onClick={() => navigate(-1)}
            className="btn btn-ghost"
          >
            <span className="text-3xl font-bold">←</span>
          </button>
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
        <div className="tooltip tooltip-bottom" data-tip="Go to Home">
          <Link
            to="/"
            aria-label="Home"
            className="btn btn-ghost text-lg 
                       hover:bg-primary/10 
                       hover:scale-105 transition"
          >
            Home
          </Link>
        </div>

        {/* Add Hotel Button */}
        <div className="tooltip tooltip-bottom" data-tip="Add New Hotel">
          <Link
            to="/add"
            aria-label="Add Hotel"
            className="btn btn-primary text-lg 
                       hover:scale-105 transition"
          >
            Add Hotel
          </Link>
        </div>

      </div>
    </div>
  );
}