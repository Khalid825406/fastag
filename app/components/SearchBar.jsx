import Image from "next/image";
import { Search } from "lucide-react";

export default function SearchBar() {
  return (
    <div className="flex flex-col items-center text-center mt-8 px-4">
      {/* 🔹 Logo */}
      <Image
        src="/bbps-new-2.png"
        alt="Bharat Connect"
        width={100}
        height={100}
        className="hidden md:block"
      />

      {/* 🔹 Title */}
      <h3 className="text-lg sm:text-xl font-semibold text-gray-700 mt-3 mb-2">
        Select your FasTag Providers
      </h3>

      {/* 🔹 Search Box */}
      <div className="relative w-full max-w-sm sm:max-w-md mt-2">
        <input
          type="text"
          placeholder="Search Providers..."
          className="w-full border border-gray-300 rounded-md py-2 pl-10 pr-3 text-sm sm:text-base focus:ring-2 focus:ring-[#00a6a6] focus:outline-none shadow-sm"
        />
        <Search
          size={18}
          className="absolute left-3 top-2.5 text-gray-400"
        />
      </div>
    </div>
  );
}
