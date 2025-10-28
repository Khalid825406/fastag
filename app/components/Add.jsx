"use client";
import Image from "next/image";

const Add = () => {
  return (
  <div className="relative w-full h-[84px] sm:h-[250px]">
  <Image
    src="/Website.png"
    alt="Website Banner"
    fill
    className="object-cover"
    priority
  />
</div>

  );
};

export default Add;
