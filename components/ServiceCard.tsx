import React from "react";
import Image from "next/image";
type Props = {
	src: string;
	title: string;
	description: string;
};
const ServiceCard = ({ src, title, description }: Props) => {
	return (
		<div className="flex flex-col items-center justify-center gap-3 shadow p-6">
			<div>
				<Image
					src={src}
					alt="image"
					width={100}
					height={100}
					className="rounded-full"
				/>
			</div>
			<div className="flex flex-col items-start justify-center">
				<h1 className="bold text-2xl">{title}</h1>
				<p className="text-center leading-6 py-4">{description}</p>
			</div>
		</div>
	);
};

export default ServiceCard;
