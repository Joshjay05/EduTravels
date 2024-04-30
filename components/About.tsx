"use client";
import React from "react";
import { ABOUT } from "@/constant";
import { IconType } from "react-icons";
import Image from "next/image";
const About = () => {
	return (
		<section className="max-container padding-container py-24">
			<article className="flex flex-col gap-8 lg:flex-row pb-24">
				{/* left */}
				<div className="flex flex-1 flex-col items-start justify-center">
					<h1 className="bold-52 pb-4 capitalize">
						Join Us in Exploring the World
					</h1>
					<p className="text-gray-50">
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet
						incidunt repellat esse distinctio autem nobis! Fugit pariatur
						reiciendis qui, non quaerat ex dolorum. Repellat, nesciunt! Sunt est
						provident sed assumenda.
					</p>
					<br />
					<p className="text-gray-50">
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore,
						libero pariatur quae rem in earum ut perspiciatis est beatae vel
						consectetur sunt possimus nisi optio, modi repellendus odio tempora
						blanditiis?
					</p>
					<div className="flex flex-wrap  mt-8 ">
						{ABOUT.map((about) => (
							<AboutItem
								key={about.title}
								title={about.title}
								icon={about.icon}
							/>
						))}
					</div>
				</div>
				{/* left end */}

				{/* right start */}

				<div className="flex flex-1 gap-4 lg:gap-8">
					<>
						<Image
							src={"/ruslan.jpg"}
							alt="about"
							width={33}
							height={400}
							className="w-auto rounded-lg border-gray-1o mb-12"
						/>
					</>
					<>
						<Image
							src={"/brooke.jpg"}
							alt="about"
							width={33}
							height={400}
							className="w-auto rounded-lg border-gray-1o mt-12"
						/>
					</>
				</div>
				{/* right end */}
			</article>

			{/* end of the first corner*/}

			{/* second corner */}

			<article className="flex flex-col gap-8 lg:flex-row pb-24">
				{/*inverted  right start */}

				<div className="flex flex-1 gap-4 lg:gap-8">
					<>
						<Image
							src={"/ruslan.jpg"}
							alt="about"
							width={33}
							height={400}
							className="w-auto rounded-lg border-gray-1o mb-12"
						/>
					</>
					<>
						<Image
							src={"/brooke.jpg"}
							alt="about"
							width={33}
							height={400}
							className="w-auto rounded-lg border-gray-1o mt-12"
						/>
					</>
				</div>
				{/* inverted right end */}
				{/* left */}
				<div className="flex flex-1 flex-col items-start justify-center">
					<h1 className="bold-52 pb-4 capitalize">
						Join Us in Exploring the World
					</h1>
					<p className="text-gray-50">
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet
						incidunt repellat esse distinctio autem nobis! Fugit pariatur
						reiciendis qui, non quaerat ex dolorum. Repellat, nesciunt! Sunt est
						provident sed assumenda.
					</p>
					<br />
					<p className="text-gray-50">
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore,
						libero pariatur quae rem in earum ut perspiciatis est beatae vel
						consectetur sunt possimus nisi optio, modi repellendus odio tempora
						blanditiis?
					</p>
					<div className="flex flex-wrap  mt-8 ">
						{ABOUT.map((about) => (
							<AboutItem
								key={about.title}
								title={about.title}
								icon={about.icon}
							/>
						))}
					</div>
				</div>
				{/* left end */}
			</article>
			{/* second corner end */}
		</section>
	);
};

type AboutItems = {
	title: string;
	icon: IconType | string;
};
const AboutItem = ({ title, icon: Icon }: AboutItems) => {
	return (
		<div className="w-1/2 flex gap-2 mb-4">
			<span>
				<Icon />
			</span>
			<p className="regular-14">{title}</p>
		</div>
	);
};

export default About;
