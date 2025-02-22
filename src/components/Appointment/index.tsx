"use client";
import React from "react";
import Curve from "../shared/Curve";
import FormItemAndAddress from "./FormItemAndAddress";

const Appointment = () => {
  return (
    <div className="relative">
      <div className="relative w-full md:h-[130vh] h-[260vh] overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 opacity-100 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/assets/images/gallery/image-9.jpg')`,
          }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-70" />

        <Curve />
      </div>
      <FormItemAndAddress />
    </div>
  );
};

export default Appointment;
