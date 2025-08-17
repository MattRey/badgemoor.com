import React from "react";
import Image from "next/image";

interface WhyCardProps {
  title: string;
  image: string;
  text: string;
}

const WhyCard: React.FC<WhyCardProps> = ({ title, image, text }) => {
  return (
    <div className="relative w-[382px] mx-auto md:w-[352px] lg:w-[309px] xl:w-[382px] h-[382px] md:h-[352px] lg:h-[309px] xl:h-[382px] group overflow-hidden">
      <div className="relative w-full h-full">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>

      <div className="absolute inset-0 flex flex-col">
        <div className="bg-gray-400/60 p-4 group-hover:bg-[var(--primary)] transition-all duration-500 ease-in-out">
          <h3 className="text-white text-xl font-medium">{title}</h3>
        </div>

        <div className="bg-white/90 flex-1 p-4 overflow-y-auto no-scrollbar transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100 invisible group-hover:visible">
          <p className="text-gray-800">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default WhyCard;
