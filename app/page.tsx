import About from "@/components/About";
import Banner from "@/components/Banner";
import Feature from "@/components/Feature";
import Hero from "@/components/Hero";
import Packages from "@/components/Packages";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import Image from "next/image";

export default function Home() {
	return (
		<main className="">
			<Banner />
			{/* <Hero /> */}
			<Feature />
			<About />
			<Packages />
			<Video />
			<Testimonials />
		</main>
	);
}
