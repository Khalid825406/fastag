import React from "react";

export default function ProviderCard({ name, logo }) {
  return (
      <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition flex items-center gap-3 p-4 cursor-pointer">
        <img
          src={logo}
          alt={name}
          className="w-10 h-10 sm:w-12 sm:h-12 object-contain rounded-md"
        />
        <span className="font-medium text-gray-700 text-sm sm:text-base">
          {name}
        </span>
      </div>
  );
}
