import About from "@/components/About";
import Banner from "@/components/Banner";
import EnquiryForm from "@/components/EnquiryForm";
import Feature from "@/components/Feature";
import Hero from "@/components/Hero";
import Packages from "@/components/Packages";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import Image from "next/image";
// import Servspages from "./servicePage";

export default function Home() {
	return (
		<main className="">
			<Banner />
			{/* <Hero /> */}
			<About />
			<Feature />
			<Services />
			{/* <Servspages /> */}
			<Packages />
			<EnquiryForm />
			<Video />
			<Testimonials />
		</main>
	);
}
