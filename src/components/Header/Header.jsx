// src/components/Header.jsx
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
// import logo from "../assets/logo.jpeg"
const Header = () => {
  return (
    <header className="bg-[#f5f0a0] text-black shadow-md sticky top-0 z-50">
      {/* Top Right Address Bar */}
      <div className="flex justify-end px-4 py-1 absolute ml-[170vh] text-sm text-white font-medium">
        Gurdaspur, Punjab - 143530, India
      </div>

      {/* Main Header Content */}
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between relative h-24">
        {/* Left Logo */}
        <div className="flex items-center gap-4 h-full  ">
          <img
            src="https://imgs.search.brave.com/GB19E5Pm41RmcTlD8naLYmBFb0iIInWunPdKIGAVIlY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAzLzc0LzE2LzM2/LzM2MF9GXzM3NDE2/MzY5Nl9LVkpsRkJQ/cFd5a3hqUzcxV2dw/VVNOblZZcElMRlBJ/UC5qcGc"
            alt="Logo"
            className="h-full w-auto object-contain"
          />
        </div>

        {/* Navigation */}
       
          <Navbar />
      </div>
    </header>
  );
};

export default Header;
