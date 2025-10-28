"use client";
import { Home, Clock, Wallet, Gift, HelpCircle, LogOut, X } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

const links = [
  { name: "Home", icon: <Home size={20} />, to: "/dashboard" },
  { name: "Recharge History", icon: <Clock size={20} />, to: "#" },
  { name: "Wallet History", icon: <Wallet size={20} />, to: "#" },
  { name: "Offers", icon: <Gift size={20} />, to: "#" },
  { name: "Help and Support", icon: <HelpCircle size={20} />, to: "#" },
  { name: "Logout", icon: <LogOut size={20} />, to: "#" },
];

export default function Sidebar({ isOpen, setIsOpen }) {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <>
      {/* 🔹 Mobile Overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/40 z-40 sm:hidden"
        ></div>
      )}

      {/* 🔹 Sidebar */}
      <div
        className={`fixed sm:sticky top-0 left-0 h-screen w-64 bg-[#004d4d] text-white z-50 
          transform transition-transform duration-300 flex flex-col justify-between
          ${isOpen ? "translate-x-0" : "-translate-x-full sm:translate-x-0"}
        `}
      >
        {/* 🔹 Header */}
        <div className="flex items-center justify-between px-4 py-5 border-b border-white/20">
          <h2 className="text-xl font-semibold flex items-center gap-2">
            <div className="bg-white text-[#004d4d] w-8 h-8 flex items-center justify-center rounded-full font-bold">
              ₹
            </div>
            FASTag
          </h2>
          <button
            className="sm:hidden text-white"
            onClick={() => setIsOpen(false)}
          >
            <X size={24} />
          </button>
        </div>

        {/* 🔹 Nav Links */}
        <nav className="flex-1 mt-6 overflow-y-auto scrollbar-hide">
          {links.map((link, i) => (
            <button
              key={i}
              onClick={() => {
                router.push(link.to);
                setIsOpen(false);
              }}
              className={`flex items-center gap-3 w-full text-left px-5 py-3 hover:bg-[#006666] transition-colors duration-200 ${
                pathname === link.to ? "bg-[#006666]" : ""
              }`}
            >
              {link.icon}
              {link.name}
            </button>
          ))}
        </nav>
      </div>
    </>
  );
}
