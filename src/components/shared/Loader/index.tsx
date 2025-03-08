"use client"
import { Spin } from "antd";
import React from "react";

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <Spin size="small" />
    </div>
  );
};

export default Loader;
