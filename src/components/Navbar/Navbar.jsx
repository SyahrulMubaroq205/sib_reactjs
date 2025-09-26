import React, { useState } from "react";
import { FiSearch, FiHeart, FiShoppingCart, FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl 
      flex items-center justify-between rounded-2xl px-6 py-3
      bg-white/20 backdrop-blur-lg shadow-lg z-50"
    >
      {/* Logo */}
      <div className="text-2xl font-bold text-black">GinMart</div>

        {/* Menu Desktop */}
        <div className="hidden md:flex items-center justify-between flex-1 ml-10">
          <div className="flex gap-8 text-black font-medium">
            <a href="#home" className="hover:text-purple-600">
              Home
            </a>
            <a href="#book" className="hover:text-purple-600">
              Book
            </a>
            <a href="#contact" className="hover:text-purple-600">
              Contact
            </a>
          </div>

        {/* Right Side */}
        <div className="flex items-center gap-6">
          {/* Icons */}
          <div className="flex gap-4 text-xl text-black">
            <FiSearch className="cursor-pointer hover:text-purple-600" />
            <FiHeart className="cursor-pointer hover:text-purple-600" />
            <FiShoppingCart className="cursor-pointer hover:text-purple-600" />
          </div>

          {/* Buttons */}
          <div className="flex gap-3">
            <button className="px-5 py-1.5 rounded-lg bg-purple-400 text-white hover:bg-purple-500 transition">
              Login
            </button>
            <button className="px-5 py-1.5 rounded-lg bg-purple-500 text-white hover:bg-purple-600 transition">
              Registrasi
            </button>
          </div>
        </div>
      </div>

      {/* Hamburger (Mobile) */}
      <div
        className="md:hidden text-2xl text-black cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FiX /> : <FiMenu />}
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className="absolute top-16 right-4 w-64 bg-white/80 backdrop-blur-md 
          rounded-xl shadow-lg p-6 flex flex-col gap-4 text-black font-medium md:hidden"
        >
          <a href="#home" className="hover:text-purple-600">
            Home
          </a>
          <a href="#book" className="hover:text-purple-600">
            Book
          </a>
          <a href="#contact" className="hover:text-purple-600">
            Contact
          </a>

          {/* Icons */}
          <div className="flex gap-4 text-xl mt-2">
            <FiSearch className="cursor-pointer hover:text-purple-600" />
            <FiHeart className="cursor-pointer hover:text-purple-600" />
            <FiShoppingCart className="cursor-pointer hover:text-purple-600" />
          </div>

          {/* Buttons */}
          <div className="flex flex-col gap-2 mt-4">
            <button className="px-4 py-2 rounded-lg bg-purple-400 text-white hover:bg-purple-500 transition">
              Login
            </button>
            <button className="px-4 py-2 rounded-lg bg-purple-500 text-white hover:bg-purple-600 transition">
              Registrasi
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
