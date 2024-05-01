// Navigation
import { IconType } from "react-icons";
import { AiOutlineHome } from "react-icons/ai";
import { BiHotel, BiRestaurant, BiShoppingBag } from "react-icons/bi";
import { BsMarkerTip } from "react-icons/bs";
import { CiCircleQuestion } from "react-icons/ci";
import { FaEarthAmericas } from "react-icons/fa6";
import { FcAbout, FcContacts, FcPackage } from "react-icons/fc";
import { HiHome } from "react-icons/hi";
import { IoIosContact } from "react-icons/io";
import { IoCheckmarkCircleOutline, IoPlanetOutline } from "react-icons/io5";
import { LuContact } from "react-icons/lu";
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
		title: "paris",
		URL: "/paris.jpg",
		des: "3 places",
	},
	{
		title: "Australia",
		URL: "/Aust.jpg",
		des: "3 places",
	},
	{
		title: "london",
		URL: "/london.jpg",
		des: "3 places",
	},
	{
		title: "Germany",
		URL: "/Germany.jpg",
		des: "3 places",
	},
	{
		title: "hong-kong",
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
