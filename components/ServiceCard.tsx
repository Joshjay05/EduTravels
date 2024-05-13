import React from "react";
import Image from "next/image";
type Props = {
	src: string;
	title: string;
	description: string;
};
const ServiceCard = ({ src, title, description }: Props) => {
	return (
		<div className="flex flex-col items-center justify-evenly gap-4 shadow p-6">
			<div>
				<Image
					src={src}
					alt="image"
					width={250}
					height={250}
					className="rounded-sm"
				/>
			</div>
			<div className="flex flex-col items-center justify-center">
				<h1 className="bold text-2xl">{title}</h1>
				<p className="text-center leading-6 py-4">{description}</p>
			</div>
		</div>
	);
};

export default ServiceCard;
