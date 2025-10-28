"use client";
import Link from "next/link";
import React from "react";

export default function LoginModal({ open, onClose }) {
  if (!open) return null;

  // Handle overlay click (close only if background clicked)
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      onClick={handleOverlayClick}
      className="fixed inset-0 bg-[#0000005e] bg-opacity-40 z-50 flex items-center justify-center"
    >
      {/* Modal Box */}
      <div className="bg-white rounded-2xl shadow-xl w-[90%] sm:w-[400px] p-6 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-2xl text-gray-600 hover:text-gray-800"
        >
          ×
        </button>

        {/* Header */}
        <h2 className="text-xl font-semibold text-center mb-4">Login</h2>

        {/* Email Field */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm mb-2">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-[#00686e] focus:outline-none"
          />
        </div>

        {/* Login Button */}
        <Link href="/dashboard">
        <button className="w-full bg-[#00686e] text-white font-semibold py-2.5 rounded-lg hover:bg-[#00585d] transition">
          Login
        </button>
</Link>
        {/* Checkbox */}
        <div className="flex items-start gap-2 mt-4">
          <input
            type="checkbox"
            defaultChecked
            id="offers"
            className="w-5 h-5 accent-[#00686e] mt-1"
          />
          <label htmlFor="offers" className="text-gray-700 text-sm">
            Keep me posted about sales and offers
          </label>
        </div>

        {/* Terms */}
        <p className="text-xs text-gray-600 mt-4 leading-relaxed">
          By proceeding, I accept the{" "}
          <a href="#" className="text-[#00686e] underline">
            T&amp;C
          </a>{" "}
          and{" "}
          <a href="#" className="text-[#00686e] underline">
            Privacy Policy
          </a>
          .
        </p>

        {/* Footer */}
        <div className="flex items-center justify-center text-xs text-gray-500 mt-4">
          <span role="img" aria-label="lock" className="mr-1">
            🔒
          </span>
          Secured by Logiclead
        </div>
      </div>
    </div>
  );
}