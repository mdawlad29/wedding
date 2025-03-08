"use client";
import ComponentLayout from "@/components/shared/ComponentLayout";
import { Heading } from "@/components/shared/PageHeading";
import Image from "next/image";
import React from "react";

const OurTem = () => {
  return (
    <ComponentLayout>
      <div className="flex items-center flex-col">
        <div className="mb-16 text-center">
          <Heading title="our team" subTitle="Meet With Professional Team" />
        </div>

        <div className="relative group md:w-[400px] h-[500px] overflow-hidden">
          <Image
            src="/assets/images/about/about-me.png"
            width={600}
            height={600}
            alt="About ME"
          />

          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-opacity duration-500 ease-in-out" />

          <div className="absolute inset-0 flex flex-col justify-between p-5">
            <span className="text-xl text-white font-semibold absolute right-3 top-10 rotate-90 transform translate-x-10 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 ease-in-out">
              Chef
            </span>

            <span className="text-xl text-white font-semibold absolute left-5 bottom-5 transform translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-in-out">
              Dayanand
            </span>
          </div>
        </div>
      </div>
    </ComponentLayout>
  );
};

export default OurTem;
