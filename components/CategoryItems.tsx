import Link from "next/link";
import { IconType } from "react-icons";

type categoryItems = {
	title: string;
	icon: IconType | string;
};
const CategoryItems = ({ title, icon: Icon }: categoryItems) => {
	return (
		<Link
			href="/"
			className="bg-white flexCenter gap-2 px-4 py-2 cursor-pointer hover:translate-y-[2px] transition-all duration-500 rounded-md">
			<Icon className="regular-28 capitalize" />
			{title}
		</Link>
	);
};

export default CategoryItems;
