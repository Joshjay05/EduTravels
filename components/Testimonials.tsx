"use client";
import React from "react";
import { RiDoubleQuotesR } from "react-icons/ri";
import Slider from "react-slick";
import Image from "next/image";
import { TESTIMONIAL } from "@/constant";
const Testimonials = () => {
	var settings = {
		dots: false,
		infinite: true,
		autoplay: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: false,
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
		<section className="padding-container max-container pt-16 bg-slate-50">
			<h3 className="bold-32 text-center">Testimonials</h3>
			<p className="text-center max-w-lg m-auto text-gray-30">
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
				minima similique libero error earum mollitia deserunt quae modi nisi ad
				qui? Voluptates harum ipsum fugit recusandae pariatur ad, accusamus
				optio hic animi dolorum minus.
			</p>

			<Slider {...settings}>
				{TESTIMONIAL.map((testimonial) => (
					<TestimonialItem
						key={testimonial.title}
						title={testimonial.title}
						des={testimonial.desc}
						profession={testimonial.profession}
						URL={testimonial.URL}
					/>
				))}
			</Slider>
		</section>
	);
};

type TestimonialsItem = {
	title: string;
	profession: string;
	URL: string;
	des: string;
};
const TestimonialItem = ({ title, profession, URL, des }: TestimonialsItem) => {
	return (
		<div className="mx-4 my-12 relative px-8 py-12 rounded-md bg-white z-10">
			<span className="text-slate-10 text-9xl absolute -top-4 -right-4 -z-10">
				<RiDoubleQuotesR />
			</span>
			<p className="text-gray-50 text-center ">{des}</p>
			<div className="flexCenter gap-4 mt-8">
				<Image
					src={URL}
					alt="user"
					height={50}
					width={50}
					className="rounded-full"
				/>
				<div>
					<p className="medium-14">{title}</p>
					<p className="text-gray-20 regular-14">{profession}</p>
				</div>
			</div>
		</div>
	);
};

export default Testimonials;
