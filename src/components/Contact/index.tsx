"use client";
import React from "react";
import ComponentLayout from "../shared/ComponentLayout";
import { Button, Col, Flex, Form, Input, Row, Typography } from "antd";
import { Great_Vibes } from "next/font/google";
import { BsBuildings } from "react-icons/bs";
import { TfiEmail } from "react-icons/tfi";
import { FiPhoneCall } from "react-icons/fi";
import Link from "next/link";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

const greatVibes = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
});

const inputDesign =
  "py-3 px-2 bg-gray-100 rounded border !border-gray-200 !shadow-none";

const Contact = () => {
  const onFinish = (values: unknown) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: unknown) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <ComponentLayout>
      <Row gutter={[52, 52]} className="!mb-28 !m-0">
        <Col xs={24} md={24} lg={12}>
          <Form
            name="basic"
            layout="vertical"
            onFinish={onFinish}
            autoComplete="off"
            onFinishFailed={onFinishFailed}
            className="bg-neutral shadow-xl md:px-12 px-6 md:py-16 py-8"
          >
            <div className="flex items-center md:gap-6 gap-0 md:flex-nowrap flex-wrap">
              <Form.Item
                label="first name"
                name="first_name"
                className="w-full"
                rules={[
                  { required: true, message: "Please input your first name!" },
                ]}
              >
                <Input className={`${inputDesign}`} />
              </Form.Item>

              <Form.Item
                label="last name"
                name="last_name"
                className="w-full"
                rules={[
                  { required: true, message: "Please input your last name!" },
                ]}
              >
                <Input className={`${inputDesign}`} />
              </Form.Item>
            </div>

            <div className="flex items-center md:gap-6 gap-0 md:flex-nowrap flex-wrap">
              <Form.Item
                label="email address"
                name="email"
                className="w-full"
                rules={[
                  {
                    required: true,
                    message: "Please input your email address!",
                  },
                ]}
              >
                <Input className={`${inputDesign}`} />
              </Form.Item>

              <Form.Item
                label="subject"
                name="subject"
                className="w-full"
                rules={[
                  { required: true, message: "Please input your subject!" },
                ]}
              >
                <Input className={`${inputDesign}`} />
              </Form.Item>
            </div>

            <Form.Item
              label="comments/questions"
              name="comments_questions"
              className="w-full"
              rules={[
                {
                  required: true,
                  message: "Please input your comments questions!",
                },
              ]}
            >
              <Input.TextArea rows={5} className={`${inputDesign}`} />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="w-[160px] h-11 !bg-primary !text-neutral uppercase font-semibold"
              >
                send message
              </Button>
            </Form.Item>
          </Form>
        </Col>

        <Col xs={24} md={24} lg={12}>
          <Typography.Text
            className={`block ${greatVibes.className} text-4xl text-primary leading-8 font-normal capitalize !mb-4`}
          >
            contact us
          </Typography.Text>

          <Typography.Title
            level={3}
            className="md:!text-4xl !text-2xl font-semibold leading-[43px] !text-gray-800 capitalize !m-0"
          >
            get in touch with us
          </Typography.Title>

          <p className="text-justify text-base leading-[24px] text-gray-700 my-8">
            Reach out to us for any inquiries or to discuss your event needs.
            We’re here to assist you every step of the way. Contact Bikaner
            Marwadi Caterers today.
          </p>

          {[...Array(3)]?.map((_, index) => (
            <div key={index} className="flex gap-6 mb-8 items-center">
              <div className="bg-primary w-20 h-20 flex justify-center items-center">
                {index === 0 ? (
                  <BsBuildings className="text-5xl text-neutral" />
                ) : index === 1 ? (
                  <FiPhoneCall className="text-5xl text-neutral" />
                ) : (
                  <TfiEmail className="text-5xl text-neutral" />
                )}
              </div>

              <div>
                <Typography.Text
                  className={`text-[18px] text-accent leading-[23px] font-semibold capitalize mb-2 block`}
                >
                  {index === 0
                    ? "location"
                    : index === 1
                    ? "phone number"
                    : "email information"}
                </Typography.Text>

                <p className="text-justify text-base leading-[24px] text-gray-700 md:w-full w-[200px]">
                  {index === 0
                    ? `15, Shopping Center, Janta Colony Adarsh Nagar, Jaipur-302004
                  (Raj.)`
                    : index === 1
                    ? "123456789"
                    : "examplae@gmail.com"}
                </p>
              </div>
            </div>
          ))}

          <Typography.Text
            className={`text-[20px] text-accent leading-[23px] font-semibold capitalize mb-2 block`}
          >
            our social media
          </Typography.Text>
        </Col>
      </Row>

      <Flex align="center" gap={18} className="mb-4">
        <Link
          href={
            "https://www.facebook.com/profile.php?id=61572432884301&sk=photos"
          }
          target="_blank"
          className="w-9 h-9 flex justify-center items-center rounded-full text-xl bg-primary !text-neutral hover:bg-accent duration-700 ease-in-out transform hover:scale-110"
        >
          <FaFacebookF />
        </Link>

        <Link
          href={"https://www.instagram.com/jtdddut/"}
          target="_blank"
          className="w-9 h-9 flex justify-center items-center rounded-full text-xl bg-primary !text-neutral hover:bg-accent duration-700 ease-in-out transform hover:scale-110"
        >
          <FaInstagram />
        </Link>
      </Flex>

      <div className="relative w-full h-[80vh]">
        <iframe
          className="absolute inset-0 w-full h-full"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.825528098161!2d90.3813028!3d23.8705872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c40f82bd8f7b%3A0x8c888da8fc05ec94!2sSector%2012%2C%20Dhaka%201230!5e0!3m2!1sen!2sbd!4v1700000000000"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </ComponentLayout>
  );
};

export default Contact;
