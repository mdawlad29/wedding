"use client";
import React, { useRef } from "react";
import { Flex, Typography } from "antd";
import Link from "next/link";
import ServiceCard from "./ServiceCard";
import { motion, useInView } from "framer-motion";
import { Great_Vibes } from "next/font/google";
import ComponentLayout from "../shared/ComponentLayout";

const greatVibes = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
});

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <div className="bg-gray-100">
      <ComponentLayout className="md:py-20 py-16 !mb-0">
        <Typography.Text
          className={`${greatVibes.className} block italic text-4xl text-primary leading-8 font-normal capitalize !mb-3`}
        >
          our services
        </Typography.Text>

        <Flex align="center" gap={40} wrap="wrap" className="md:mb-16 mb-10">
          <div>
            <Typography.Title
              level={3}
              className="md:!text-4xl !text-2xl font-semibold leading-[43px] !text-gray-800 capitalize !m-0"
            >
              Premium Catering Services <br /> For Your Taste Only
            </Typography.Title>
          </div>

          <div className="text-center w-48 py-4 hover:bg-accent hover:-translate-y-2 duration-300 ease-in-out group bg-primary">
            <Link
              href={"/services"}
              className="!text-neutral group:hover:!text-primary text-xl capitalize font-semibold"
            >
              all services
            </Link>
          </div>
        </Flex>

        <motion.div
          ref={ref}
          initial={{ x: "5vw", opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : { x: "5vw", opacity: 0 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        >
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
            {[...Array(3)].map((_, index) => (
              <ServiceCard
                key={index}
                index={index}
                title={
                  index === 0
                    ? "Corporate Events"
                    : index === 1
                    ? "Wedding Events"
                    : "Social Events"
                }
                description={
                  index === 0
                    ? "Elevate your corporate experience with our tailored menus, exceptional service, and the rich flavors of Rajasthan. Make your event unforgettable with Bikaner Marwadi Caterers."
                    : index === 1
                    ? "Crafting unforgettable wedding experiences with exquisite menus and impeccable service. Elevate your special day with Bikaner Marwadi Caterers."
                    : "Elevate your social gatherings with our delightful menus and flawless service. Turn every moment into a memorable celebration with Bikaner Marwadi Caterers."
                }
                btnLink="/contact"
                btnTitle="book now"
              />
            ))}
          </div>
        </motion.div>
      </ComponentLayout>
    </div>
  );
};

export default Services;
