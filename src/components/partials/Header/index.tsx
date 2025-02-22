"use client";
import React from "react";
import { Flex } from "antd";
import Link from "next/link";
import Image from "next/image";
import { headerMenus } from "./HeaderMenus";
import { usePathname } from "next/navigation";
import ResponsiveHeader from "./ResponsiveHeader";
import HeroSection from "@/components/HeroSection";
import HeaderBackgroundImage from "@/components/shared/HeaderBackgroundImage";

const Header = () => {
  const pathname = usePathname();

  return (
    <header
      className={`relative ${
        pathname === "/" ? "md:h-[140vh] h-screen" : "h-[70vh]"
      } w-full overflow-hidden`}
    >
      {/* Background Image */}
      <HeaderBackgroundImage />

      {/* Overlay */}
      <div
        className={`absolute inset-0 bg-black ${
          pathname === "/" ? "bg-opacity-55 backdrop-blur-sm" : "bg-opacity-75"
        }`}
      />

      {/* Navigation */}
      <nav className="relative lg:block hidden">
        <Flex align="center" justify="center" gap={40}>
          <Flex align="center" gap={32}>
            {headerMenus.slice(0, 3).map((menu) => (
              <Link
                key={menu.name}
                href={menu.link}
                className="text-base text-white hover:text-primary uppercase transition duration-150 block"
              >
                {menu.name}
              </Link>
            ))}
          </Flex>

          {/* Logo */}
          <Link href={"/"}>
            <Image
              src="/assets/images/logo.png"
              alt="logo"
              width={180}
              height={180}
              className="mx-6"
            />
          </Link>

          <Flex align="center" gap={32}>
            {headerMenus.slice(3, 5).map((menu) => (
              <Link
                key={menu.name}
                href={menu.link}
                className="text-base text-white hover:text-primary block uppercase transition duration-300"
              >
                {menu.name}
              </Link>
            ))}
          </Flex>
        </Flex>
      </nav>

      {/* Responsive Header */}
      <ResponsiveHeader />

      {/* Hero Content */}
      <HeroSection />
    </header>
  );
};

export default Header;
