import { Typography } from "antd";
import { usePathname } from "next/navigation";
import React from "react";

export const PageHeadingImg = ({ img }: { img: string }) => {
  const pathname = usePathname();

  return (
    <div
      className="absolute inset-0 opacity-100"
      style={{
        backgroundImage: `url(${img})`,
        backgroundPositionY: pathname === "/contact" ? "75%" : "90%",
        backgroundPositionX: "50%",
        objectFit: "cover",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100%",
      }}
    />
  );
};

export const PageHeadingContent = ({ title }: { title: string }) => {
  return (
    <Typography.Title
      level={1}
      className={`!text-neutral !m-0 !mt-10 !text-5xl leading-[44px] text-center capitalize font-semibold`}
    >
      {title}
    </Typography.Title>
  );
};
