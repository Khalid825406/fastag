"use client";
import React, { useState } from "react";
import { FaWallet, FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import LoginModal from "./LoginModal";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const handleOpenLogin = () => {
    setShowLogin(true);
    setMenuOpen(false);
  };

  return (
    <>
      {/* 🔹 Navbar */}
      <nav className="bg-[#00686e] py-2 shadow-md fixed top-0 left-0 w-full z-50">
        <div className="w-[95%] sm:w-[90%] lg:w-[80%] mx-auto flex items-center justify-between">
          {/* Left Logo */}
          <div className="flex items-center">
            <a href="/">
              <img
                src="https://logiclead.in/assets/img/banking_logo/logic_img2.png"
                alt="Logo"
                className="h-10 w-auto"
              />
            </a>
          </div>

          {/* Desktop Right */}
          <div className="hidden lg:flex items-center space-x-4">
            <button
              onClick={handleOpenLogin}
              className="flex items-center text-white font-medium hover:text-yellow-400 transition"
            >
              <FaWallet className="mr-1" /> Wallet
            </button>
            <div
              className="profile-avatar cursor-pointer"
              onClick={handleOpenLogin}
            >
              <img
                src="https://logiclead.in/assets/img/new-guest-user-male.svg"
                alt="Profile"
                className="h-10 w-10 rounded-full border-2 border-white"
              />
            </div>
          </div>

          {/* Mobile Right */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={handleOpenLogin}
              className="mr-3 text-white text-2xl"
            >
              <FaWallet />
            </button>
            <button
              className="text-white text-2xl"
              onClick={() => setMenuOpen(true)}
            >
              <FaBars />
            </button>
          </div>
        </div>
      </nav>

      {/* 🔹 Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}

      {/* 🔹 Slide Menu Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full bg-white z-50 shadow-2xl transform transition-transform duration-300 p-[10px] ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img
              src="https://logiclead.in/assets/img/banking_logo/logiclead%20logo.png"
              alt="Logo"
              className="h-10"
            />
          </div>
          <button
            onClick={() => setMenuOpen(false)}
            className="text-3xl text-gray-600 hover:text-red-500"
          >
            <IoClose />
          </button>
        </div>

        {/* Login / Signup */}
        <div
          onClick={handleOpenLogin}
          className="bg-[#f5f5f5] p-[10px] rounded-[8px] mt-[20px] flex items-center cursor-pointer hover:bg-gray-100 transition"
        >
          <img
            src="https://logiclead.in/assets/img/new-guest-user-male.svg"
            alt="User Icon"
            className="h-10 w-10 rounded-full border mr-3"
          />
          <div className="flex-1">
            <h6 className="text-gray-800 font-semibold">Login / Signup</h6>
            <p className="text-gray-500 text-sm">Login to avail best deals</p>
          </div>
          <IoIosArrowForward size={20} />
        </div>

        {/* Wallet Option */}
        <div
          onClick={handleOpenLogin}
          className="bg-[#f5f5f5] p-[10px] rounded-[8px] mt-[20px] flex items-center cursor-pointer hover:bg-gray-100 transition"
        >
          <FaWallet className="text-[#00686e] text-lg mr-3" />
          <div className="flex-1">
            <h6 className="text-gray-800 font-semibold">Wallet</h6>
          </div>
          <IoIosArrowForward size={20} />
        </div>
      </div>

      {/* 🔹 Login Modal */}
      <LoginModal open={showLogin} onClose={() => setShowLogin(false)} />
    </>
  );
};

export default Navbar;