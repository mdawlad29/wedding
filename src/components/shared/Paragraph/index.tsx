import React from "react";

const Paragraph = ({
  title,
  className,
}: {
  title?: string;
  className?: string;
}) => {
  return (
    <p
      className={`${className} text-justify text-base leading-[24px] text-gray-700 md:my-5 my-2`}
    >
      {title}
    </p>
  );
};

export default Paragraph;
