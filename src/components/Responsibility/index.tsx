"use client";

import React from "react";
import { Col, Flex, Row, Typography } from "antd";
import Image from "next/image";
import Link from "next/link";
import { FaQuoteLeft } from "react-icons/fa";
import Experience from "./Experience";
import ComponentLayout from "../shared/ComponentLayout";
import ProgressBar from "../shared/Progressbar";
import Paragraph from "../shared/Paragraph";

const Responsibility = () => {
  const skillsData = [
    { name: "quality food", target: 92 },
    { name: "various menus", target: 90 },
  ];

  return (
    <ComponentLayout>
      <Row gutter={[40, 40]} className="!m-0">
        <Col xs={24} md={24} lg={12}>
          <Flex gap={30}>
            <div className="w-14 h-14 rounded-full flex items-center justify-center bg-primary text-neutral">
              <FaQuoteLeft size={28} />
            </div>

            <Typography.Title
              level={3}
              className="md:!text-[22px] !text-[16px] leading-[33px] font-semibold !text-accent !mt-4"
            >
              The Food You Eat Should Be Perfect,
              <br /> And This Is Our Responsibility
            </Typography.Title>
          </Flex>

          <Paragraph
            title="We invite you to experience the magic of Bikaner Marwadi Caterers.
            Whether it’s a grand celebration, an intimate gathering, or a
            corporate event, let us be your culinary artisans, your event
            architects, and your trusted partner in creating memories."
          />

          <ProgressBar skills={skillsData} />

          <Link href={"/about"}>
            <p className="!text-neutral hover:!text-primary text-xl capitalize font-semibold text-center w-48 py-4 hover:bg-accent hover:-translate-y-2 duration-300 ease-in-out bg-primary">
              About Us
            </p>
          </Link>
        </Col>

        <Col xs={24} md={24} lg={12}>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-5 relative">
            <Experience />

            <Image
              src={"/assets/images/gallery/image-37.jpg"}
              alt={"about-image"}
              width={300}
              height={300}
              className="lg:h-full h-[416px] w-full"
            />

            <div className="space-y-4">
              <Image
                src={"/assets/images/gallery/image-33.jpg"}
                alt={"about-image"}
                width={200}
                height={200}
                className="lg:w-[300px] w-full h-[200px] object-cover"
              />
              <Image
                src={"/assets/images/gallery/image-43.jpg"}
                alt={"about-image"}
                width={200}
                height={200}
                className="lg:w-[300px] w-full h-[200px] object-cover"
              />
            </div>
          </div>
        </Col>
      </Row>
    </ComponentLayout>
  );
};

export default Responsibility;
