import React from "react";

const Curve = () => {
  return (
    <div className="w-full absolute bottom-0 z-20">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1000 100"
        preserveAspectRatio="none"
      >
        <path
          style={{
            overflow: "hidden",
          }}
          fill="#ffffff"
          d="M0,50 C250,100 750,100 1000,50 V100 H0 Z"
          //   d="M500,97C126.7,96.3,0.8,19.8,0,0v100l1000,0V1C1000,19.4,873.3,97.8,500,97z"
        ></path>
      </svg>
    </div>
  );
};

export default Curve;
