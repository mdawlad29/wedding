"use client";
import { Button, Col, Divider, Flex, Input, Row, Typography } from "antd";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

const { Text, Title } = Typography;

const FooterHeading = ({ title }: { title: string }) => {
  return (
    <Title
      level={5}
      className="!text-neutral capitalize !text-[18px] leading-[24px] font-semibold !m-0 !mb-5"
    >
      {title}
    </Title>
  );
};

const Footer = () => {
  return (
    <footer className="relative bg-[#202020] text-white md:p-10 p-2">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-100"
        style={{
          backgroundImage: `url('/assets/images/footer-bg.jpg')`,
        }}
      />
      <div className="absolute inset-0 bg-black bg-opacity-95" />

      <div className="relative z-10">
        <Row gutter={[20, 20]} className="!m-0">
          <Col xs={24} lg={6} md={12}>
            <Image
              src={"/assets/images/logo.png"}
              width={200}
              height={200}
              alt="Logo"
            />
          </Col>

          <Col xs={24} lg={6} md={12}>
            <FooterHeading title="Quick Links" />
            <div>
              {["About", "Services", "Contact"].map((item, index) => (
                <Link
                  key={index}
                  href={`/${item.toLowerCase()}`}
                  className="flex items-center gap-1 text-neutral hover:!text-primary text-lg leading-[24px] capitalize mb-3 w-28"
                >
                  <IoIosArrowForward className="!text-primary" />
                  {item}
                </Link>
              ))}
            </div>
          </Col>

          <Col xs={24} lg={6} md={12}>
            <FooterHeading title="Useful Links" />
            <div>
              {[
                { name: "Privacy Policy", link: "/privacy-policy" },
                { name: "Terms & Conditions", link: "/terms-conditions" },
              ].map((item, index) => (
                <Link
                  key={index}
                  href={item.link}
                  className="flex items-center gap-1 text-neutral hover:!text-primary text-lg leading-[24px] capitalize mb-3 w-52"
                >
                  <IoIosArrowForward className="!text-primary" />
                  {item.name}
                </Link>
              ))}
            </div>
          </Col>

          <Col xs={24} lg={6} md={12}>
            <FooterHeading title="Newsletter" />
            <div className="flex items-center bg-neutral h-12">
              <Input
                type="text"
                placeholder="Your email address"
                className="w-full pl-3 pr-1 h-full !border-none border-neutral rounded-none focus:outline-none !shadow-none"
              />
              <Button
                htmlType="submit"
                className="!bg-primary h-full !text-neutral !shadow-none px-5 !rounded-none uppercase text-base leading-[24px] !border-none"
              >
                send
              </Button>
            </div>
          </Col>
        </Row>

        <Row gutter={[20, 20]} className="!m-0 !my-5">
          <Col xs={24} lg={5} md={12}>
            <Text className="text-[18px] leading-[14px] text-neutral capitalize">
              Get in Touch
            </Text>
          </Col>

          <Col xs={24} lg={7} md={12}>
            <Flex align="center" gap={8}>
              <MdEmail className="text-lg text-primary" />
              <Text className="text-base text-neutral leading-[24px]">
                bikanermarwadicaters@gmail.com
              </Text>
            </Flex>
          </Col>

          <Col xs={24} lg={12} md={12}>
            <Flex align="center" gap={8}>
              <IoLocationSharp className="inline-block lg:w-5 w-8 lg:h-5 h-8 text-primary" />
              <Text className="text-base text-neutral leading-[24px]">
                15, Shopping Center, Janta Colony Adarsh Nagar, Jaipur-302004
                (Raj.)
              </Text>
            </Flex>
          </Col>
        </Row>

        <Divider className="bg-neutral !m-0 !mt-12 !mb-5" />

        <Text className="flex justify-end text-sm text-[#eee]">
          Copyright ©️ 2023 Bikaner Marwadi Caterers. All rights reserved.
        </Text>
      </div>
    </footer>
  );
};

export default Footer;
