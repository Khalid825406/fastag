"use client";
import React, { useState } from "react";
import { GoDotFill } from "react-icons/go";
import LoginModal from "./LoginModal"; // import your modal component

export default function HeroSection() {
  const [openLogin, setOpenLogin] = useState(false);

  return (
    <section className="hero-section">
      <div className="container mx-auto max-w-[90%] lg:max-w-[80%]">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Left Side */}
          <div className="lg:w-1/2 lg:text-left mb-8 lg:mb-0">
            <h1 className="text-[30px] lg:text-5xl font-bold text-gray-800 mb-6 leading-snug">
              FASTag Recharge <br /> Online at Logiclead
            </h1>

            <ul className="space-y-3 text-gray-700 text-lg">
              <li className="flex items-center gap-2">
                <GoDotFill className="hero-list" />
                Multiple Payment Option
              </li>
              <li className="flex items-center gap-2">
                <GoDotFill className="hero-list" />
                Multiple Discounts & Offers for FASTag
              </li>
              <li className="flex items-center gap-2">
                <GoDotFill className="hero-list" />
                24×7 Customer Support
              </li>
            </ul>
          </div>

          {/* Right Side */}
          <div className="lg:w-[42%] w-full bg-[#f5f7fd] shadow-lg rounded-2xl border border-gray-300">
            {/* Header Section */}
            <div className="flex items-center justify-between bg-[#00686e] rounded-t-2xl p-4">
              <label className="text-white font-semibold">FASTag Recharge</label>
              <img
                src="https://logiclead.in/assets/img/icons/bbps-new-2.png"
                alt="Bharat Connect"
                width={70}
                height={20}
                className="mt-1"
              />
            </div>

            <div className="p-6">
              {/* Input Field */}
              <div className="px-2">
                <input
                  type="text"
                  placeholder="Enter vehicle number"
                  className="w-full border border-gray-300 rounded-lg p-3 mb-3 focus:outline-none focus:ring-2 focus:ring-[#00686e]"
                />

                {/* Proceed Button */}
                <button
                  onClick={() => setOpenLogin(true)} // 👈 open modal on click
                  className="w-full bg-[#00686e] hover:bg-[#00585d] text-white font-semibold py-3 rounded-lg transition-all"
                >
                  Proceed
                </button>

                {/* Note */}
                <small className="text-gray-600 mt-2 block text-sm">
                  ⚡ Get the best deals on FASTag Recharge
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ✅ Login Modal */}
      <LoginModal open={openLogin} onClose={() => setOpenLogin(false)} />
    </section>
  );
}