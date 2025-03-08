"use client";
import React, { useEffect, useState } from "react";
import Loader from "../components/shared/Loader";

const PageRender = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  return <div>{isLoading ? <Loader /> : <>{children}</>}</div>;
};

export default PageRender;
