"use client";
import { Typography } from "antd";
import { usePathname } from "next/navigation";
import React, { useRef } from "react";
import { Great_Vibes } from "next/font/google";
import { motion, useInView } from "framer-motion";

const greatVibes = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
});

export const PageHeadingImg = ({ img }: { img: string }) => {
  const pathname = usePathname();

  return (
    <div
      className="absolute inset-0 opacity-100"
      style={{
        backgroundImage: `url(${img})`,
        backgroundPositionY: pathname === "/contact" ? "75%" : "90%",
        backgroundPositionX: "50%",
        objectFit: "cover",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100%",
      }}
    />
  );
};

export const PageHeadingContent = ({ title }: { title: string }) => {
  return (
    <Typography.Title
      level={1}
      className={`!text-neutral !m-0 !mt-10 !text-5xl leading-[44px] text-center capitalize font-semibold`}
    >
      {title}
    </Typography.Title>
  );
};

export const Heading = ({
  title,
  subTitle,
  titleClassName,
  subTitleClassName,
}: {
  title?: string;
  subTitle?: string;
  titleClassName?: string;
  subTitleClassName?: string;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <>
      <motion.h6
        ref={ref}
        initial={{ y: "2vw", opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : { y: "2vw", opacity: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className={`block ${greatVibes.className} ${titleClassName} text-4xl text-primary leading-8 font-normal capitalize !mb-4`}
      >
        {title}
      </motion.h6>

      {subTitle && (
        <Typography.Title
          level={3}
          className={`${subTitleClassName} md:!text-4xl !text-2xl font-semibold leading-[43px] !text-gray-800 capitalize !m-0`}
        >
          {subTitle}
        </Typography.Title>
      )}
    </>
  );
};
