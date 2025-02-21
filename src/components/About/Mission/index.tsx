import ComponentLayout from "@/components/shared/ComponentLayout";
import { Typography } from "antd";
import React from "react";
import { BsEye } from "react-icons/bs";
import { TfiTarget } from "react-icons/tfi";

const missionVisionData = [
  {
    icon: <TfiTarget size={40} />,
    title: "Our Mission",
    description:
      "Dedicated to crafting culinary artistry, we aim to exceed expectations, deliver outstanding service, and make every event unforgettable.",
  },
  {
    icon: <BsEye size={40} />,
    title: "Our Vision",
    description:
      "To be the premier provider of exceptional catering experiences, sharing the rich flavors of Rajasthan and creating cherished memories.",
  },
];

const MissionVision = () => {
  return (
    <ComponentLayout>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
        {missionVisionData.map((item, index) => (
          <div
            key={index}
            className="group relative bg-white p-8 shadow-lg overflow-hidden transition-transform duration-500"
          >
            {/* Hover Effect Background */}
            <div className="absolute inset-0 bg-primary opacity-0 translate-y-full transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:translate-y-0" />

            {/* Icon */}
            <div className="relative z-10 mb-3 text-primary group-hover:text-neutral duration-500 transition-colors">
              {item.icon}
            </div>

            {/* Title */}
            <Typography.Text className="relative z-10 text-[22px] font-bold text-gray-800 transition-colors duration-500 group-hover:text-white">
              {item.title}
            </Typography.Text>

            {/* Description */}
            <p className="relative z-10 text-[16px] text-gray-700 mt-2 transition-colors duration-500 group-hover:text-white">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </ComponentLayout>
  );
};

export default MissionVision;
