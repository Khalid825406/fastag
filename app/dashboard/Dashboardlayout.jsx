"use client";
import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

export default function DashboardLayout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-[#f5fcff]">
      {/* Sidebar (hidden on mobile) */}
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
        <main className="p-4 sm:p-6 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}
