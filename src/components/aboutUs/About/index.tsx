"use client";
import { Col, Flex, Row, Typography } from "antd";
import Image from "next/image";
import React from "react";
import { FaCheck } from "react-icons/fa";
import { Heading } from "@/components/shared/PageHeading";
import Paragraph from "@/components/shared/Paragraph";

const About = () => {
  return (
    <section className="relative md:-mt-20 lg:-mt-[8rem] -mt-10 lg:mx-28 md:mx-7 mx-4 z-20 shadow-xl overflow-hidden">
      <div>
        <div className="absolute inset-0 bg-neutral" />

        <Row className="!m-0">
          <Col xs={24} lg={12}>
            <Image
              src={"/assets/images/about/about-us.png"}
              alt={"about-image"}
              width={300}
              height={300}
              className={"w-full lg:h-[650px] h-[300px] object-cover"}
            />
          </Col>

          <Col xs={24} lg={12}>
            <div className="lg:p-8 p-4">
              <Heading
                title="about"
                subTitle="Welcome To The Best Catering Company"
                subTitleClassName="md:w-[400px]"
              />

              <Paragraph title="Raju Catering Services is a company located behind Kunhadi Police Station, Kota, Rajasthan 324008. Specializing in authentic vegetarian cuisine, we offer a wide range of culinary services to cater to the diverse needs of our clients. With a focus on traditional flavors and innovative presentation, Raju Catering Services is renowned for its delicious Rajasthani dishes, including dal baati churma, gatte ki sabzi, and a variety of sweets like ghewar and malpua.  " />

              <Paragraph title="Whether it's a wedding, corporate event, or special celebration, we take pride in delivering top-quality food and impeccable service, ensuring that every occasion is a memorable and delightful experience for our customers in the heart of Rajasthan." />

              <Typography.Text className="text-[20px] font-semibold text-accent leading-[24px] mb-5 block">
                10 Years of Experience in the Catering Business
              </Typography.Text>

              {[...Array(3)]?.map((_, index) => (
                <Flex key={index} align="center" gap={8} className="mb-1.5">
                  <FaCheck className="text-primary font-extrabold text-base" />

                  <Typography.Text className="text-base leading-[24px] text-gray-700 capitalize">
                    {index === 0
                      ? "100% Quality Guarantee for Our Products  "
                      : index === 1
                      ? "Customized Food Menu Catering"
                      : "We Have A Passion For Food & Never Compromise Quality"}
                  </Typography.Text>
                </Flex>
              ))}
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default About;
