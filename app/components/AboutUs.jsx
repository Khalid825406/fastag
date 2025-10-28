"use client";
import React from "react";

const AboutUs = () => {
  return (
    <section className="about-us py-12 bg-white">
      <div className="max-w-[90%] lg:max-w-[80%] mx-auto flex flex-col lg:flex-row items-center gap-8">
        {/* Left Side Content */}
        <div className="lg:w-1/2">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">About Us</h2>
          <p className="text-gray-700 mb-3">
            Welcome to <b>Logiclead</b>, your trusted platform for FASTag recharge. We make it easy for vehicle
            owners to recharge their FASTag quickly and securely from anywhere.
          </p>
          <p className="text-gray-700">
            Our goal is to save your time at toll plazas by providing a smooth recharge
            experience with multiple payment options. With reliable service, exciting offers,
            and dedicated support, we are here to make your travel easier and more convenient.
          </p>
        </div>

        {/* Right Side Image */}
        <div className="lg:w-1/2 flex justify-center">
          <img
            src="https://logiclead.in/assets/img/banking_logo/mactc8ig_fastag_625x300_17_February_25.jpg"
            alt="About Us"
            className="rounded shadow-lg max-w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
