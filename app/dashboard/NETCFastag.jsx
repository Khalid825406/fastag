import React from "react";
import { FaTag } from "react-icons/fa";

const NETCFastag = () => {
  return (
    <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-6 sm:p-8 md:p-10">
      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <div className="text-blue-600 text-2xl sm:text-3xl md:text-4xl">
          <FaTag />
        </div>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold">
          NETC FASTag
        </h2>
      </div>

      {/* Content */}
      <div className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-6">
        <p>
          The National Electronic Toll Collection (NETC) system is a
          pay-per-use toll collection application that anyone can use. The
          NETC solution uses FASTags with transponder chips. This technology
          enables toll payment and electronic clearing that have been
          implemented for toll collection systems in the past.
        </p>
      </div>

      {/* Benefits */}
      <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3">
        Benefits Of FASTag
      </h3>
      <ul className="list-disc list-inside text-gray-700 space-y-2 text-sm sm:text-base md:text-lg">
        <li>Saves Time</li>
        <li>Smooth Toll Passing</li>
        <li>Saves Fuel</li>
        <li>Alerts on Mobile</li>
        <li>Saves Money</li>
        <li>Easy Online Recharge</li>
      </ul>
    </div>
  );
};

export default NETCFastag;
