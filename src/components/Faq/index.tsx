"use client";
import React from "react";
import ComponentLayout from "../shared/ComponentLayout";
import { Col, Collapse, Row, Typography } from "antd";
import { Heading } from "../shared/PageHeading";
import "./style.css";
import { FiPhoneCall } from "react-icons/fi";
import { TfiEmail } from "react-icons/tfi";

const { Panel } = Collapse;

const faqData = [
  {
    id: 1,
    title: "What types of events does your catering service cover?",
    desc: "We provide catering for a variety of events, including weddings, corporate gatherings, private parties, and more. Our diverse menu options are customized to enhance every occasion.",
  },
  {
    id: 2,
    title: "How early should I book your catering services?",
    desc: "To guarantee the best service, we recommend booking at least two to three months in advance. However, we strive to accommodate last-minute requests whenever possible.",
  },
  {
    id: 3,
    title: "What services are included in your catering packages?",
    desc: "Our catering packages generally include menu planning, food preparation, on-site service, and clean-up. Additional services such as event planning and equipment rental are available upon request.",
  },
  {
    id: 4,
    title: "Do you offer tastings before we finalize menu selection?",
    desc: "Yes, we offer tastings to help you choose the perfect menu. This allows you to sample our dishes and make any necessary adjustments to ensure you're completely satisfied with your selections for the event.",
  },
];

const Faq = () => {
  const onChange = (key: string | string[]) => {
    console.log(key);
  };

  return (
    <ComponentLayout>
      <div>
        <div className="flex flex-col items-center mb-16">
          <Heading title="FAQ" subTitle="General Questions" />
        </div>

        <Row gutter={[36, 36]} className="!m-0 items-center">
          <Col xs={24} md={14}>
            <Collapse
              expandIconPosition="end"
              defaultActiveKey={["4"]}
              onChange={onChange}
              accordion
              className="collapse-wrapper"
            >
              {faqData.map((item) => (
                <Panel key={item.id} header={item.title}>
                  <p className="text-base leading-[24px] text-gray-700">
                    {item.desc}
                  </p>
                </Panel>
              ))}
            </Collapse>
          </Col>

          <Col xs={24} md={10}>
            <div>
              <Typography.Text
                className={`text-[20px] text-accent leading-[23px] font-semibold capitalize mb-4 block`}
              >
                support
              </Typography.Text>

              <p className="text-base leading-[24px] text-gray-700 mb-12">
                Reach out to us for any inquiries or to discuss your event
                needs. We’re here to assist you every step of the way. Contact
                Bikaner Marwadi Caterers today.
              </p>
            </div>

            {[...Array(2)]?.map((_, index) => (
              <div key={index} className="flex gap-6 mb-8 items-center">
                <div className="flex justify-center items-center">
                  {index === 0 ? (
                    <FiPhoneCall className="text-3xl text-primary" />
                  ) : (
                    <TfiEmail className="text-3xl text-primary" />
                  )}
                </div>

                <div>
                  <Typography.Text
                    className={`text-[18px] text-accent leading-[23px] font-semibold capitalize mb-2 block`}
                  >
                    {index === 0 ? "phone number" : "email information"}
                  </Typography.Text>

                  <p className="text-justify text-base leading-[24px] text-gray-700">
                    {index === 0
                      ? "+8801735329632"
                      : "mahmudmilon9632@gmail.com"}
                  </p>
                </div>
              </div>
            ))}
          </Col>
        </Row>
      </div>
    </ComponentLayout>
  );
};

export default Faq;
