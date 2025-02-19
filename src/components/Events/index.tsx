"use client";
import Link from "next/link";
import React from "react";

const Events = () => {
  return (
    <div className="relative w-full h-[500px] overflow-hidden">
      {/* Video Background */}
      <video
        src="/assets/video/event-video.mp4"
        autoPlay
        loop
        muted
        className="absolute w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-85 flex flex-col justify-center items-center text-center px-4">
        <h2 className="text-neutral text-2xl md:text-4xl font-bold mb-10">
          Ready To Book The Catering For Your Special Event?
        </h2>

        <div className="text-center w-48 py-4 hover:bg-neutral hover:-translate-y-2 duration-300 ease-in-out group bg-primary">
          <Link
            href={""}
            className="!text-neutral group-hover:!text-primary text-xl capitalize font-semibold"
          >
            book now
          </Link>
        </div>
      </div>

      <div className="absolute bottom-0 bg-neutral h-20 rounded-t-[50%] w-full" />
    </div>
  );
};

export default Events;
