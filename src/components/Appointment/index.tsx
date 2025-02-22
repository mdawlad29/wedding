"use client";
import React, { useEffect, useState } from "react";
import Curve from "../shared/Curve";
import FormItemAndAddress from "./FormItemAndAddress";

const Appointment = () => {
  const [backgroundSize, setBackgroundSize] = useState("100%");

  const updateBackgroundSize = () => {
    if (window.innerWidth === 425) {
      setBackgroundSize("700%");
    } else {
      setBackgroundSize("100%");
    }
  };

  useEffect(() => {
    updateBackgroundSize();
    window.addEventListener("resize", updateBackgroundSize);

    return () => {
      window.removeEventListener("resize", updateBackgroundSize);
    };
  }, []);

  return (
    <div className="relative">
      <div className="relative w-full md:h-[130vh] h-[260vh] overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 opacity-100"
          style={{
            backgroundImage: `url('/assets/images/gallery/image-9.jpg')`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: backgroundSize,
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
