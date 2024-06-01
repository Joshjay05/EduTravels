import { PACKAGES } from "@/constant";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { RiSearchLine, RiTimeLine } from "react-icons/ri";
const Packages = () => {
	return (
		<section className="max-container padding-container pt-16 bg-slate-100 ">
			<h1 className="bold-32 text-center">Our packages</h1>
			<p className="text-center max-w-lg m-auto text-gray-30">
				Introducing our curated selection of travel packages designed to cater
				to a variety of interests and preferences. Whether you're seeking
				adventure, relaxation, cultural experiences, or family fun, we have the
				perfect package for you.
			</p>
			<div className="grid grid-cos-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 py-12">
				{PACKAGES.map((card) => (
					<PackageItem
						key={card.title}
						title={card.title}
						URL={card.URL}
						price={card.price}
						des={card.des}
						duration={card.duration}
					/>
				))}
			</div>
		</section>
	);
};
interface PackagesItem {
	title: string;
	URL: string;
	price: string;
	des: string;
	duration: string;
}
// const PackageItem = ({ title, URL, price, des, duration }: PackagesItem) => {
// 	return (
// 		<section className="overflow-hidden rounded-tr-xl border border-slate-200 group">
// 			<article className="relative overflow-hidden">
// 				<img
// 					src={URL}
// 					alt="img"
// 					// height={510}
// 					// width={510}
// 					className=" group- hover:scale-105 group-hover:rotate-2 transition-all duration-500"
// 				/>
// 				<Link
// 					href={"/"}
// 					className="absolute top-1/2 left-1/2 h-14 w-14 bg-white flexCenter transition-x-1/2 -translate-y-1/2 scale-0 group-hover:scale-100 transition-all duration-500">
// 					<RiSearchLine />
// 				</Link>
// 			</article>
// 			<article className="p-4 bg-white">
// 				<div className="capitalize medium-18 flexBetween">
// 					{title} <span className="text-green-50 ">{price}</span>
// 				</div>
// 				<p className="text-gray-50 my-3 regular border-b border-gray-200 pb-3">
// 					{des}
// 				</p>
// 				<div className="flexBetween">
// 					<p className="flexStart  gap-2 text-gray-50">
// 						<RiTimeLine />
// 						<span className="medium">{duration}</span>
// 					</p>
// 					<Link
// 						href="/"
// 						className="medium-14 px-4 py-2 rounded-md border bg-black text-white">
// 						<span> Book Now</span>
// 					</Link>
// 				</div>
// 			</article>
// 		</section>
// 	);
// };
const PackageItem = ({ title, URL, price, des, duration }: PackagesItem) => {
	return (
		<section
			id="packages"
			className="overflow-hidden rounded-tr-xl border border-slate-200 group">
			<article className="relative overflow-hidden h-80">
				{" "}
				{/* Set a fixed height for the image container */}
				<img
					src={URL}
					alt="img"
					className="w-full h-full object-cover group-hover:scale-105 group-hover:rotate-2 transition-all duration-500"
				/>
				<Link
					href={"/"}
					className="absolute top-1/2 left-1/2 h-14 w-14 bg-white flexCenter transition-x-1/2 -translate-y-1/2 scale-0 group-hover:scale-100 transition-all duration-500 rounded-full">
					<RiSearchLine />
				</Link>
			</article>
			<article className="p-4 bg-white">
				<div className="capitalize medium-18 flexBetween">
					{title} <span className="text-green-50 ">{price}</span>
				</div>
				<p className="text-gray-50 my-3 regular border-b border-gray-200 pb-3">
					{des}
				</p>
				<div className="flexBetween">
					<p className="flexStart  gap-2 text-gray-50">
						<RiTimeLine />
						<span className="medium">{duration}</span>
					</p>
					<Link
						href="https://wa.me/message/IF4D22J3UN73O1"
						className="medium-14 px-4 py-2 rounded-md border bg-black text-white">
						<span> Book Now</span>
					</Link>
				</div>
			</article>
		</section>
	);
};

export default Packages;
