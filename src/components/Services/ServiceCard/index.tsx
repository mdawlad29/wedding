import { Typography } from "antd";
import Link from "next/link";
import React from "react";
import { BsBuildings } from "react-icons/bs";
import { FaUsers } from "react-icons/fa";
import { GiBigDiamondRing } from "react-icons/gi";
import { LiaBirthdayCakeSolid, LiaGlassCheersSolid } from "react-icons/lia";
import { RiPlantFill } from "react-icons/ri";

interface IServiceProps {
  title?: string;
  index?: number;
  btnLink?: string;
  btnTitle?: string;
  description?: string;
  isActiveCard?: boolean;
}

const ServiceCard = ({
  index,
  title,
  btnLink,
  btnTitle,
  description,
  isActiveCard,
}: IServiceProps) => {
  return (
    <div className="group relative bg-neutral md:p-10 p-4 overflow-hidden shadow-md h-full">
      {/* Background Overlay - Always Active for Last Card */}
      <div
        className={`absolute inset-0 transition-all duration-700 ease-in-out 
          ${
            isActiveCard
              ? "bg-primary opacity-100 translate-y-0"
              : "bg-primary opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0"
          }`}
      />

      {index === 0 ? (
        <BsBuildings
          className={`relative z-10 text-[50px] transition-colors duration-700 ${
            isActiveCard
              ? "text-neutral"
              : "text-primary group-hover:!text-neutral"
          } mb-5`}
        />
      ) : index === 1 ? (
        <GiBigDiamondRing
          className={`relative z-10 text-[50px] transition-colors duration-700 ${
            isActiveCard
              ? "text-neutral"
              : "text-primary group-hover:!text-neutral"
          } mb-5`}
        />
      ) : index === 2 ? (
        <RiPlantFill
          className={`relative z-10 text-[50px] transition-colors duration-700 ${
            isActiveCard
              ? "text-neutral"
              : "text-primary group-hover:!text-neutral"
          } mb-5`}
        />
      ) : index === 3 ? (
        <LiaGlassCheersSolid
          className={`relative z-10 text-[50px] transition-colors duration-700 ${
            isActiveCard
              ? "text-neutral"
              : "text-primary group-hover:!text-neutral"
          } mb-5`}
        />
      ) : index === 4 ? (
        <LiaBirthdayCakeSolid
          className={`relative z-10 text-[50px] transition-colors duration-700 ${
            isActiveCard
              ? "text-neutral"
              : "text-primary group-hover:!text-neutral"
          } mb-5`}
        />
      ) : (
        <FaUsers
          className={`relative z-10 text-[50px] transition-colors duration-700 ${
            isActiveCard
              ? "text-neutral"
              : "text-primary group-hover:!text-neutral"
          } mb-5`}
        />
      )}

      <Typography.Text
        className={`relative z-10 text-[24px] leading-7 font-semibold capitalize transition-colors duration-700 
          ${
            isActiveCard
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
            isActiveCard
              ? "text-neutral"
              : "text-gray-700 group-hover:text-neutral"
          }`}
      >
        {description}
      </p>

      <Link
        href={`${btnLink}`}
        className={`relative z-10 uppercase leading-[12px] text-[13px] transition-colors duration-700 
          ${
            isActiveCard
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
