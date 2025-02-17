import Responsibility from "@/components/Responsibility";
import AboutPage from "./about/page";
import Services from "@/components/Services";
import OurWork from "@/components/OurWork";

export default function Home() {
  return (
    <div>
      <AboutPage />
      <Responsibility />
      <Services />
      <OurWork />
    </div>
  );
}
