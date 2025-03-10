"use client";
import React, { useRef } from "react";
import { Flex, Typography } from "antd";
import Link from "next/link";
import ServiceCard from "./ServiceCard";
import { motion, useInView } from "framer-motion";
import ComponentLayout from "../shared/ComponentLayout";
import { Heading } from "../shared/PageHeading";

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <div className="bg-gray-100">
      <ComponentLayout className="md:py-20 py-16 !mb-0">
        <Heading title="our services" />

        <Flex align="center" gap={40} wrap="wrap" className="md:mb-16 mb-10">
          <div>
            <Typography.Title
              level={3}
              className="md:!text-4xl !text-2xl font-semibold leading-[43px] !text-gray-800 capitalize !m-0"
            >
              Premium Catering Services <br /> For Your Taste Only
            </Typography.Title>
          </div>

          <Link href={"/services"}>
            <p className="!text-neutral group:hover:!text-primary text-xl capitalize font-semibold text-center w-48 py-4 hover:bg-accent hover:-translate-y-2 duration-300 ease-in-out group bg-primary">
              all services
            </p>
          </Link>
        </Flex>

        <motion.div
          ref={ref}
          initial={{ x: "10vw", opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : { x: "10vw", opacity: 0 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        >
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
            {[...Array(3)].map((_, index) => (
              <ServiceCard
                key={index}
                index={index}
                btnLink="/contact"
                btnTitle="book now"
                isActiveCard={index === 2}
                title={
                  index === 0
                    ? "Corporate Events"
                    : index === 1
                    ? "Wedding Events"
                    : "Social Events"
                }
                description={
                  index === 0
                    ? "Elevate your corporate experience with our tailored menus, exceptional service, and the rich flavors of Rajasthan. Make your event unforgettable with Raju Catering Services."
                    : index === 1
                    ? "Creating unforgettable wedding moments with delectable menus and flawless service. Make your special day extraordinary with Raju Catering Services."
                    : "Enhance your social gatherings with our exquisite menus and exceptional service. Make every occasion a cherished celebration with Raju Catering Services."
                }
              />
            ))}
          </div>
        </motion.div>
      </ComponentLayout>
    </div>
  );
};

export default Services;
