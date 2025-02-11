"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { headerMenus } from "./HeaderMenus";
import ResponsiveHeader from "./ResponsiveHeader";
import HeroSection from "@/components/HeroSection";

const images = [
  "/assets/images/hero/hero.jpg",
  "/assets/images/hero/hero-1.jpg",
  "/assets/images/hero/hero-2.jpg",
  "/assets/images/hero/hero-3.jpg",
];

const Header = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <header className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-all duration-[5000ms] ease-in-out ${
              index === activeIndex
                ? "opacity-100 scale-110"
                : "opacity-0 scale-100"
            }`}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40 backdrop-blur-sm"></div>

      {/* Navigation */}
      <nav className="relative lg:block hidden">
        <div className="flex items-center justify-center gap-10 py-3">
          {/* First Two Items */}
          <div className="flex gap-8">
            {headerMenus.slice(0, 3).map((menu) => (
              <Link
                key={menu.name}
                href={menu.link}
                className="text-base text-white hover:text-primary uppercase transition duration-150"
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
                href={menu.link}
                className="text-base text-white hover:text-primary uppercase transition duration-300"
              >
                {menu.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Responsive Header */}
      <ResponsiveHeader />

      {/* Hero Content */}
      <HeroSection />
    </header>
  );
};

export default Header;
