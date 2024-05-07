"use client";
import { useRouter } from "next/navigation";
import { cardService } from "@/constant";
import React from "react";
import Card from "./Card";
import Button from "./Button";
import Link from "next/link";
import Servspages from "@/app/servicePage";

const Services = () => {
	const router = useRouter();
	return (
		<section className="max-container padding-container py-24">
			<article className="flex flex-col gap-8 ">
				<h1 className="bold-32 font-[700] text-center">Our Services</h1>
				<p className=" lg: text-2xl">
					Take your career to the Next level regardless of the travel plans
				</p>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
			</article>
			<>
				<Servspages />
			</>
			<Link
				href="mailto:your-email@example.com"
				className="flex flexCenter my-6">
				<Button
					type={"button"}
					title={"Get Started..."}
					variant="btn_dark_rounded"
				/>
			</Link>
		</section>
	);
};

export default Services;
