"use client";
import React, { useRef } from "react";
import Slider, { Settings } from "react-slick";
import Image from "next/image";
import { Col, Flex, Row, Typography } from "antd";
import Link from "next/link";
import { FaQuoteLeft } from "react-icons/fa";

const imageData = [
  {
    id: 1,
    image: "/assets/images/sweet_memory/slide-1.webp",
  },
  {
    id: 2,
    image: "/assets/images/sweet_memory/slide-2.webp",
  },
  {
    id: 3,
    image: "/assets/images/sweet_memory/slide-3.jpg",
  },
  {
    id: 4,
    image: "/assets/images/sweet_memory/slide-4.jpg",
  },
  {
    id: 5,
    image: "/assets/images/sweet_memory/slide-5.jpg",
  },
  {
    id: 6,
    image: "/assets/images/sweet_memory/slide-6.jpg",
  },
  {
    id: 7,
    image: "/assets/images/sweet_memory/slide-7.jpg",
  },
  {
    id: 8,
    image: "/assets/images/sweet_memory/slide-8.jpg",
  },
];

const SweetMemory = () => {
  const sliderRef = useRef<Slider | null>(null);

  const settings: Settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <section className="lg:mx-28 md:mx-7 mx-4 md:mt-16 my-12">
      <Row gutter={[30, 30]}>
        <Col xs={24} md={24} lg={12}>
          <Flex gap={30}>
            <div className="w-14 h-14 rounded-full flex items-center justify-center bg-primary text-neutral">
              <FaQuoteLeft size={28} />
            </div>

            <Typography.Title
              level={3}
              className="md:!text-[22px] !text-[18px] leading-[33px] font-semibold !text-accent !mt-4 text-start md:w-[353px] w-[72%]"
            >
              With a beautiful return gift (Lawna) turn every moment into a
              Sweet Memory.
            </Typography.Title>
          </Flex>

          <p className="text-justify text-base leading-[24px] text-gray-700 md:my-5 my-2">
            “At Bikaner Marwadi Caterers, we believe that every occasion is an
            opportunity to create lasting memories and celebrate life’s special
            moments. Just like the cherished Indian tradition of ‘lawna,’ our
            catering service is a reflection of our gratitude to our valued
            clients and a way of sharing joy and happiness during your special
            events. We understand that our culinary creations play a vital role
            in enhancing the overall celebration, forging strong social bonds,
            and leaving a sweet imprint on your heart.
          </p>

          <p className="text-justify text-base leading-[24px] text-gray-700 mb-12">
            Much like the sweet return gifts, our culinary offerings are a
            delightful part of the occasion, adding a touch of warmth and
            sweetness to your celebrations. With Bikaner Marwadi Caterers, you
            can count on us to not only provide delicious food but also create
            memorable culinary experiences that symbolize the enduring
            connections formed during your event.”
          </p>

          <div className="text-center w-48 py-4 hover:bg-accent hover:-translate-y-2 duration-300 ease-in-out group bg-primary">
            <Link
              href={""}
              className="!text-neutral text-xl capitalize font-semibold"
            >
              get in touch
            </Link>
          </div>
        </Col>

        <Col xs={24} md={24} lg={12}>
          <Slider ref={sliderRef} {...settings}>
            {imageData.map((img) => (
              <Image
                key={img?.id}
                src={img?.image}
                alt="Slide-image"
                width={500}
                height={500}
                className="object-cover md:h-[300px] lg:h-full h-[200px]"
              />
            ))}
          </Slider>
        </Col>
      </Row>
    </section>
  );
};

export default SweetMemory;
