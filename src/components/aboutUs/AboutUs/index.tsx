"use client";
import ComponentLayout from "@/components/shared/ComponentLayout";
import { Col, Row, Typography } from "antd";
import Image from "next/image";
import React from "react";
import { Heading } from "@/components/shared/PageHeading";
import ProgressBar from "@/components/shared/Progressbar";
import Paragraph from "@/components/shared/Paragraph";

const AboutUs = () => {
  const skillsData = [
    { name: "quality food", target: 92 },
    { name: "various menus", target: 90 },
  ];

  return (
    <ComponentLayout>
      <Row gutter={[32, 32]} className="!m-0">
        <Col xs={24} lg={12}>
          <Image
            src={"/assets/images/about/about-us.png"}
            alt={"about-image"}
            width={300}
            height={300}
            className={"w-full lg:h-full h-[300px] object-cover"}
          />
        </Col>

        <Col xs={24} lg={12}>
          <div className="lg:px-8">
            <Heading
              title="about us"
              subTitle="Welcome To The Best Catering Company"
            />

            <Paragraph title="Raju Catering Services is a company located behind Kunhadi Police Station, Kota, Rajasthan 324008. Specializing in authentic vegetarian cuisine, we offer a wide range of culinary services to cater to the diverse needs of our clients. With a focus on traditional flavors and innovative presentation, Raju Catering Services is renowned for its delicious Rajasthani dishes, including dal baati churma, gatte ki sabzi, and a variety of sweets like ghewar and malpua.  " />

            <Typography.Text className="text-[20px] font-semibold text-accent leading-[24px] mb-5 block">
              10 Years of Experience in the Catering Business
            </Typography.Text>

            <ProgressBar skills={skillsData} />

            <Paragraph title="Whether it's a wedding, corporate event, or special celebration, we take pride in delivering top-quality food and impeccable service, ensuring that every occasion is a memorable and delightful experience for our customers in the heart of Rajasthan." />
          </div>
        </Col>
      </Row>
    </ComponentLayout>
  );
};

export default AboutUs;
