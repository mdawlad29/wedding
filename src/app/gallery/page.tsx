import Gallery from "@/components/Gallery";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Gallery",
};

const GalleryPage = () => {
  return <Gallery />;
};

export default GalleryPage;
