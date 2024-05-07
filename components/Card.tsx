import { IconType } from "react-icons";

const Card = ({
	description,
	title,
	icon: Icon,
	color,
}: {
	description: string;
	title: string;
	icon: string | IconType;
	color: string;
}) => {
	return (
		<div
			className={`bg-${color} flex flex-col justify-center gap-4 shadow h-[260px] p-4 rounded `}>
			<div className="flex items-center justify-between gap-2">
				<p className=" text-2xl font-bold">{title}</p>
				<span className="text-4xl border border-slate-50 rounded-full">
					<Icon />
				</span>
			</div>
			<p className="leading-7">{description}</p>
		</div>
	);
};

export default Card;
