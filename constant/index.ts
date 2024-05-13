// Navigation
import { IconType } from "react-icons";
import { AiOutlineHome } from "react-icons/ai";
import { BiHotel, BiRestaurant, BiShoppingBag } from "react-icons/bi";
import { BsMarkerTip } from "react-icons/bs";
import { CgSupport } from "react-icons/cg";
import { CiCircleQuestion } from "react-icons/ci";
import { FaEarthAmericas } from "react-icons/fa6";
import { FcAbout, FcContacts, FcPackage } from "react-icons/fc";
import { HiHome } from "react-icons/hi";
import { IoIosContact } from "react-icons/io";
import { IoCheckmarkCircleOutline, IoPlanetOutline } from "react-icons/io5";
import { LuContact } from "react-icons/lu";
import { MdSupportAgent } from "react-icons/md";
import { SiCoursera } from "react-icons/si";
interface NAV {
	href: string;
	key: string;
	label: string;
	iconURL?: string;
	icon: IconType | string;
}
export const NAV_LINKS: NAV[] = [
	{
		href: "/",
		key: "home",
		label: "Home",
		icon: AiOutlineHome,
	},
	{ href: "/", key: "about", label: "About", icon: CiCircleQuestion },
	{ href: "/", key: "packages", label: "Packages", icon: FaEarthAmericas },
	{ href: "/", key: "contact", label: "Contact", icon: IoIosContact },
];

// CATEGORIES SECTION

export const CATEGORIES = [
	{
		title: "places",
		// icon:ImEarth,
		icon: IoPlanetOutline,
	},
	{
		title: "restaurants",
		icon: BiRestaurant,
	},
	{
		title: "Hotels",
		icon: BiHotel,
	},
	{
		title: "shopping",
		icon: BiShoppingBag,
	},
];

//FEATURE SECTION

export const FEATURE = [
	{
		title: "Australia",
		URL: "/paris.jpg",
		des: "3 places",
	},
	{
		title: "Canada",
		URL: "/Aust.jpg",
		des: "3 places",
	},
	{
		title: "Finland",
		URL: "/london.jpg",
		des: "3 places",
	},
	{
		title: "Ireland",
		URL: "/Germany.jpg",
		des: "3 places",
	},
	{
		title: "Lithuania",
		URL: "/hongkong.jpg",
		des: "3 places",
	},
	{
		title: "Sweden",
		URL: "/hongkong.jpg",
		des: "3 places",
	},
	{
		title: "UK",
		URL: "/london.jpg",
		des: "3 places",
	},
	{
		title: "US",
		URL: "/hongkong.jpg",
		des: "3 places",
	},
];

// About
export const ABOUT = [
	{ title: "Comfortable Journey", icon: IoCheckmarkCircleOutline },
	{ title: "Luxuries Hotel", icon: IoCheckmarkCircleOutline },

	{ title: "Travel Guide", icon: IoCheckmarkCircleOutline },
	{ title: "Popular Destination", icon: IoCheckmarkCircleOutline },
];

export const PACKAGES = [
	{
		title: "Poland",
		price: "$120",
		URL: "/Poland.jpg",
		des: "lorem1024",
		duration: "30 dYA",
	},
	{
		title: "Lithuania",
		price: "$120",
		URL: "/Lithuania.jpg",
		des: "lorem1024",
		duration: "30 dYA",
	},
	{
		title: "Germany",
		price: "$120",
		URL: "/Germany.jpg",
		des: "lorem1024",
		duration: "30 dYA",
	},

	{
		title: "Canada",
		price: "$120",
		URL: "/canada.jpg",
		des: "lorem1024",
		duration: "30 dYA",
	},
	{
		title: "Spain",
		price: "$120",
		URL: "/spain.jpg",
		des: "lorem1024",
		duration: "30 dYA",
	},
];

