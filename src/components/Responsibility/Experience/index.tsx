import { Typography } from "antd";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { IoIosRestaurant } from "react-icons/io";

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <motion.div
      ref={ref}
      initial={{ x: "6vw", opacity: 0 }}
      animate={isInView ? { x: 0, opacity: 1 } : { x: "6vw", opacity: 0 }}
      transition={{ duration: 2, ease: "easeInOut" }}
      className="absolute lg:top-[25%] lg:left-[31%] top-[24%] left-[35%] -translate-x-1/2 -translate-y-1/2 md:block hidden"
    >
      <div className="bg-white w-[200px] h-[200px] rounded-full flex justify-center items-center">
        <div className="bg-primary text-neutral rounded-full w-[170px] h-[170px] flex justify-center items-center flex-col">
          <IoIosRestaurant className="text-neutral text-5xl mb-1" />

          <Typography.Text className="text-[24px] font-semibold leading-[29px] text-neutral mb-1">
            20 years
          </Typography.Text>

          <Typography.Text className="text-[16px] font-normal leading-[14px] text-neutral">
            Of Experiences
          </Typography.Text>
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
