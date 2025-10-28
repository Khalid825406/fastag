"use client";
import React, { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is FASTag?",
      answer:
        "FASTag is a prepaid tag fixed on your vehicle’s windscreen that enables automatic toll payment at toll plazas using RFID technology.",
    },
    {
      question: "How can I recharge my FASTag on Logiclead?",
      answer:
        "Simply enter your vehicle/FASTag details, choose a recharge amount, select your payment method (UPI, card, net banking), and complete the payment.",
    },
    {
      question: "What payment methods are accepted?",
      answer:
        "Logiclead supports UPI, debit/credit cards, net banking, and popular digital wallets.",
    },
    {
      question: "Is there any minimum recharge amount?",
      answer:
        "Yes, the minimum recharge amount depends on the issuing bank, but on Logiclead, you can start from as low as ₹100.",
    },
    {
      question: "How long does it take for the recharge to reflect?",
      answer:
        "Recharges are usually credited instantly, but in rare cases, it may take up to 30 minutes depending on the bank network.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section py-12 bg-gray-50">
      <div className="max-w-[90%] lg:max-w-[80%] mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-300 rounded-lg overflow-hidden shadow-sm"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left px-6 py-4 bg-white flex justify-between items-center font-medium hover:bg-gray-100 transition"
              >
                {faq.question}
                <span className="text-xl font-bold">
                  {openIndex === index ? "-" : "+"}
                </span>
              </button>

              {openIndex === index && (
                <div className="px-6 py-4 bg-gray-50 text-gray-700">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;