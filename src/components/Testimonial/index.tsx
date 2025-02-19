"use client";
import { Col, Rate, Row, Typography } from "antd";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";

const Testimonial = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    arrows: false,
    slidesToScroll: 1,
  };

  return (
    <section className="mt-20">
      <Row gutter={[20, 20]}>
        <Col xs={24} md={24} lg={6}>
          <Image
            src={"/assets/images/sweet_memory/slide-4.jpg"}
            width={400}
            height={400}
            alt="Testimonial-image"
            className="lg:h-[500px] md:h-[300px] h-[200px] w-full object-cover"
          />
        </Col>

        <Col xs={24} md={24} lg={12}>
          <div className="flex flex-col justify-center items-center h-full bg-gray-100 text-center md:py-10 py-5 px-5">
            <div>
              <span className="italic text-primary text-xl font-normal mb-4 block">
                Our Work
              </span>

              <Typography.Title
                level={3}
                className="text-[22px] leading-[33px] font-semibold !text-accent md:!mb-12 mb-6"
              >
                What They Say
              </Typography.Title>
            </div>

            <div className="w-full">
              <Slider {...settings}>
                {[...Array(2)]?.map((_, index) => (
                  <div
                    key={index}
                    className="flex justify-center flex-col items-center"
                  >
                    <Rate
                      allowHalf
                      defaultValue={4.5}
                      disabled
                      className="text-[18px] text-primary mb-3"
                    />

                    <p className="leading-[33px] md:text-[22px] text-[18px] font-normal text-gray-700 md:w-[465px] md:mb-6 mb-3 mx-auto text-center">
                      Bikaner Marwadi Caterers elevated our wedding reception to
                      an enchanting feast. The flavors were divine, and the
                      presentation was a work of art
                    </p>

                    <strong className="text-[22px] font-semibold up capitalize !text-accent">
                      maya & raj
                    </strong>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </Col>

        <Col xs={24} md={24} lg={6}>
          <Image
            src={"/assets/images/sweet_memory/slide-5.jpg"}
            width={400}
            height={400}
            alt="Testimonial-image"
            className="lg:h-[500px] md:h-[300px] h-[200px] w-full object-cover"
          />
        </Col>
      </Row>
    </section>
  );
};

export default Testimonial;
