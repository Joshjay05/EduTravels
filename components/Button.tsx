import React, { ReactNode } from "react";
import { IconType } from "react-icons";

type ButtonProps = {
	type: "button" | "submit";
	title: string;
	icon?: IconType; // Adjusted type for icon prop
	variant: string;
	children?: ReactNode;
};

const Button = ({
	type,
	title,
	icon: Icon, // Destructure icon as Icon
	variant,
	children,
}: ButtonProps) => {
	return (
		<button
			className={`flexCenter gap-2 border rounded-full ${variant}`}
			type={type}>
			{/* Check if Icon is provided */}
			{Icon && <Icon />}
			<label className="whitespace-nowrap cursor-pointer bold-16">
				{title}
			</label>
		</button>
	);
};

export default Button;
