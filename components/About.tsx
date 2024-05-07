"use client";
import React from "react";
import { ABOUT, cardService } from "@/constant";
import { IconType } from "react-icons";
import Image from "next/image";
// import Card from "./Card";
const About = () => {
	return (
		<section className="max-container padding-container py-24">
			<article className="flex flex-col gap-8">
				<h1 className="bold text-3xl capitalize text-center">About Us</h1>
				<p className="mb-28 leading-10">
					Everywhere We Go Consulting, a subsidiary of the Spread Hope
					Everywhere Foundation, is dedicated to connecting job seekers and
					international prospective students with universities and recruitment
					agencies abroad. Our mission is to facilitate a seamless recruitment
					process that attracts top talent, regardless of their active job
					search status.
					<br />
					Everywhere We Go Consulting was established to address the challenges
					of international recruitment. Recognizing the limitations of direct
					search services, we sought to create a separate organization that
					could efficiently collaborate with universities abroad. Our goal was
					to provide a tailored solution for candidates from Africa, ensuring
					they find suitable universities offering their desired courses of
					study.
				</p>
			</article>
			<article className="flex flex-col gap-8 lg:flex-row  pb-24">
				{/* left */}

				<div className="flex flex-1 flex-col items-start justify-center">
					<h1 className="font-bold lg:text-3xl pb-4 capitalize">
						Join Us in Exploring the World
					</h1>
					<p className="text-gray-50">
						At Everywhere We Go, We specialize in recruiting professionals in
						the business, engineering, and technology sectors. Contact us for a
						seamless recruitment process that prioritizes quality and candidate
						experience. We efficiently identify suitable candidates within 14
						days.
					</p>
					<br />
					<p className="text-gray-50">
						With nearly five years of experience in the recruitment industry, we
						have established extensive networks in major university towns across
						Lithuania, Canada, the United Kingdom, the United States, Australia,
						and Ireland. Our reach extends to over 30,000 highly qualified
						professionals, ranging from recent graduates embarking on their
						careers to experienced experts and managers with substantial work
						experience.
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
					<div>
						<Image
							src={"/ruslan.jpg"}
							alt="about"
							width={333}
							height={400}
							className="w-auto rounded-lg border-gray-10 mb-12"
						/>
					</div>
					<div>
						<Image
							src={"/brooke.jpg"}
							alt="about"
							width={333}
							height={300}
							className="w-auto rounded-lg border-gray-10 mt-12"
						/>
					</div>
				</div>
				{/* right end */}
			</article>

			{/* card service */}
			{/* 
			<article className="flex flex-col gap-8 ">
				<h1 className="bold-32 font-[700]">Our Services</h1>
				<p className=" lg: text-2xl">
					Take your career to the Next level regardless of the travel plans
				</p>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
					{cardService.map((card) => (
						<Card
							key={card.id}
							title={card.title}
							description={card.description}
							icon={card.icon}
							color={card.color}
						/>
					))}
				</div>
			</article> */}
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
