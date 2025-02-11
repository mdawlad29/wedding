"use client";
import { Col, Flex, Row, Typography } from "antd";
import Image from "next/image";
import React from "react";
import SectionHeading from "../shared/SectionHeading";
import { FaCheck } from "react-icons/fa";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="relative md:-mt-14 lg:-mt-24 -mt-10 lg:mx-28 md:mx-7 mx-1 shadow-xl">
      <motion.div
        initial={{ y: "50vw", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
      >
        <div className="absolute inset-0 bg-neutral" />

        <Row className="!m-0">
          <Col xs={24} md={12}>
            <Image
              src={"/assets/images/about/aboutImg.jpg"}
              alt={"about-image"}
              width={300}
              height={300}
              className={"w-full h-full"}
            />
          </Col>

          <Col xs={24} md={12}>
            <div className="lg:p-12 p-4">
              <SectionHeading
                title="about"
                subTitle="Welcome To The Best Catering Company"
              />

              <p className="text-justify text-base leading-[24px] text-gray-700 md:my-10 my-6">
                Bikaner Marwadi Caterers is a renowned catering service company
                located in the vibrant city of Jaipur, India. Specializing in
                authentic Marwadi cuisine, this company offers a wide range of
                culinary services to meet the diverse needs of its clients. With
                a focus on traditional flavors and innovative presentation,
                Bikaner Marwadi Caterers is well-known for its delectable
                Rajasthani dishes, including dal baati churma, gatte ki sabzi,
                and an array of sweets like ghewar and malpua. Whether it’s a
                wedding, corporate event, or a special celebration, this
                catering service company prides itself on delivering top-quality
                food and impeccable service to make every occasion a memorable
                and delightful experience for their customers in the heart of
                Jaipur.
              </p>

              <Typography.Text className="text-[20px] font-semibold text-accent leading-[24px] mb-8 block">
                20 Years Experiences In This Business
              </Typography.Text>

              {[...Array(3)]?.map((_, index) => (
                <Flex key={index} align="center" gap={8} className="mb-2">
                  <FaCheck className="text-primary font-extrabold text-base" />

                  <Typography.Text className="text-base leading-[24px] text-gray-700 capitalize">
                    {index === 0
                      ? "20 Years Experiences In This Business"
                      : index === 1
                      ? "Custom Food Menu Catering"
                      : "We Have A Passion For Food & Never Compromise Quality"}
                  </Typography.Text>
                </Flex>
              ))}
            </div>
          </Col>
        </Row>
      </motion.div>
    </section>
  );
};

export default About;
