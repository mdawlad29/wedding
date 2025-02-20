"use client";
import React from "react";
import imageData from "../../components/temp/gallery.json";
import { Col, Image, Row } from "antd";

const Gallery = () => {
  const { galleryData } = imageData;

  return (
    <section className="lg:mx-28 md:mx-7 mx-4 md:my-14 lg:my-24 my-10">
      <Row gutter={[16, 16]}>
        {galleryData.map((item) => (
          <Col key={item.id} xs={24} md={12} lg={8}>
            <Image
              src={item.image}
              alt={`Gallery Image ${item.id}`}
              className="object-cover rounded-md"
            />
          </Col>
        ))}
      </Row>
    </section>
  );
};

export default Gallery;
