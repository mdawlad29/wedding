import React from "react";

const ComponentLayout = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <section
      className={`lg:mx-28 md:mx-7 mx-4 lg:mt-24 md:mt-16 my-12 ${className}`}
    >
      {children}
    </section>
  );
};

export default ComponentLayout;
