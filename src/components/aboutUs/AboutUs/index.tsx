"use client";
import ComponentLayout from "@/components/shared/ComponentLayout";
import { Col, Row, Typography } from "antd";
import Image from "next/image";
import React from "react";
import { Heading } from "@/components/shared/PageHeading";
import ProgressBar from "@/components/shared/Progressbar";

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

            <p className="text-justify text-base leading-[24px] text-gray-700 md:my-5 my-6">
              Bikaner Marwadi Caterers is a renowned catering service company
              located in the vibrant city of Jaipur, India. Specializing in
              authentic Marwadi cuisine, this company offers a wide range of
              culinary services to meet the diverse needs of its clients. With a
              focus on traditional flavors and innovative presentation, Bikaner
              Marwadi Caterers is well-known for its delectable Rajasthani
              dishes, including dal baati churma, gatte ki sabzi, and an array
              of sweets like ghewar and malpua. Whether it’s a wedding,
              corporate event, or a special celebration, this catering service
              company prides itself on delivering top-quality food and
              impeccable service to make every occasion a memorable and
              delightful experience for their customers in the heart of Jaipur.
            </p>

            <Typography.Text className="text-[20px] font-semibold text-accent leading-[24px] mb-5 block">
              20 Years Experiences In This Business
            </Typography.Text>

            <ProgressBar skills={skillsData} />

            <p className="text-justify text-base leading-[24px] text-gray-700 md:my-5 my-6">
              Contact us today to start a culinary journey that will enchant
              your senses and leave a lasting impression on your guests. Welcome
              to the best catering company in Rajasthan, where every event
              becomes a masterpiece of flavor, style, and tradition.
            </p>
          </div>
        </Col>
      </Row>
    </ComponentLayout>
  );
};

export default AboutUs;
