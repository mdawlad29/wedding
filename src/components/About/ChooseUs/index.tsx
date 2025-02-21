import React, { useEffect, useRef, useState } from "react";
import ComponentLayout from "@/components/shared/ComponentLayout";
import Curve from "@/components/shared/Curve";
import { Heading } from "@/components/shared/PageHeading";
import { Col, Flex, Row, Typography } from "antd";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

const ChooseUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [progress, setProgress] = useState([0, 0, 0]);

  useEffect(() => {
    if (isInView) {
      const targets = [89, 86, 82];
      const counts = [0, 0, 0];
      const intervals: NodeJS.Timeout[] = [];

      targets.forEach((target, i) => {
        intervals[i] = setInterval(() => {
          if (counts[i] >= target) {
            clearInterval(intervals[i]);
          } else {
            counts[i]++;
            setProgress((prev) => {
              const newProgress = [...prev];
              newProgress[i] = counts[i];
              return newProgress;
            });
          }
        }, 10);
      });

      return () => intervals.forEach((interval) => clearInterval(interval));
    }
  }, [isInView]);

  const skills = [
    "Architecture Planning",
    "Project Management",
    "Consultation Design",
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

            <p className="text-base leading-[24px] text-gray-700 md:my-5 my-6">
              Two decades of culinary expertise, passion, and creativity. Your
              events, our legacy. Bikaner Marwadi Caterers, redefining catering
              for 20 years.
            </p>

            <div ref={ref} className="mb-8">
              {skills.map((skill, index) => (
                <div key={index} className="mb-3">
                  <Flex align="center" justify="space-between" className="mb-2">
                    <Typography.Text className="text-[16px] font-medium !text-accent capitalize">
                      {skill}
                    </Typography.Text>

                    <motion.div
                      className="text-[16px] text-[#585858]"
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                      transition={{ duration: 1, delay: 0.3 }}
                    >
                      {progress[index]}%
                    </motion.div>
                  </Flex>

                  <div className="relative w-full h-[10px] bg-neutral overflow-hidden">
                    <motion.div
                      className="h-full bg-primary"
                      style={{ width: `${progress[index]}%` }}
                      initial={{ width: "0%" }}
                      animate={
                        isInView
                          ? { width: `${progress[index]}%` }
                          : { width: "0%" }
                      }
                      transition={{ duration: 1, ease: "easeOut" }}
                    />
                  </div>
                </div>
              ))}
            </div>
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
