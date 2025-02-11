"use client";
import { Typography } from "antd";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center mt-20">
      <motion.div
        initial={{ x: "100vw", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
        className="mb-6"
      >
        <Typography.Text className="text-primary italic text-3xl leading-[44px] text-center">
          Welcome To Bikaner Marwadi Caterers
        </Typography.Text>
      </motion.div>

      <motion.div
        initial={{ x: "-100vw", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
        className="flex justify-center items-center flex-col"
      >
        <Typography.Title
          level={1}
          className="!text-neutral !text-5xl text-center leading-[64px] !m-0 !mb-14"
        >
          We Deliver High Quality Food <br /> Catering For Your Event
        </Typography.Title>

        <Link
          href={""}
          className="px-12 py-4 bg-primary text-neutral text-xl capitalize font-semibold hover:bg-neutral hover:-translate-y-2 duration-300 ease-in-out hover:text-primary"
        >
          contact us
        </Link>
      </motion.div>
    </div>
  );
};

export default HeroSection;
