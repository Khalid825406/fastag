"use client";
import React from "react";

const providers = [
  {
    name: "Indian Highways Management",
    img: "https://logiclead.in/assets/img/banking_logo/IHMCL-Logo.jpeg",
  },
  { name: "IndusInd Bank", img: "https://logiclead.in/assets/img/banking_logo/7fb9c4ae317ff5a843b86d86042f6597.jpg" },
  { name: "Bank of Baroda", img: "https://logiclead.in/assets/img/banking_logo/eb55d100ee42369d2e984e3cb4758c76.jpg" },
  { name: "Axis Bank", img: "https://logiclead.in/assets/img/banking_logo/76aabd7ec028d2927d5af281e82d9394.jpg" },
  { name: "IDFC FIRST Bank", img: "https://logiclead.in/assets/img/banking_logo/2dad745c5f2fdd1f341fd31ef4937a50.jpg" },
  { name: "HDFC Bank", img: "https://logiclead.in/assets/img/banking_logo/3d0764bf519e0ae62a43f818f832ca11.jpg" },
  { name: "Kotak Mahindra", img: "https://logiclead.in/assets/img/banking_logo/3adb17ad584e31a26d7f1119beb26c86.jpg" },
  { name: "Equitas", img: "https://logiclead.in/assets/img/banking_logo/51c53153e4a1ab4b735c213e62d7733f.jpg" },
  { name: "IDBI Bank", img: "https://logiclead.in/assets/img/banking_logo/6efb93f54538ebaf6c5251bc7a42713c.jpg" },
  { name: "IOB", img: "https://logiclead.in/assets/img/banking_logo/97a2e9a37d151bf1729b96678a88e292.jpg" },
  { name: "Jammu and Kashmir Bank", img: "https://logiclead.in/assets/img/banking_logo/55ba49c0871bbcfa6729799e4cdb466d.jpg" },
  { name: "Karnataka Bank", img: "https://logiclead.in/assets/img/banking_logo/15.webp" },
  { name: "Paytm Payments Bank", img: "https://logiclead.in/assets/img/banking_logo/8c6219ff367beac5f2730160a41aa897.jpg" },
  { name: "State Bank of India", img: "https://logiclead.in/assets/img/banking_logo/0986338cc1bd9659da9133bb4fc783a6.jpg" },
  { name: "Federal Bank", img: "https://logiclead.in/assets/img/banking_logo/2a4242814a0f7cc956fc2d14c1c4af2c.jpg" },
  { name: "ICICI Bank", img: "https://logiclead.in/assets/img/banking_logo/13102943-icici-b9b38f77-216e-45f2-891b-edf7a7643433.webp" },
  { name: "UCO Bank", img: "https://logiclead.in/assets/img/banking_logo/672b816d9405e17417c090fbb406ea6e.jpg" },
  { name: "Airtel Payments Bank", img: "https://logiclead.in/assets/img/banking_logo/1.webp" },
  { name: "AU Bank", img: "https://logiclead.in/assets/img/banking_logo/20.webp" },
  { name: "Bandhan Bank", img: "https://logiclead.in/assets/img/banking_logo/4ae8ee4f8f839bab7ceb8501e4555763.jpg" },
];

const ProviderSection = () => {
  return (
    <section className="provider-section py-12 bg-gray-50">
      <h3 className="text-2xl font-bold text-center mb-8 text-gray-800">
        FASTag Provider
      </h3>

      <div className="max-w-[90%] lg:max-w-[80%] mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {providers.map((provider, idx) => (
            <div
              key={idx}
              className="card flex flex-col items-center justify-between h-full text-center border border-gray-200 rounded-lg p-4 shadow-sm bg-white overflow-hidden"
            >
              <div className="flex-1 flex items-center justify-center">
                <img
                  src={provider.img}
                  alt={provider.name}
                  className="max-h-16 object-contain"
                />
              </div>
              <p className="mt-2 text-sm font-medium text-gray-700 break-words">
                {provider.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProviderSection;
