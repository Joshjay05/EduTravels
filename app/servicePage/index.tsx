import ServiceCard from "@/components/ServiceCard";
import { cardService, serviceCard } from "@/constant";
import React from "react";

const Servspages = () => {
	return (
		<div className="max-container padding-container py-24">
			<h1 className="bold-32 text-center py-12">
				We Provide End-To-End Solution
			</h1>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 shadow">
				{serviceCard.map((card) => (
					<ServiceCard key={card.title} {...card} />
				))}
			</div>
		</div>
	);
};

export default Servspages;