export const TESTIMONIAL = [
	{
		title: "jared Martinez",
		profession: "Director, Nova Terra",
		URL: "/female.jpg",
		desc: "Fantastic destinations, Knowledge guides, seamless logistics",
	},

	{
		title: "jared Martinez",
		profession: "Director, Nova Terra",
		URL: "/male.jpg",
		desc: "Fantastic destinations, Knowledge guides, seamless logistics",
	},

	{
		title: "jared Martinez",
		profession: "Director, Nova Terra",
		URL: "/female.jpg",
		desc: "Fantastic destinations, Knowledge guides, seamless logistics",
	},

	{
		title: "jared Martinez",
		profession: "Director, Nova Terra",
		URL: "/male.jpg",
		desc: "Fantastic destinations, Knowledge guides, seamless logistics",
	},

	{
		title: "jared Martinez",
		profession: "Director, Nova Terra",
		URL: "/female.jpg",
		desc: "Fantastic destinations, Knowledge guides, seamless logistics",
	},
];

export const FOOTER_LINKS = [
	{
		title: "Learn More",
		links: [
			"about Us",
			"Destinations",
			"Travel Guide",
			"Book Now",
			"Privacy Policy",
		],
	},
	{
		title: "Our Community",
		links: ["terms and conditions", "customer Reviews"],
	},
];

export const SOCIALS_LINKS = {
	// { icon: "twitter", URL: "/" },
	// { icon: "facebook", URL: "/" },
	// { icon: "instagram", URL: "/" },
	// { icon: "linkedin", URL: "/" },
	// { icon: "youtube", URL: "/" },
	title: "Contact Us",
	links: [
		{ label: "Contact Number", value: "123-456-789" },
		{ label: "Email Address", value: "jXO2O@example.com" },
	],
};

export const SOCIALS = {
	title: "Socials",
	links: [
		"/facebook.svg",
		"/instagram.svg",
		"/twitter.svg",
		"/youtube.svg",
		"/linkedIn.svg",
	],
};

export const cardService = [
	{
		id: 1,
		title: "Courses",
		description:
			"Begin your journey in countries with excellent opportunities with our DIY courses. Our courses have helped 2,500+ candidates discover pathways to their dream country and land great opportunities abroad.",
		icon: SiCoursera,
		color: "red",
	},
	{
		id: 2,
		title: "Work Visa Support",
		description:
			"Want to move abroad without a job? There are countries that allow you to move in with a Job Seeker Visa, Digital Nomad Visa, and Passive Income Visa and live there for a period of time. We help you navigate the complex approval process for these new-age visas",
		icon: CgSupport,
		color: "blue", //
	},
	{
		id: 3,
		title: "Job Support Service",
		description:
			"Want to move abroad with a job that aligns with your expectations? We strategize your job search with our global experience and help you build a profile that attracts the attention of your target recruiters abroad.",
		icon: MdSupportAgent,
		color: "green",
	},
];

export const serviceCard = [
	{
		id: 0,
		src: "/education.jpg",
		title: "Education",
		description:
			" In 2023, the education sector in Sweden faced notable labor shortages and it continues to see the same. There are increasing opportunities for educators, especially in primary and special needs education, as the demand for qualified teaching professionals continues to grow.",
	},
	{
		id: 1,
		src: "/salegroup.jpg",
		title: "Sales",
		description:
			"Caudex Clerk | Store Accountant | Store Keeper Electrical | Store Keeper Senior Grade | Store Keeper Junior Grade.",
	},
	{
		id: 2,
		src: "/construction.jpg",
		title: "Construction",
		description:
			"Carpenter Foreman | Mason Foreman | Painter Foreman | Earthwalk Foreman | Pipeline Foreman.",
	},
	{
		id: 3,
		src: "/health.jpg",
		title: "Health care",
		description:
			"Physicians | Dentists | Pharmacists | Pharmacy | Technicians | Nurses | Surgeons | Surgeon's assistant.",
	},
	{
		id: 4,
		src: "/IT.jpg",
		title: "IT",
		description:
			"The IT sector is experiencing a significant shortfall in skilled workers. Software developers and IT architects are in high demand, reflecting the increased reliance on technology and the digital transformation of various industries, offering substantial job opportunities in this field.",
	},
	{
		id: 5,
		src: "/admin.jpg",
		title: "Admin",
		description:
			"Camp Manager | Camp Supervisor | Camp Security Officer | Camp Labour Relations Supervisor | Camp Clerk ",
	},
];
