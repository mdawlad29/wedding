"use client";
import React from "react";
import imageData from "../../components/temp/gallery.json";
import { Col, Image, Row } from "antd";
import ComponentLayout from "../shared/ComponentLayout";

const Gallery = () => {
  const { galleryData } = imageData;

  return (
    <ComponentLayout>
      <Row gutter={[16, 16]} className="!m-0">
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
    </ComponentLayout>
  );
};

export default Gallery;
