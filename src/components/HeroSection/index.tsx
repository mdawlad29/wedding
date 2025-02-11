"use client";
import { Flex, Typography } from "antd";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

const HeroSection = () => {
  return (
    <section className="absolute inset-0 flex flex-col items-center justify-center mt-24">
      <motion.div
        initial={{ x: "100vw", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
        className="mb-4"
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
          className="!text-neutral !text-5xl text-center leading-[64px] !m-0 !mb-12"
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

      <Flex align="center" justify="center" gap={18} className="mt-16">
        <Link
          href={""}
          target="_blank"
          className="w-8 h-8 flex justify-center items-center rounded-md text-xl bg-neutral !text-primary duration-500 ease-in-out transform hover:scale-110"
        >
          <FaFacebookF />
        </Link>

        <Link
          href={""}
          target="_blank"
          className="w-8 h-8 flex justify-center items-center rounded-md text-xl bg-neutral !text-primary duration-500 ease-in-out transform hover:scale-110"
        >
          <FaInstagram />
        </Link>
      </Flex>
    </section>
  );
};

export default HeroSection;
