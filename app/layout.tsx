import "./globals.css";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import Navbar from "@/components/Navbar";
import "slick-carousel/slick/slick.css";
import Footer from "@/components/Footer";
import MouseTracker from "@/components/MouseTracker";
// import PageLoader from "@/components/PageLoader";

export const metadata: Metadata = {
  title: "Everywhere We Go Consult",
  description:
    "Explore the world with us. Your ultimate travel and tour consultancy.",
  icons: {
    icon: "/evlogo.png",
  },
  openGraph: {
    title: "Everywhere We Go Consult",
    description:
      "Explore the world with us. Your ultimate travel and tour consultancy.",
    url: "https://www.everywherewegoconsult.com",
    type: "website",
    images: [
      {
        url: "/evlogo.png",
        width: 800,
        height: 600,
        alt: "Everywhere We Go Consult Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@everywherewego",
    title: "Everywhere We Go Consult",
    description:
      "Explore the world with us. Your ultimate travel and tour consultancy.",
    images: ["/evlogo.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/evlogo.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="travel, tours, destinations, consultancy, holidays, vacation, travel guide"
        />
        <meta name="author" content="Everywhere We Go Consult" />
        {/* <meta property="og:title" content={metadata.openGraph?.title} /> */}
        <meta
          property="og:description"
          content={metadata.openGraph?.description}
        />
        {/* <meta property="og:url" content={metadata.openGraph?.url} /> */}
        {/* <meta property="og:type" content={metadata.openGraph?.type} /> */}
        {/* <meta property="og:image" content={metadata.openGraph?.images?.[0]?.url} /> */}
        {/* <meta property="og:image:width" content={metadata.openGraph?.images?.[0]?.width?.toString()} /> */}
        {/* <meta property="og:image:height" content={metadata.openGraph?.images?.[0]?.height?.toString()} /> */}
        {/* <meta name="twitter:card" content={metadata.twitter?.card} /> */}
        <meta name="twitter:site" content={metadata.twitter?.site} />
        {/* <meta name="twitter:title" content={metadata.twitter?.title} /> */}
        <meta
          name="twitter:description"
          content={metadata.twitter?.description}
        />
        {/* <meta name="twitter:image" content={metadata.twitter?.images?.[0]} /> */}
      </head>
      <body>
        <Analytics />
        <Navbar />
        {/* <PageLoader /> */}
        <MouseTracker />
        <main className="relative overflow-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
