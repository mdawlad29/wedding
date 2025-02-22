"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaClock } from "react-icons/fa";
import ComponentLayout from "../shared/ComponentLayout";
import { Heading } from "../shared/PageHeading";

const Blog = () => {
  return (
    <ComponentLayout className="mb-28">
      <div className="text-center mb-16">
        <Heading title="our blog" subTitle="Latest Blog & Articles" />
      </div>

      <div className="max-w-4xl flex flex-col md:flex-row items-center gap-6">
        {/* Blog Image */}
        <div className="w-full md:w-1/3">
          <Image
            src="/assets/images/gallery/image-46.jpg"
            alt="Blog"
            width={300}
            height={300}
            className="object-cover md:h-[200px] h-[300px] mx-auto"
          />
        </div>

        {/* Blog Content */}
        <div className="w-full lg:w-2/6">
          <Link
            href={""}
            className="text-[17px] leading-[23px] font-semibold text-gray-700 hover:text-primary"
          >
            For Weddings & Parties Catering in Jaipur By Bikaner Marwadi
            Caterers
          </Link>

          <p className="text-gray-500 flex items-center text-sm my-3">
            <FaClock className="mr-2" /> October 25, 2023
          </p>

          <p className="text-gray-700 mb-2 text-[15px]">
            For Weddings & Parties Catering in Jaipur By Bikaner Marwadi
            Caterers Dining Solution By Bikaner Marwadi Caterers is
          </p>

          <Link
            href="#"
            className="!text-primary text-[12px] leading-[12px] font-semibold inline-flex uppercase items-center"
          >
            READ MORE <span className="ml-2">➡</span>
          </Link>
        </div>
      </div>
    </ComponentLayout>
  );
};

export default Blog;
