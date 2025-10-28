"use client";
import Image from "next/image";

const FastTag = () => {
  return (
    <div className="relative w-full h-[170px] sm:h-[400px] lg:h-[560px]">
      <Image
        src="/rechargeicon_20240803130432465829.jpg"
        alt="Website Banner"
        fill                 // Image fills the parent container
        className="object-cover" // cover mode ensures it fills without stretching
        priority             // loads faster
      />
    </div>
  );
};

export default FastTag;