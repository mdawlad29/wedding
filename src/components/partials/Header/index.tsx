"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { headerMenus } from "./HeaderMenus";
import ResponsiveHeader from "./ResponsiveHeader";

const images = [
  "/assets/images/hero/hero.jpg",
  "/assets/images/hero/hero-1.jpg",
  "/assets/images/hero/hero-2.jpg",
  "/assets/images/hero/hero-4.jpg",
];

const Header = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <header
      style={{
        backgroundImage: `url(${images[activeIndex]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "120vh",
        transition: "opacity 1.5s ease-in-out, transform 1.5s ease-in-out",
        opacity: 1,
        animation: "fadeIn 5s ease-in-out",
      }}
    >
      <nav className="lg:block hidden">
        <div className="flex items-center justify-center gap-10 py-3">
          {/* First Two Items */}
          <div className="flex gap-8">
            {headerMenus.slice(0, 3).map((menu) => (
              <Link
                key={menu.name}
                href={menu.link}
                className="text-base !text-neutral hover:!text-primary uppercase duration-300 ease-in-out"
              >
                {menu.name}
              </Link>
            ))}
          </div>

          {/* Logo */}
          <Image
            src="/assets/images/logo.png"
            alt="logo"
            width={140}
            height={140}
          />

          {/* Next Two Items */}
          <div className="flex gap-8">
            {headerMenus.slice(3, 5).map((menu) => (
              <Link
                key={menu.name}
                href={`${menu.link}`}
                className="text-base !text-neutral hover:!text-primary uppercase duration-300 ease-in-out"
              >
                {menu.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      <ResponsiveHeader />
    </header>
  );
};

export default Header;
