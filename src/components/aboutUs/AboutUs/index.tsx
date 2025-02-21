import ComponentLayout from "@/components/shared/ComponentLayout";
import { Col, Flex, Row, Typography } from "antd";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { Heading } from "@/components/shared/PageHeading";
import { motion, useInView } from "framer-motion";

const AboutUs = () => {
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
