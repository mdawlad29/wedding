"use client";
import Link from "next/link";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Curve from "../shared/Curve";

const Events = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ y: "7vw", opacity: 0 }}
      animate={isInView ? { y: 0, opacity: 1 } : { y: "7vw", opacity: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="relative w-full h-[450px] overflow-hidden"
    >
      {/* Video Background */}
      <video
        src="/assets/video/event-video.mp4"
        autoPlay
        loop
        muted
        className="absolute w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-center items-center text-center px-4">
        <h2 className="text-neutral text-2xl md:text-4xl font-bold mb-10">
          Ready To Book The Catering For Your Special Event?
        </h2>

        <div className="text-center w-48 py-4 hover:bg-neutral hover:-translate-y-2 duration-300 ease-in-out group bg-primary">
          <Link
            href={"/contact"}
            className="!text-neutral group-hover:!text-primary text-xl capitalize font-semibold"
          >
            book now
          </Link>
        </div>
      </div>

      <Curve />
    </motion.div>
  );
};

export default Events;
