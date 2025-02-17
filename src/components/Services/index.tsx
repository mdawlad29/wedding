"use client";
import React, { useRef } from "react";
import { Col, Flex, Row, Typography } from "antd";
import Link from "next/link";
import ServiceCard from "./ServiceCard";
import { motion, useInView } from "framer-motion";

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <section className="bg-gray-100">
      <div className="lg:mx-28 md:mx-7 mx-4 md:mt-14 lg:mt-24 mt-10 md:py-20 py-16">
        <Typography.Text className="block italic text-3xl text-primary leading-8 font-normal capitalize !mb-3">
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
          initial={{ x: "10vw", opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : { x: "10vw", opacity: 0 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        >
          <Row gutter={[36, 36]} className="!m-0">
            {[...Array(3)].map((_, index) => (
              <Col key={index} xs={24} md={12} lg={8}>
                <ServiceCard
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
              </Col>
            ))}
          </Row>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
