import About from "@/components/aboutUs/About";
import Blog from "@/components/Blog";
import Events from "@/components/Events";
import OurWork from "@/components/OurWork";
import Responsibility from "@/components/Responsibility";
import Services from "@/components/Services";
import SweetMemory from "@/components/SweetMemory";
import Testimonial from "@/components/Testimonial";

export default function Home() {
  return (
    <div>
      <About />
      <Responsibility />
      <Services />
      <OurWork />
      <SweetMemory />
      <Testimonial />
      <Events />
      <Blog />
    </div>
  );
}
