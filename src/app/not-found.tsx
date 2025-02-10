import Link from "next/link";
import React from "react";

const PageNotFound = () => {
  return (
    <p className="flex justify-center flex-col text-center text-red-500 text-lg h-screen">
      Page not found..!!!
      <Link href="/" className="text-blue-500 hover:underline block text-base">
        Go Back
      </Link>
    </p>
  );
};

export default PageNotFound;
