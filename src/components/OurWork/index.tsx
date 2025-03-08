"use client";
import Image from "next/image";
import { IoIosRestaurant } from "react-icons/io";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Great_Vibes } from "next/font/google";
import Curve from "../shared/Curve";

const greatVibes = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
});

const OurWork = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <section className="relative bg-neutral text-center pb-16">
      {/* Background Image with Overlay */}
      <div className="relative h-[270px] md:h-[430px] overflow-hidden">
        <Image
          src="/assets/images/hero/our-work-bg.jpg"
          alt="Catering Background"
          layout="fill"
          objectFit="cover"
          className="opacity-80"
        />
        <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-center items-center text-white px-4">
          <span
            className={`${greatVibes.className} text-primary text-3xl font-normal`}
          >
            Our Work
          </span>

          <h2 className="text-3xl md:text-4xl font-medium my-3">
            Our Working Process
          </h2>

          <p className="max-w-xl text-[14px]">
            Efficiency and excellence are the cornerstones of our working
            process. From planning to execution, we ensure your event is a
            seamless success with Bikaner Marwadi Caterers.
          </p>
        </div>

        <Curve />
      </div>

      {/* Steps */}
      <motion.div
        ref={ref}
        initial={{ y: "7vw" }}
        animate={isInView ? { y: 0, opacity: 1 } : { y: "7vw", opacity: 0 }}
        transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
        className="container mx-auto px-6 lg:px-20 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-10 mt-16"
      >
        {steps.map((step, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center group relative"
          >
            {/* Number */}
            <div className="absolute -top-1 w-12 h-12 bg-primary text-white flex items-center justify-center rounded-full text-base font-bold z-10">
              {step.number}
            </div>

            {/* Icon Box */}
            <div className="border-[3px] border-primary duration-500 ease-in-out p-6 w-[8rem] h-[9rem] group-hover:bg-primary flex justify-center items-center flex-col relative mt-6">
              <IoIosRestaurant className="text-primary group-hover:text-neutral duration-500 ease-in-out text-5xl" />
            </div>

            <h3 className="text-[20px] leading-[24px] font-semibold text-accent mb-3 mt-4">
              {step.title}
            </h3>

            <p className="text-[16px] leading-[24px] font-normal text-gray-500">
              {step.description}
            </p>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

const steps = [
  {
    number: "01",
    title: "Make an Appointment",
    description:
      "Schedule your event with us in three simple steps: Contact us, discuss your needs, and secure your date.",
  },
  {
    number: "02",
    title: "Pay Your Catering",
    description:
      "Finalize your catering payment effortlessly through our secure online payment portal.",
  },
  {
    number: "03",
    title: "Enjoy Your Food",
    description:
      "Savor exquisite flavors. Our chefs craft culinary delights; your job? Simply enjoy.",
  },
];

export default OurWork;
