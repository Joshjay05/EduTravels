import { FOOTER_LINKS, SOCIALS, SOCIALS_LINKS } from "@/constant";
import {
	FaFacebookSquare,
	FaInstagram,
	FaTwitter,
	FaYoutube,
	FaLinkedin,
} from "react-icons/fa";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import link from "next/link";
// import link from "next/link";
const Footer = () => {
	return (
		<footer id="footer" className="flexCenter mb-24 pt-20">
			<article className="padding-container max-container flex w-full flex-col gap-14">
				<div className="flex flex-col items-start justify-center gap-[10%] md:flex-row">
					{/* <Link href="/ className=" mb-10 bold-20>
						<Image src="/logo.jpg" alt="logo" width={50} height={50} />
					</Link> */}
					<Link href={"/"} className="mb-10 bold-20 rounded-full">
						<Image src="/loo.jpg" alt="logo" width={150} height={150} />
					</Link>
					<div className="flex flex-wrap gap-8 sm:justify-between md:flex-1">
						{FOOTER_LINKS.map((col) => (
							<FooterColumn title={col.title} key={col.title}>
								<ul className="flex flex-col gap-4 regular-14 text-gray-20">
									{col.links.map((link) => (
										<Link href={"/"} key={link}>
											{link}
										</Link>
									))}
								</ul>
							</FooterColumn>
						))}
					</div>

					<div className="">
						<FooterColumn title={SOCIALS_LINKS.title}>
							{SOCIALS_LINKS.links.map((link) => (
								<Link
									href="/"
									key={link.label}
									className="flex gap-4 md:flex-col lg:flex-row">
									<p>{link.label}:</p>
									<p className="medium-14">{link.value}</p>
								</Link>
							))}
						</FooterColumn>
					</div>
					<div className="flex">
						<FooterColumn title={SOCIALS.title}>
							<ul className="flex gap-4">
								{SOCIALS.links.map((link, id) => (
									<li key={link.id}>
										<Link href={link.href} passHref>
											<link.icon className="text-2xl" />
										</Link>
									</li>
								))}
							</ul>
						</FooterColumn>
					</div>
				</div>
			</article>
		</footer>
	);
};

type FooterColumnProps = {
	title: string;
	children: React.ReactNode;
};
const FooterColumn = ({ title, children }: FooterColumnProps) => {
	return (
		<div className="flex flex-col gap-5 my-6">
			<h4 className="bold-18 whitespace-nowrap">{title}</h4>
			{children}
		</div>
	);
};
export default Footer;
