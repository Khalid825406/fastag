"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MdOutlineMail } from "react-icons/md";
import { HiLocationMarker } from "react-icons/hi";


const Footer = () => {
  return (
    <footer className="bg-[#00686e] text-white pt-10">
      <div className="container mx-auto max-w-[90%] lg:max-w-[80%]"> {/* 80% container width */}
        <div className="flex flex-wrap gap-y-6 lg:gap-y-0 lg:flex-nowrap justify-between">
          {/* Logo & Social */}
          <div className="lg:w-1/3 w-full">
            <Image
              src="/logic_img2.png"
              alt="Logo"
              width={150}
              height={50}
              className="mb-3"
            />
            <div className="flex gap-3 mb-3">
              {/* Social icons can go here */}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:w-1/3 w-full">
            {/* Add quick links if needed */}
          </div>

          {/* Reach Us */}
          <div className="lg:w-1/3 w-full">
            <h5 className="font-semibold mb-3 text-lg">Reach Us</h5>
            <p className="flex items-center gap-2 mb-2">
              <MdOutlineMail  size={20}/> ops@logiclead.in
            </p>
            <p className="flex items-center gap-2 mb-2">
              <MdOutlineMail  size={20}/> tech@logiclead.in
            </p>
            <p className="flex gap-2">
              <HiLocationMarker  size={38}/> Office No 15, Ground Floor, D-29, Sector 3,
              Noida, Gautam Buddha Nagar, Uttar Pradesh, 201301.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-white-600 py-4 mt-6 text-sm">
          <p className="mb-2 md:mb-0">© 2025 Logiclead. All rights reserved</p>
          <div className="flex gap-4">
            <Link href="/termsConditions" className="hover:text-yellow-400">
              Terms & Conditions
            </Link>
            <Link href="/privacyPolicy" className="hover:text-yellow-400">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
