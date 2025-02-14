import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className=" font-alice bg-white sticky top-0 shadow-md shadow-gray-400 text-white">
      {/* Desktop View */}
      <div className="hidden lg:flex justify-around items-center py-7">
        <h1
        onClick={()=>navigate("/")}
        style={{ letterSpacing: "15px" }} className="text-xl text-gray-800 cursor-pointer select-none font-semibold">
          VOT<span className="text-[#7049C3]">O</span>HOT
        </h1>
        <ul className="flex items-center md:gap-5 lg:gap-10 text-base" style={{ letterSpacing: "3px" }}>
          <li
            onClick={() => navigate("/")}
            className={`cursor-pointer transition-all duration-300 ease-in-out ${
              isActive("/") ? "bg-[#7049c3] text-white px-6 py-2 rounded-md scale-105 shadow-md" : "text-gray-800 hover:text-black"
            }`}
          >
            Home
          </li>
          <li
            onClick={() => navigate("/about")}
            className={`cursor-pointer transition-all duration-300 ease-in-out ${
              isActive("/about") ? "bg-[#7049c3] text-white px-6 py-2 rounded-md scale-105 shadow-md" : "text-gray-800 hover:text-black"
            }`}
          >
            About
          </li>
          <li
            onClick={() => navigate("/products")}
            className={`cursor-pointer transition-all duration-300 ease-in-out ${
              isActive("/products") ? "bg-[#7049c3] text-white px-6 py-2 rounded-md scale-105 shadow-md" : "text-gray-800 hover:text-black"
            }`}
          >
            Hosting Products
          </li>
        </ul>
        <button onClick={()=>navigate("/contact")} className="bg-[#7049c3] px-6 py-2 rounded-md hover:bg-[#5d3cae] transition-all" style={{ letterSpacing: "6px" }}>
          Contact
        </button>
      </div>

      {/* Mobile View */}
      <div className="lg:hidden flex justify-between items-center px-5 py-5">
        <h1 onClick={()=>navigate("/")} style={{ letterSpacing: "10px" }} className="text-xl text-gray-800 select-none cursor-pointer font-semibold">
        VOT<span className="text-[#7049c3]">O</span>HOT
        </h1>

        {/* Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`relative z-50 transition-transform duration-300 ${
            isOpen ? "rotate-180 scale-125" : "rotate-0"
          }`}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden flex flex-col items-center bg-gray-900 transition-all duration-300 ${
          isOpen ? "max-h-screen opacity-100 py-5" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <ul className="flex flex-col gap-5 text-base text-center" style={{ letterSpacing: "3px" }}>
          <li
            onClick={() => {navigate("/");setIsOpen(false)}}
            className={`cursor-pointer transition-all duration-300 ease-in-out ${
              isActive("/") ? "bg-[#7049c3] text-white px-6 py-2 rounded-md scale-105 shadow-md" : "text-gray-800 hover:text-black"
            }`}
          >
            Home
          </li>
          <li
            onClick={() => {navigate("/about"); setIsOpen(false)}}
            className={`cursor-pointer transition-all duration-300 ease-in-out ${
              isActive("/about") ? "bg-[#7049c3] text-white px-6 py-2 rounded-md scale-105 shadow-md" : "text-gray-800 hover:text-black"
            }`}
          >
            About
          </li>
          <li
            onClick={() => {navigate("/products"); setIsOpen(false)}}
            className={`cursor-pointer transition-all duration-300 ease-in-out ${
              isActive("/products") ? "bg-[#7049c3] text-white px-6 py-2 rounded-md scale-105 shadow-md" : "text-gray-800 hover:text-black"
            }`}
          >
            Hosting Products
          </li>
        </ul>
        <button
        onClick={()=>{navigate("/contact");setIsOpen(false)}}
        className="bg-[#7049c3] px-6 py-2 mt-5 rounded-md hover:bg-[#5d3cae] transition-all" style={{ letterSpacing: "6px" }}>
          Contact
        </button>
      </div>
    </nav>
  );
}
