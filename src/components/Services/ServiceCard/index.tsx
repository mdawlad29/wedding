import { Typography } from "antd";
import Link from "next/link";
import React from "react";
import { BsBuildings } from "react-icons/bs";
import { RiPlantFill } from "react-icons/ri";

const ServiceCard = ({
  title,
  description,
  btnTitle,
  btnLink,
  index,
}: {
  title?: string;
  description?: string;
  btnTitle?: string;
  btnLink?: string;
  index?: number;
}) => {
  const isLastCard = index === 2;

  return (
    <div className="group relative bg-neutral md:p-10 p-4 overflow-hidden shadow-md h-full">
      {/* Background Overlay - Always Active for Last Card */}
      <div
        className={`absolute inset-0 transition-all duration-700 ease-in-out 
          ${
            isLastCard
              ? "bg-primary opacity-100 translate-y-0"
              : "bg-primary opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0"
          }`}
      />

      {index === 0 ? (
        <BsBuildings
          className={`relative z-10 text-[50px] transition-colors duration-700 ${
            isLastCard
              ? "text-neutral"
              : "text-primary group-hover:!text-neutral"
          } mb-5`}
        />
      ) : (
        <RiPlantFill
          className={`relative z-10 text-[50px] transition-colors duration-700 ${
            isLastCard
              ? "text-neutral"
              : "text-primary group-hover:!text-neutral"
          } mb-5`}
        />
      )}
      {/* <Image
        src="/assets/images/services/events-icon.jpg"
        alt="icon"
        width={50}
        height={50}
        className="mb-5 z-10 relative"
      /> */}

      <Typography.Text
        className={`relative z-10 text-[24px] leading-7 font-semibold capitalize transition-colors duration-700 
          ${
            isLastCard
              ? "text-neutral"
              : "text-gray-800 group-hover:text-neutral"
          }`}
      >
        {title}
      </Typography.Text>

      {/* Content */}
      <p
        className={`relative z-10 text-[16px] leading-[24px] duration-700 my-5 
          ${
            isLastCard
              ? "text-neutral"
              : "text-gray-700 group-hover:text-neutral"
          }`}
      >
        {description}
      </p>

      <Link
        href={`${btnLink}`}
        className={`relative z-10 uppercase leading-[12px] font-semibold transition-colors duration-700 
          ${
            isLastCard
              ? "!text-neutral"
              : "!text-primary group-hover:!text-neutral"
          }`}
      >
        {btnTitle} &#10141;
      </Link>
    </div>
  );
};

export default ServiceCard;
