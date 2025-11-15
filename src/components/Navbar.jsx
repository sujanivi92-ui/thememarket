import React, { useState, useEffect, useRef } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { ShoppingCart, User } from "lucide-react";

export default function Navbar() {
  const [showThemeDropdown, setShowThemeDropdown] = useState(false);
  const [showTemplateDropdown, setShowTemplateDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowThemeDropdown(false);
        setShowTemplateDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="bg-[#3b1f86] text-white py-4 shadow-lg relative z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6">
        {/* Logo */}
        <h1 className="text-2xl font-bold italic">
          <Link to="/">Thememarket</Link>
        </h1>

        {/* Navigation Links */}
        <ul
          className="flex items-center gap-8 text-sm font-semibold"
          ref={dropdownRef}
        >
          {/* 🏠 Home */}
          <li>
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `relative transition-colors duration-200 ${
                  isActive
                    ? "after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-full after:h-[3px] after:bg-lime-400 text-white"
                    : "text-gray-300 hover:text-white"
                }`
              }
            >
              Home
            </NavLink>
          </li>

          {/* 🎨 Themes Dropdown */}
          <li
            className="relative"
            onMouseEnter={() => {
              setShowThemeDropdown(true);
              setShowTemplateDropdown(false);
            }}
            onMouseLeave={() => setShowThemeDropdown(false)}
          >
            <button
              onClick={() => navigate("/themes")}
              className={`hover:text-gray-200 transition ${
                showThemeDropdown ? "border-b-2 border-green-400 pb-1" : ""
              }`}
            >
              Themes
            </button>

            {showThemeDropdown && (
              <div className="absolute top-8 left-0 bg-white text-gray-700 shadow-lg rounded-md w-56 py-2 z-50">
                <ul>
                  <li className="px-4 py-2 hover:bg-gray-100 font-semibold cursor-pointer">
                    Business Themes
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 font-semibold cursor-pointer">
                    Portfolio Themes
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 font-semibold cursor-pointer">
                    Blog Themes
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 font-semibold cursor-pointer">
                    E-Commerce Themes
                  </li>
                </ul>
              </div>
            )}
          </li>

          {/* 📂 Templates Dropdown */}
          <li
            className="relative"
            onMouseEnter={() => {
              setShowTemplateDropdown(true);
              setShowThemeDropdown(false);
            }}
            onMouseLeave={() => setShowTemplateDropdown(false)}
          >
            <button
              onClick={() => navigate("/templates")}
              className={`hover:text-gray-200 transition ${
                showTemplateDropdown ? "border-b-2 border-green-400 pb-1" : ""
              }`}
            >
              Templates
            </button>

            {showTemplateDropdown && (
              <div className="absolute top-8 left-0 bg-white text-gray-700 shadow-lg rounded-md w-56 py-2 z-50">
                <Link
                  to="/templates/html"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  HTML Templates
                </Link>
                <Link
                  to="/templates/landing"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Landing Page Templates
                </Link>
                <Link
                  to="/templates/ui"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  UI Kits
                </Link>
              </div>
            )}
          </li>

          {/* 📘 About Us */}
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `relative transition-colors duration-200 ${
                  isActive
                    ? "after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-full after:h-[3px] after:bg-lime-400 text-white"
                    : "text-gray-300 hover:text-white"
                }`
              }
            >
              About Us
            </NavLink>
          </li>

          {/* 📞 Contact */}
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `relative transition-colors duration-200 ${
                  isActive
                    ? "after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-full after:h-[3px] after:bg-lime-400 text-white"
                    : "text-gray-300 hover:text-white"
                }`
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>

        {/* Icons (User + Cart) */}
        <div className="flex items-center gap-6">
          <NavLink to="/signin" className="text-lime-400 hover:text-lime-300">
            <User size={22} />
          </NavLink>

          <NavLink
            to="/cart"
            className="bg-white text-[#3b1f86] rounded-full p-2 hover:bg-gray-100 transition"
          >
            <ShoppingCart size={20} />
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
