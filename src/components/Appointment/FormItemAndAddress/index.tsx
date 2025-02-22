import { Heading } from "@/components/shared/PageHeading";
import { Button, Col, Form, Input, Row, Typography } from "antd";
import React from "react";
import { FiPhoneCall } from "react-icons/fi";
import { IoIosTime } from "react-icons/io";
import { MdLocationPin } from "react-icons/md";
import { TfiEmail } from "react-icons/tfi";

const inputDesign =
  "py-3 px-2 bg-gray-100 rounded border !border-gray-200 !shadow-none";

const FormItemAndAddress = () => {
  const onFinish = (values: unknown) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: unknown) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full z-40">
      <div className="lg:mx-28 md:mx-7 mx-4 lg:mt-56">
        <Row gutter={[40, 40]} className="!m-0">
          <Col xs={24} md={12} lg={12} className="">
            <Form
              name="basic"
              layout="vertical"
              onFinish={onFinish}
              autoComplete="off"
              onFinishFailed={onFinishFailed}
              className="bg-neutral shadow-xl lg:px-12 px-6 lg:py-16 py-8 z-30"
            >
              <div className="flex items-center md:gap-6 gap-0 md:flex-nowrap flex-wrap">
                <Form.Item
                  label="first name"
                  name="first_name"
                  className="w-full"
                  rules={[
                    {
                      required: true,
                      message: "Please input your first name!",
                    },
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

              <Form.Item className="lg:mt-16 lg:pb-24">
                <Button
                  type="primary"
                  htmlType="submit"
                  className="lg:w-[240px] h-11 !bg-primary !text-neutral uppercase font-semibold"
                >
                  make an appointment
                </Button>
              </Form.Item>
            </Form>
          </Col>

          <Col xs={24} md={12} lg={12}>
            <div>
              <Heading
                title="book now"
                subTitle="make an appointment"
                subTitleClassName="!text-neutral"
              />

              <p className="text-justify text-base leading-[24px] text-neutral lg:my-8 my-5">
                Schedule your event with ease. Contact us, discuss your
                requirements, and secure your date. Bikaner Marwadi Caterers,
                simplifying event planning for you.
              </p>

              <Typography.Text
                className={`text-[20px] text-neutral leading-[23px] font-semibold capitalize lg:mb-6 mb-4 block`}
              >
                get in touch
              </Typography.Text>

              {[...Array(4)]?.map((_, index) => (
                <div
                  key={index}
                  className="flex gap-3 lg:mb-8 mb-4 items-center"
                >
                  <div className="flex justify-center items-center">
                    {index === 0 ? (
                      <MdLocationPin className="text-xl text-primary" />
                    ) : index === 1 ? (
                      <FiPhoneCall className="text-xl text-primary" />
                    ) : index === 2 ? (
                      <TfiEmail className="text-xl text-primary" />
                    ) : (
                      <IoIosTime className="text-xl text-primary" />
                    )}
                  </div>

                  <p className="text-base leading-[24px] text-neutral">
                    {index === 0
                      ? "15, Shopping Center, Janta Colony Adarsh Nagar, Jaipur-302004 (Raj.)"
                      : index === 1
                      ? "0123456789"
                      : index === 2
                      ? "examplae@gmail.com"
                      : "09:00 AM - 18:00 PM"}
                  </p>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default FormItemAndAddress;
