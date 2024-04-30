"use client";
import { NAV_LINKS } from "@/constant";
import Link from "next/link";
import Image from "next/image";
import Button from "./Button";
import { useState } from "react";
import { CgLogIn } from "react-icons/cg";
const Navbar = () => {
	const [showMenu, setShowMenu] = useState(false);
	const toggleMenu = () => {
		setShowMenu(!showMenu);
	};
	return (
		<nav className="flexBetween max-container px-12 z-30 py-2 shadow-xl rounded-full ring-1 ring-slate-100 fixed w-[95%] left-[50%] top-1 translate-x-[-50%]">
			<Link href={"/"} className="bold-20">
				<span>LOGO</span>
			</Link>
			{/* desktop */}

			<ul className="hidden lg:flex h-full">
				{NAV_LINKS.map((link) => (
					<Link
						href={link.href}
						key={link.key}
						className="flex items-center mx-8 relative gap-2 text-gray-50 group">
						<span>
							<link.icon />
						</span>
						{link?.label}
						<span className="inline-block absolute h-[2px] w-0 bg-black -bottom-2 transition-all duration-500  group-hover:w-full"></span>
					</Link>
				))}
			</ul>
			<div className="hidden lg:block">
				<Button
					type="button"
					variant="btn_dark_rounded"
					title="Login"
					icon={CgLogIn}
				/>
			</div>
			{/* mobile */}
			{!showMenu ? (
				<Image
					src="menubar.svg"
					alt="menuicon"
					width={20}
					height={20}
					className="lg:hidden inline-block  cursor-pointer"
					onClick={toggleMenu}
				/>
			) : (
				<Image
					src="menubar.svg"
					alt="menuicon"
					width={20}
					height={20}
					className="lg:hidden inline-block  cursor-pointer"
					onClick={toggleMenu}
				/>
			)}

			<ul
				className={
					showMenu
						? "flex flex-col justify-center p-12 fixed top-14 right-0 bg-slate-100 rounded-lg transition-all duration-500 shadow-md"
						: "hidden  flex-col justify-center p-12 fixed top-14 right-[100%] bg-slate-100 rounded-lg transition-all duration-500 shadow-md"
				}>
				{NAV_LINKS.map((link) => (
					<Link
						href={link.href}
						key={link.key}
						className="flex items-center gap-1 m-6 relative text-gray-50 group">
						<span>
							<link.icon />
						</span>
						{link?.label}
						<span className="inline-block absolute h-[2px] w-0 bg-black -bottom-2 transition-all duration-500  group-hover:w-full"></span>
					</Link>
				))}
			</ul>
		</nav>
	);
};

export default Navbar;
