import React from "react";
import AboutUs from "@/components/aboutUs/AboutUs";
import ChooseUs from "@/components/aboutUs/ChooseUs";
import Mission from "@/components/aboutUs/Mission";
import Blog from "@/components/Blog";
import Events from "@/components/Events";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
};

const AboutPage = () => {
  return (
    <>
      <AboutUs />
      <Mission />
      <ChooseUs />
      {/* <OurTem /> */}
      <Events />
      <Blog />
    </>
  );
};

export default AboutPage;
