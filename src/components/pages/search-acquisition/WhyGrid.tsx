import React from "react";
import WhyCard from "./WhyCard";
import { whyUseUsData } from "@/data/why-use-us";

const WhyGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {whyUseUsData.map((item, index) => (
        <WhyCard
          key={index}
          title={item.title}
          image={item.image}
          text={item.text}
        />
      ))}
    </div>
  );
};

export default WhyGrid;
