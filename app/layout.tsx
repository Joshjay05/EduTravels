import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import "slick-carousel/slick/slick.css";
import Footer from "@/components/Footer";
export const metadata: Metadata = {
	title: "Everywhere we go consult",
	description: "Tour and Travel App",
	// icon: "/logo.jpg",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<link rel="icon" href="/logo.jpg" />
			<body>
				<Navbar />
				<main className="relative overflow-hidden">{children}</main>
				<Footer />
			</body>
		</html>
	);
}
