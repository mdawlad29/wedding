"use client";
import React, { useEffect, useState } from "react";

const PageRender = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  return <div>{isLoading ? <p>loafing...</p> : <>{children}</>}</div>;
};

export default PageRender;
