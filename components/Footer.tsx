import { FOOTER_LINKS, SOCIALS, SOCIAL_LINKS } from "@/constant";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import link from "next/link";
const Footer = () => {
	return (
		<footer className="flexCenter mb-24 pt-20">
			<article className="padding-container max-container flex w-full flex-col gap-14">
				<div className="flex flex-col items-start justify-center gap-[10%] md:flex-row">
					<Link href="/ className=" mb-10 bold-20>
						LOGO
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
					<div>
						<FooterColumn title={SOCIALS.title}>
							<ul className="flex gap-4">
								{SOCIALS.reference.map((social) => (
									<Link href={"/"} key={social.label}>
										<Image
											src={social.label}
											alt="logo"
											width={24}
											height={24}
										/>
									</Link>
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
		<div className="flex flex-col gap-5">
			<h4 className="bold-18 whitespace-nowrap">{title}</h4>
			{children}
		</div>
	);
};
export default Footer;
