"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Flex, Typography } from "antd";

interface IProps {
  skills: { name: string; target: number }[];
}

const ProgressBar = ({ skills }: IProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [progress, setProgress] = useState(skills.map(() => 0));

  useEffect(() => {
    if (isInView) {
      const counts = skills.map(() => 0);
      const intervals: NodeJS.Timeout[] = [];

      skills.forEach(({ target }, i) => {
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
  }, [isInView, skills]);

  return (
    <div ref={ref} className="mb-8">
      {skills.map(({ name }, index) => (
        <div key={index} className="mb-3">
          <Flex align="center" justify="space-between" className="mb-2">
            <Typography.Text className="text-[16px] font-medium !text-accent capitalize">
              {name}
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
                isInView ? { width: `${progress[index]}%` } : { width: "0%" }
              }
              transition={{ duration: 1, ease: "easeOut" }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProgressBar;
