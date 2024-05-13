import React from "react";
import Button from "./Button";
import { CATEGORIES } from "@/constant";
import Link from "next/link";
import Image from "next/image";
import { IconType } from "react-icons";
import { RiTravestiLine } from "react-icons/ri";
const Hero = () => {
	return (
		<section className="relative bg-hero bg-cover bg-center bg-no-repeat h-[100vh] w-full z-10 pb-13">
			<article className="max-container padding-container relative top-28 sm:top-1/3 z-10">
				<h1 className=" bold-44 sm:bold-64 text-white capitalize ,ax-w-[36rem]">
					Explore The World With Us
				</h1>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores
					repellendus facilis hic nihil eius consequuntur quia tenetur
					reprehenderit fuga necessitatibus atque pariatur, perferendis nobis ea
					vitae repudiandae. Expedita, fugiat excepturi doloremque officiis
					maiores, aspernatur libero voluptatum maxime eligendi, dignissimos
					voluptates.
				</p>
				<div className="mt-8">
					<Button
						type="button"
						title="Travel Plan"
						icon={RiTravestiLine}
						variant="btn_white"
					/>
				</div>

				<h4 className="text-white my-4 bold-22">Explore the key points</h4>
				<ul className="flex flex-wrap gap-4">
					{CATEGORIES.map((category) => (
						<CategoryItems
							key={category.title}
							title={category.title}
							icon={category.icon}
						/>
					))}
				</ul>
			</article>
		</section>
	);
};
type categoryItems = {
	title: string;
	icon: IconType | string;
};
const CategoryItems = ({ title, icon: Icon }: categoryItems) => {
	return (
		<Link
			href="/"
			className="bg-white flexCenter gap-2 px-4 py-2 cursor-pointer hover:translate-y-[2px] transition-all duration-500 rounded-md">
			<Icon className="regular-28" />
			{title}
		</Link>
	);
};
export default Hero;
