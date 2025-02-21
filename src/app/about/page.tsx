"use client";
import AboutUs from "@/components/aboutUs/AboutUs";
import ChooseUs from "@/components/aboutUs/ChooseUs";
import Mission from "@/components/aboutUs/Mission";
import OurTem from "@/components/aboutUs/OutTeam";
import Blog from "@/components/Blog";
import Events from "@/components/Events";
import React from "react";

const AboutPage = () => {
  return (
    <>
      <AboutUs />
      <Mission />
      <ChooseUs />
      <OurTem />
      <Events />
      <Blog />
    </>
  );
};

export default AboutPage;
