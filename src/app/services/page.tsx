import Appointment from "@/components/Appointment";
import Faq from "@/components/Faq";
import PremiumService from "@/components/Services/PremiumService";
import Testimonial from "@/components/Testimonial";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "Services",
};

const ServicePage = () => {
  return (
    <>
      <PremiumService />
      <Appointment />
      <div className="lg:mt-48">
        <Testimonial />
      </div>
      <Faq />
    </>
  );
};

export default ServicePage;
