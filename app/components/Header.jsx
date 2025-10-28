import { Wallet, UserCircle, Menu } from "lucide-react";

export default function Header({ toggleSidebar }) {
  return (
    <header className="bg-[#b2f5f0] px-4 sm:px-6 py-4 flex items-center justify-between sticky top-0 z-30">
      {/* Left: Menu icon on mobile */}
      <div className="flex items-center gap-3">
        <button
          onClick={toggleSidebar}
          className="sm:hidden text-[#004d4d] focus:outline-none"
        >
          <Menu size={26} />
        </button>
        <h1 className="text-lg sm:text-xl font-semibold text-[#004d4d]">
          FASTag Recharge & Offers
        </h1>
      </div>

      {/* Right: Wallet + Profile */}
      <div className="flex items-center gap-3 sm:gap-4">
        <div className="flex items-center bg-white rounded-full px-3 py-1 border">
          <Wallet size={18} className="text-[#004d4d]" />
          <span className="ml-2 text-[#004d4d] text-sm sm:text-base">
            ₹0.00
          </span>
        </div>
        <button className="bg-[#004d4d] text-white px-3 py-1 rounded-md text-sm sm:text-base">
          Add Money
        </button>
        <UserCircle size={30} className="text-[#004d4d]" />
      </div>
    </header>
  );
}
