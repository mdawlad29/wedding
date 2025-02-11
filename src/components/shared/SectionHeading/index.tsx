import React from "react";
import { Typography } from "antd";

const SectionHeading = ({
  title,
  subTitle,
}: {
  title: string;
  subTitle: string;
}) => {
  return (
    <div>
      <Typography.Text className="block italic text-3xl text-orange-500 leading-8 font-medium capitalize !mb-3">
        {title}
      </Typography.Text>

      <Typography.Title
        level={3}
        className="md:!text-4xl !text-2xl font-semibold leading-[43px] !text-gray-800 capitalize !m-0"
      >
        {subTitle}
      </Typography.Title>
    </div>
  );
};

export default SectionHeading;
