import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "/assets/logo.png";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoverRegister, setHoverRegister] = useState(false);

  const setClassReg = () => {
    return `absolute top-14 right-0 w-48 flex flex-col items-center bg-green-600 text-white rounded-lg shadow-lg z-10 transition-opacity duration-300 ${
      hoverRegister ? "opacity-100" : "opacity-0 pointer-events-none"
    }`;
  };

  return (
    <div className="flex items-center justify-between bg-gradient-to-r from-green-500 to-blue-500 h-16 px-4 md:px-20 text-white shadow-lg">
      {/* Logo */}
      <div className="flex items-center">
        <Link to="/">
          <img src={logo} alt="logo" className="h-10 md:h-14" />
        </Link>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-6 text-sm font-medium">
        <Link
          to="/"
          className="hover:bg-white hover:text-green-600 transition-colors px-4 py-2 rounded-full"
        >
          HOME
        </Link>
        <Link
          to="/aboutus"
          className="hover:bg-white hover:text-green-600 transition-colors px-4 py-2 rounded-full"
        >
          ABOUT US
        </Link>
        <Link
          to="/event"
          className="hover:bg-white hover:text-green-600 transition-colors px-4 py-2 rounded-full"
        >
          EVENTS
        </Link>
        <Link
          to="/contactus"
          className="hover:bg-white hover:text-green-600 transition-colors px-4 py-2 rounded-full"
        >
          CONTACT US
        </Link>
        <div
          className="relative"
          onMouseEnter={() => setHoverRegister(true)}
          onMouseLeave={() => setHoverRegister(false)}
          tabIndex={0} // Accessibility
          onFocus={() => setHoverRegister(true)}
          onBlur={() => setHoverRegister(false)}
        >
          <div className="hover:bg-white hover:text-green-600 transition-colors px-4 py-2 rounded-full cursor-pointer">
            REGISTER
          </div>
          <div className={setClassReg()}>
            <Link
              to="/user/register"
              className="hover:bg-green-700 px-4 py-2 w-full text-center rounded-t-lg"
            >
              User
            </Link>
            {/* <Link
              to="/orgregister"
              className="hover:bg-green-700 px-4 py-2 w-full text-center rounded-b-lg"
            >
              Organization
            </Link> */}
          </div>
        </div>
      </div>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden">
        <button
          className="text-2xl focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-70 z-10">
          <div className="absolute top-0 right-0 w-64 h-full bg-white text-green-600 p-6 shadow-lg">
            <button
              className="text-xl absolute top-4 right-4"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              ✕
            </button>
            <div className="flex flex-col space-y-4 mt-12 text-lg">
              <Link
                to="/"
                className="hover:text-green-700 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/aboutus"
                className="hover:text-green-700 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About Us
              </Link>
              <Link
                to="/event"
                className="hover:text-green-700 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Events
              </Link>
              <Link
                to="/contactus"
                className="hover:text-green-700 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact Us
              </Link>
              <Link
                to="/register"
                className="hover:text-green-700 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Register
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
