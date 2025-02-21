import Faq from "@/components/Faq";
import PremiumService from "@/components/Services/PremiumService";
import Testimonial from "@/components/Testimonial";
import React from "react";

const ServicePage = () => {
  return (
    <>
      <PremiumService />
      <Faq />
      <Testimonial />
    </>
  );
};

export default ServicePage;
