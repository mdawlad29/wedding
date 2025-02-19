"use client";
import { Col, Flex, Row, Typography } from "antd";
import Image from "next/image";
import React from "react";
import { FaCheck } from "react-icons/fa";
import { Great_Vibes } from "next/font/google";

const greatVibes = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
});

const About = () => {
  return (
    <section className="relative md:-mt-20 lg:-mt-[8rem] -mt-10 lg:mx-28 md:mx-7 mx-4 shadow-xl overflow-hidden">
      <div>
        <div className="absolute inset-0 bg-neutral" />

        <Row className="!m-0">
          <Col xs={24} lg={12}>
            <Image
              src={"/assets/images/about/aboutImg.jpg"}
              alt={"about-image"}
              width={300}
              height={300}
              className={"w-full lg:h-[626px] h-[300px] object-cover"}
            />
          </Col>

          <Col xs={24} lg={12}>
            <div className="lg:p-8 p-4">
              <Typography.Text
                className={`block ${greatVibes.className} text-4xl text-primary leading-8 font-normal capitalize !mb-3`}
              >
                about
              </Typography.Text>

              <Typography.Title
                level={3}
                className="md:!text-4xl !text-2xl font-semibold leading-[43px] !text-gray-800 capitalize !m-0"
              >
                Welcome To The Best <br /> Catering Company
              </Typography.Title>

              <p className="text-justify text-base leading-[24px] text-gray-700 md:my-5 my-6">
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

              <Typography.Text className="text-[20px] font-semibold text-accent leading-[24px] mb-5 block">
                20 Years Experiences In This Business
              </Typography.Text>

              {[...Array(3)]?.map((_, index) => (
                <Flex key={index} align="center" gap={8} className="mb-1.5">
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
      </div>
    </section>
  );
};

export default About;
