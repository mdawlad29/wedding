"use client";

import { Col, Flex, Row, Typography } from "antd";
import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaQuoteLeft } from "react-icons/fa";
import Experience from "./Experience";

const Responsibility = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const [progress1, setProgress1] = useState(0);
  const [progress2, setProgress2] = useState(0);

  useEffect(() => {
    if (isInView) {
      setProgress1(0);
      setProgress2(0);

      let count1 = 0;
      let count2 = 0;
      const interval1 = setInterval(() => {
        if (count1 >= 90) {
          clearInterval(interval1);
        } else {
          count1++;
          setProgress1(count1);
        }
      }, 10);

      const interval2 = setInterval(() => {
        if (count2 >= 75) {
          clearInterval(interval2);
        } else {
          count2++;
          setProgress2(count2);
        }
      }, 10);
    }
  }, [isInView]);

  return (
    <section className="relative md:mt-14 lg:mt-24 mt-10 lg:mx-28 md:mx-7 mx-1">
      <Row gutter={[40, 40]}>
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

          <p className="text-justify text-base leading-[24px] text-gray-700 md:my-5 my-2">
            We invite you to experience the magic of Bikaner Marwadi Caterers.
            Whether it’s a grand celebration, an intimate gathering, or a
            corporate event, let us be your culinary artisans, your event
            architects, and your trusted partner in creating memories.
          </p>

          <div ref={ref} className="mb-8">
            {[...Array(2)]?.map((item, index) => (
              <div key={index} className="mb-3">
                <Flex align="center" justify="space-between" className="mb-2">
                  <Typography.Text className="text-[16px] font-medium !text-accent capitalize">
                    {index === 0 ? "Quality Food" : "various menus"}
                  </Typography.Text>

                  <motion.div
                    className="text-[16px] text-[#585858]"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 1, delay: 0.3 }}
                  >
                    {index === 0 ? progress1 : progress2}%
                  </motion.div>
                </Flex>

                <div className="relative w-full h-3 bg-gray-200 overflow-hidden">
                  <motion.div
                    className="h-full bg-primary"
                    style={{
                      width: `${index === 0 ? progress1 : progress2}%`,
                    }}
                    initial={{ width: "0%" }}
                    animate={
                      isInView
                        ? { width: index === 0 ? "90%" : "75%" }
                        : { width: "0%" }
                    }
                    transition={{ duration: 1, ease: "easeOut" }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="text-center w-48 py-4 hover:bg-accent hover:-translate-y-2 duration-300 ease-in-out group bg-primary">
            <Link
              href={""}
              className="!text-neutral group:hover:!text-primary text-xl capitalize font-semibold"
            >
              About Us
            </Link>
          </div>
        </Col>

        <Col xs={24} md={24} lg={12}>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-5 relative">
            <Experience />

            <Image
              src={"/assets/images/about/aboutImg.jpg"}
              alt={"about-image"}
              width={300}
              height={300}
              className="lg:h-full h-[416px] w-full"
            />

            <div className="space-y-4">
              <Image
                src={"/assets/images/about/aboutImg.jpg"}
                alt={"about-image"}
                width={200}
                height={200}
                className="lg:w-[300px] w-full h-[200px] object-cover"
              />
              <Image
                src={"/assets/images/about/aboutImg.jpg"}
                alt={"about-image"}
                width={200}
                height={200}
                className="lg:w-[300px] w-full h-[200px] object-cover"
              />
            </div>
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default Responsibility;
