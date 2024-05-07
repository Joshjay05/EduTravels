"use client";
import { useRouter } from "next/navigation";
import { cardService } from "@/constant";
import React from "react";
import Card from "./Card";
import Button from "./Button";
import Link from "next/link";

const Services = () => {
	const router = useRouter();
	return (
		<section className="max-container padding-container py-24">
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
			</article>
			<div
				className=" flex flexCenter my-8 "
				onClick={() => router.push("/servicePage")}>
				<Button
					type={"button"}
					title={"learn more"}
					variant="btn_dark_rounded"
					onClick={() => router.push("/moreServices")}
				/>
			</div>
		</section>
	);
};

export default Services;
