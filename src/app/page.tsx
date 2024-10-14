import Image from "next/image";
import Navbar from "./components/Navbar";
import HeroSection from "./components/Hero";
import CoreServices from "./components/CoreServices";
import WhyChooseUs from "./components/WhyChooseUs";

export default function Home() {
  return (
    <div>
      
      <HeroSection/>
      <CoreServices/> 
      <WhyChooseUs/>
    </div>
  );
}
