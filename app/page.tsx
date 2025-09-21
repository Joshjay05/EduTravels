import About from "@/components/About";
import AnimatedHero from "@/components/AnimatedHero";
import Banner from "@/components/Banner";
import EnquiryForm from "@/components/EnquiryForm";
import Feature from "@/components/Feature";
import Hero from "@/components/Hero";
import MouseTracker from "@/components/MouseTracker";
import Packages from "@/components/Packages";
import PageLoader from "@/components/PageLoader";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <AnimatedHero />

      {/* Features Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">
              Features
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Everything you need for your next adventure
            </p>
          </div>

          <div className="mt-10">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              {features.map((feature) => (
                <div key={feature.name} className="relative">
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                    {feature.icon}
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                    {feature.name}
                  </p>
                  <p className="mt-2 ml-16 text-base text-gray-500">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to start your journey?
            </h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/auth/register"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-8"
              >
                Sign Up Now
              </Link>
              <Link
                href="/auth/login"
                className="inline-flex items-center justify-center px-6 py-3 border border-blue-600 text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 md:py-4 md:text-lg md:px-8"
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

const features = [
  {
    name: "Explore Destinations",
    description:
      "Discover amazing places around the world with detailed information and reviews.",
    icon: "🌍",
  },
  {
    name: "Plan Your Trip",
    description:
      "Create detailed itineraries with our easy-to-use trip planner.",
    icon: "📅",
  },
  {
    name: "Book Accommodations",
    description: "Find and book the perfect place to stay for your journey.",
    icon: "🏨",
  },
  {
    name: "Track Expenses",
    description: "Keep track of your travel budget and expenses in one place.",
    icon: "💰",
  },
];
