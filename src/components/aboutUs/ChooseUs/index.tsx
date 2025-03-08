"use client";
import React from "react";
import ComponentLayout from "@/components/shared/ComponentLayout";
import Curve from "@/components/shared/Curve";
import { Heading } from "@/components/shared/PageHeading";
import { Col, Row } from "antd";
import Image from "next/image";
import ProgressBar from "@/components/shared/Progressbar";
import Paragraph from "@/components/shared/Paragraph";

const ChooseUs = () => {
  const skillsData = [
    { name: "Architecture Planning", target: 89 },
    { name: "Project Management", target: 86 },
    { name: "Consultation Design", target: 82 },
  ];

  return (
    <div className="bg-gray-100 relative">
      <ComponentLayout className="md:py-32 py-16 md:!mr-0">
        <Row gutter={[48, 48]} className="!m-0">
          <Col xs={24} md={24} lg={9}>
            <Heading
              title="why choose us"
              subTitle="20 Years of Experience in Catering Company"
            />

            <Paragraph
              title="Two decades of culinary expertise, passion, and creativity. Your
              events, our legacy. Bikaner Marwadi Caterers, redefining catering
              for 20 years."
            />

            <ProgressBar skills={skillsData} />
          </Col>

          <Col xs={24} md={24} lg={15}>
            <Image
              src={"/assets/images/about/about-hero.jpg"}
              width={600}
              height={600}
              alt="About Us"
              className="w-full"
            />
          </Col>
        </Row>
      </ComponentLayout>

      <Curve />
    </div>
  );
};

export default ChooseUs;
