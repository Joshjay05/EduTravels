import { ReactNode } from "react";
import Link from "next/link";
import { Analytics } from "@vercel/analytics/react";

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <Link href="/" className="flex items-center">
                <span className="text-xl font-bold text-blue-600">
                  Travel Made Easy
                </span>
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Link
                href="/explore"
                className="text-gray-600 hover:text-gray-900"
              >
                Explore
              </Link>
              <Link
                href="/itinerary"
                className="text-gray-600 hover:text-gray-900"
              >
                My Trips
              </Link>
              <Link
                href="/auth/login"
                className="text-gray-600 hover:text-gray-900"
              >
                Login
              </Link>
            </div>
          </div>
        </nav>
      </header>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">{children}</main>

      <footer className="bg-white border-t">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500">
            © {new Date().getFullYear()} Travel Made Easy. All rights reserved.
          </p>
        </div>
      </footer>

      <Analytics />
    </div>
  );
}
