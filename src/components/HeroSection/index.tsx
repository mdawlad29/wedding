"use client";
import { Flex, Typography } from "antd";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { Great_Vibes } from "next/font/google";
import Curve from "../shared/Curve";
import { usePathname } from "next/navigation";
import { PageHeadingContent } from "../shared/PageHeading";

const greatVibes = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
});

const HeroSection = () => {
  const pathname = usePathname();

  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center md:mt-24 mt-12">
      {pathname === "/gallery" ? (
        <PageHeadingContent title="gallery" />
      ) : pathname === "/contact" ? (
        <PageHeadingContent title="contact us" />
      ) : pathname === "/services" ? (
        <PageHeadingContent title="services" />
      ) : pathname === "/about" ? (
        <PageHeadingContent title="about us" />
      ) : (
        <>
          <motion.div
            initial={{ x: "100vw", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
            className="md:mb-4 mb-2"
          >
            <Typography.Text
              className={`${greatVibes.className} text-primary italic md:text-5xl text-xl leading-[44px] text-center`}
            >
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
              className="!text-neutral md:!text-5xl !text-2xl text-center leading-[64px] !m-0 md:!mb-12 !mb-6"
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

          <Flex
            align="center"
            justify="center"
            gap={18}
            className="lg:mt-16 mt-10"
          >
            <Link
              href={""}
              target="_blank"
              className="w-9 h-9 flex justify-center items-center rounded-full text-xl bg-neutral !text-primary duration-500 ease-in-out transform hover:scale-110"
            >
              <FaFacebookF />
            </Link>

            <Link
              href={""}
              target="_blank"
              className="w-9 h-9 flex justify-center items-center rounded-full text-xl bg-neutral !text-primary duration-500 ease-in-out transform hover:scale-110"
            >
              <FaInstagram />
            </Link>
          </Flex>
        </>
      )}

      <Curve />
    </div>
  );
};

export default HeroSection;
