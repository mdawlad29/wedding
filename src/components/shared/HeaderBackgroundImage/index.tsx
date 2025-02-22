import { PageHeadingImg } from "@/components/shared/PageHeading";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
const images = [
  "/assets/images/hero/slide-1.webp",
  "/assets/images/hero/slide-2.webp",
  "/assets/images/hero/slide-3.webp",
  "/assets/images/hero/slide-4.webp",
  "/assets/images/hero/slide-5.webp",
  "/assets/images/hero/slide-6.png",
  "/assets/images/hero/slide-7.png",
  "/assets/images/hero/slide-8.png",
  "/assets/images/hero/slide-9.png",
  "/assets/images/hero/slide-10.png",
];

const HeaderBackgroundImage = () => {
  const pathname = usePathname();
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0">
      {pathname === "/gallery" ? (
        <PageHeadingImg img="/assets/images/gallery/image-1.jpg" />
      ) : pathname === "/contact" ? (
        <PageHeadingImg img="/assets/images/contact-hero.jpg" />
      ) : pathname === "/services" ? (
        <PageHeadingImg img="/assets/images/gallery/image-20.jpg" />
      ) : pathname === "/about" ? (
        <PageHeadingImg img="/assets/images/about/about-hero.jpg" />
      ) : (
        images.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-all duration-[5000ms] ease-in-out ${
              index === activeIndex
                ? "opacity-100 scale-110"
                : "opacity-0 scale-100"
            }`}
            style={{
              backgroundImage: `url(${img})`,
              // backgroundSize: "100%",
              // objectFit: "cover",
              backgroundRepeat: "no-repeat",
            }}
          />
        ))
      )}
    </div>
  );
};

export default HeaderBackgroundImage;
