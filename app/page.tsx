import About from "@/components/About";
import Banner from "@/components/Banner";
import EnquiryForm from "@/components/EnquiryForm";
import Feature from "@/components/Feature";
import Hero from "@/components/Hero";
import MouseTracker from "@/components/MouseTracker";
import Packages from "@/components/Packages";
import PageLoader from "@/components/PageLoader";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <PageLoader />
      <MouseTracker />
      <Banner />
      {/* <Hero /> */}
      <Feature />
      <About />
      <Packages />
      <Services />
      <Video />
      <Testimonials />
    </main>
  );
}
