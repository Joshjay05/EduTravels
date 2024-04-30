"use client";
import React from "react";
import Slider from "react-slick";
import BannerText from "./BannerText";
import Image from "next/image";
import { PiCaretLeftLight, PiCaretRightLight } from "react-icons/pi";
import { FEATURE } from "@/constant";
import Link from "next/link";
import { BiSearch } from "react-icons/bi";
import { RiSearchLine } from "react-icons/ri";
// import { settings } from "react-icons/gr";
// import { title } from "process";
const Feature = () => {
	const NextArrow = (props: any) => {
		const { onClick } = props;
		return (
			<div
				className="p-2 bg-slate-100 hover:text-orange-600 hover:bg-white cursor-pointer duration-200 rounded-full text-2xl flex items-center justify-center z-20 absolute left-[-0.25rem] top-1/3"
				onClick={onClick}>
				<PiCaretLeftLight />
			</div>
		);
	};
	const PrevArrow = (props: any) => {
		const { onClick } = props;
		return (
			<div
				className="p-2 bg-slate-100 hover:text-orange-600 hover:bg-white cursor-pointer duration-200 rounded-full text-2xl flex items-center justify-center z-20 absolute right-[-0.25rem] top-1/3"
				onClick={onClick}>
				<PiCaretRightLight />
			</div>
		);
	};
	const settings = {
		dots: false,
		infinite: true,
		autoplay: true,
		autoplaySpeed: 5000, // Adjust the autoplay speed if needed
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 1,
		arrows: true,
		nextArrow: <NextArrow />,
		prevArrow: <PrevArrow />,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 4,
				},
			},

			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
				},
			},
			{
				breakpoint: 760,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
				},
			},
			{
				breakpoint: 640,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};
	return (
		<section className="max-container padding-container bg-slate-10 py-12">
			<article className="m-auto w-[90%]">
				<h3 className="bold-32 text-center">Featured Destinations</h3>
				<p className="text-center max-w-lg m-auto text-gray-30">
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
					minima similique libero error earum mollitia deserunt quae modi nisi
					ad qui? Voluptates harum ipsum fugit recusandae pariatur ad, accusamus
					optio hic animi dolorum minus.
				</p>
				<div className="pt-16">
					<Slider {...settings}>
						{FEATURE.map((feature) => (
							<FeatureItem
								title={feature.title}
								URL={feature.URL}
								des={feature.des}
							/>
						))}
					</Slider>
				</div>
			</article>
		</section>
	);
};

type FeatureItem = {
	title: string;
	URL: string;
	des: string;
};
const FeatureItem = ({ title, URL, des }: FeatureItem) => {
	return (
		<article className="mx-3 overflow-hidden border border-slate-200 group">
			<div className="overflow-hidden relative">
				<Image
					src={URL}
					alt={title}
					width={500}
					height={300}
					className="hover:scale-105 hover:rotate-2 transition-all duration-200"
				/>

				<Link
					href={URL}
					className="absolute top-1/2 left-1/2 h-14 w-14 bg-white flexCenter transition-x-1/2 -translate-y-1/2 scale-0 group-hover:scale-100 transition-all duration-500">
					<RiSearchLine />
				</Link>
			</div>

			<div className="px-5 py-3 bg-white">
				<p className="capitalize text-[17px] font-[500]">{title}</p>
				<p className="*:text-gray-50 my-2 text-[15px]">{des}</p>
			</div>
		</article>
	);
};
export default Feature;
