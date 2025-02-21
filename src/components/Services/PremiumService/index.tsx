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
                    : "Social Events"
                }
                description={
                  index === 0
                    ? "Elevate your corporate experience with our tailored menus, exceptional service, and the rich flavors of Rajasthan. Make your event unforgettable with Bikaner Marwadi Caterers."
                    : index === 1
                    ? "Crafting unforgettable wedding experiences with exquisite menus and impeccable service. Elevate your special day with Bikaner Marwadi Caterers."
                    : "Elevate your social gatherings with our delightful menus and flawless service. Turn every moment into a memorable celebration with Bikaner Marwadi Caterers."
                }
                btnLink="/contact"
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
