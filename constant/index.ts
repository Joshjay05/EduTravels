// Navigation
import { IconType } from "react-icons";
import { BiHotel, BiRestaurant, BiShoppingBag } from "react-icons/bi";
import { FaEarthAfrica } from "react-icons/fa6";
import { FcAbout, FcContacts, FcPackage } from "react-icons/fc";
import { HiHome } from "react-icons/hi";
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
		icon: HiHome,
	},
	{ href: "/", key: "about", label: "About", icon: FcAbout },
	{ href: "/", key: "packages", label: "Packages", icon: FcPackage },
	{ href: "/", key: "contact", label: "Contact", icon: FcContacts },
];

// CATEGORIES SECTION

export const CATEGORIES = [
	{
		title: "places",
		icon: "faEarthAfrica",
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
