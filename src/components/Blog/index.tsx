"use client";
import { Typography } from "antd";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaClock } from "react-icons/fa";
import { Great_Vibes } from "next/font/google";
import ComponentLayout from "../shared/ComponentLayout";

const greatVibes = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
});

const Blog = () => {
  return (
    <ComponentLayout className="mb-28">
      <div className="text-center mb-16">
        <Typography.Text
          className={`block ${greatVibes.className} text-3xl text-primary leading-8 font-normal capitalize !mb-3`}
        >
          our blog
        </Typography.Text>

        <Typography.Title
          level={3}
          className="md:!text-4xl !text-2xl font-semibold leading-[43px] !text-gray-800 capitalize !m-0 "
        >
          Latest Blog & Articles
        </Typography.Title>
      </div>

      <div className="max-w-4xl flex flex-col md:flex-row items-center gap-6">
        {/* Blog Image */}
        <div className="w-full md:w-1/3">
          <Image
            src="/assets/images/blog/blog-1.jpg"
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
