"use client";
import Loader from "@/components/shared/Loader";
import React, { useEffect, useState } from "react";

const PageRender = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  return <div>{isLoading ? <Loader /> : <>{children}</>}</div>;
};

export default PageRender;
