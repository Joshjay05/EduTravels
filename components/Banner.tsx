"use client";
import Slider from "react-slick";
import bannerone from "@/public/hero.jpg";
import bannertwo from "@/public/herobg.jpg";
import bannerthree from "@/public/Herobgnew.jpg";
// import bannerfour from "@/public/Lithuania.jpg";
import { PiCaretLeftLight, PiCaretRightLight } from "react-icons/pi";
import Image from "next/image";
import BannerText from "./BannerText";

const Banner = () => {
	const NextArrow = (props: any) => {
		const { onClick } = props;
		return (
			<div
				className="p-3 bg-slate-100 hover:text-orange-600 hover:bg-white cursor-pointer duration-200 rounded-full text-2xl flex items-center justify-center z-20 absolute left-2 top-1/2"
				onClick={onClick}>
				<PiCaretLeftLight />
			</div>
		);
	};
	const PrevArrow = (props: any) => {
		const { onClick } = props;
		return (
			<div
				className="p-3 bg-slate-100 hover:text-orange-600 hover:bg-white cursor-pointer duration-200 rounded-full text-2xl flex items-center justify-center z-20 absolute right-2 top-1/2"
				onClick={onClick}>
				<PiCaretRightLight />
			</div>
		);
	};
	var settings = {
		dots: false,
		infinite: true,
		autoplay: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		nextArrow: <NextArrow />,
		prevArrow: <PrevArrow />,
	};
	return (
		<section className="relative ">
			<Slider {...settings}>
				<div className="w-full h-full relative">
					<Image
						src={bannerone}
						alt="bannerone"
						className="w-full h-full relative"
						priority
					/>
					<BannerText title="Work and Travel" />
				</div>
				{/* <div className="w-full h-full relative">
					<Image
						src={bannerfour}
						alt="bannerfour"
						className="w-full  relative"
					/>
					<BannerText title="Beautiful places" />
				</div> */}
				<div className="w-full h-full relative">
					<Image
						src={bannertwo}
						alt="bannertwo"
						className="w-full h-full relative"
					/>
					<BannerText title="Study Offers" />
				</div>
				<div className="w-full h-full relative">
					<Image
						src={bannerthree}
						alt="bannerthree"
						className="w-full h-full relative"
					/>
					<BannerText title="Tourism" />
				</div>
			</Slider>
			<div className="absolute w-full h-44 bg-gradient-to-t from-gray-100 to-transparent bottom-0 left-0 z-10" />
		</section>
	);
};

export default Banner;
