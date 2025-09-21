"use client";
import { useState } from "react";
import { motion } from "framer-motion";

interface Destination {
  id: number;
  name: string;
  country: string;
  image: string;
  description: string;
}

const destinations: Destination[] = [
  {
    id: 1,
    name: "Paris",
    country: "France",
    image: "/images/paris.jpg",
    description:
      "The City of Light, known for its iconic Eiffel Tower and world-class cuisine.",
  },
  {
    id: 2,
    name: "Tokyo",
    country: "Japan",
    image: "/images/tokyo.jpg",
    description:
      "A vibrant metropolis where traditional culture meets cutting-edge technology.",
  },
  {
    id: 3,
    name: "New York",
    country: "USA",
    image: "/images/new-york.jpg",
    description:
      "The city that never sleeps, home to Times Square and Central Park.",
  },
  // Add more destinations as needed
];

export default function ExplorePage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredDestinations = destinations.filter(
    (destination) =>
      destination.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      destination.country.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Search Section */}
      <div className="max-w-xl mx-auto mb-12">
        <div className="relative">
          <input
            type="text"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Search destinations..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-3">
            <svg
              className="h-5 w-5 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Destinations Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredDestinations.map((destination) => (
          <motion.div
            key={destination.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <div className="relative h-48">
              <img
                src={destination.image}
                alt={destination.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900">
                {destination.name}
              </h3>
              <p className="text-sm text-gray-500">{destination.country}</p>
              <p className="mt-2 text-gray-600">{destination.description}</p>
              <button className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors">
                Explore
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
