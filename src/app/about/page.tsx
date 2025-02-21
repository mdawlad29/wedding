"use client";
import ChooseUs from "@/components/About/ChooseUs";
import Mission from "@/components/About/Mission";
import OurTem from "@/components/About/OutTeam";
import Blog from "@/components/Blog";
import Events from "@/components/Events";
import React from "react";

const AboutPage = () => {
  return (
    <>
      <Mission />
      <ChooseUs />
      <OurTem />
      <Events />
      <Blog />
    </>
  );
};

export default AboutPage;
