import Appointment from "@/components/Appointment";
import Faq from "@/components/Faq";
import PremiumService from "@/components/Services/PremiumService";
import Testimonial from "@/components/Testimonial";
import React from "react";

const ServicePage = () => {
  return (
    <>
      <PremiumService />
      <Appointment />
      <div className="mt-48">
        <Testimonial />
      </div>
      <Faq />
    </>
  );
};

export default ServicePage;
