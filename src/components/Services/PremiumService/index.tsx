"use client";
import ComponentLayout from "@/components/shared/ComponentLayout";
import { Heading } from "@/components/shared/PageHeading";
import React, { useRef } from "react";
import ServiceCard from "../ServiceCard";
import { useInView, motion } from "framer-motion";

const PremiumService = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <ComponentLayout>
      <div>
        <div className="flex flex-col items-center text-center mb-14">
          <Heading
            title="our services"
            subTitle="We Provide Premium Catering Services"
          />

          <p className="text-base leading-[24px] text-gray-700 md:my-5 my-2 md:w-[540px]">
            Indulge in the finest culinary experiences with our premium
            catering. From exquisite dishes to flawless service, Bikaner Marwadi
            Caterers defines excellence.
          </p>
        </div>

        <motion.div
          ref={ref}
          initial={{ x: "15vw", opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : { x: "15vw", opacity: 0 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        >
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
            {[...Array(6)].map((_, index) => (
              <ServiceCard
                isActiveCard={index === 0 || index === 2 || index === 4}
                key={index}
                index={index}
                title={
                  index === 0
                    ? "Corporate Events"
                    : index === 1
                    ? "Wedding Events"
                    : index === 2
                    ? "social events"
                    : index === 3
                    ? "private party"
                    : index === 4
                    ? "Birthday party"
                    : "Anniversary Events"
                }
                description={
                  index === 0
                    ? "Elevate your corporate experience with our tailored menus, exceptional service, and the rich flavors of Rajasthan. Make your event unforgettable with Raju Catering Services."
                    : index === 1
                    ? "Creating unforgettable wedding moments with delectable menus and flawless service. Make your special day extraordinary with Raju Catering Services."
                    : index === 2
                    ? "Enhance your social gatherings with our exquisite menus and exceptional service. Make every occasion a cherished celebration with Raju Catering Services."
                    : index === 3
                    ? "Make your private gatherings extraordinary with our customized menus and exceptional service. Raju Catering Services ensures every occasion becomes a cherished celebration."
                    : index === 4
                    ? "Celebrate birthdays in style with our delectable menus and flawless service. Raju Catering Services transforms every moment into a cherished memory."
                    : "Honor love and togetherness with our customized menus and exceptional service. Raju Catering Services creates unforgettable moments for your special day."
                }
                btnLink=""
                btnTitle="book now"
              />
            ))}
          </div>
        </motion.div>
      </div>
    </ComponentLayout>
  );
};

export default PremiumService;
