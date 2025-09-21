"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

interface Destination {
  id: string;
  name: string;
  country: string;
}

interface NewItineraryFormProps {
  destinations: Destination[];
}

type TravelStyle =
  | "luxury"
  | "budget"
  | "adventure"
  | "cultural"
  | "relaxation";

export default function NewItineraryForm({
  destinations,
}: NewItineraryFormProps) {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedDestinations, setSelectedDestinations] = useState<
    Destination[]
  >([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading state
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleDestinationChange = (
    destination: Destination,
    checked: boolean
  ) => {
    if (checked) {
      setSelectedDestinations([...selectedDestinations, destination]);
    } else {
      setSelectedDestinations(
        selectedDestinations.filter((d) => d.id !== destination.id)
      );
    }
  };

  const moveDestination = (fromIndex: number, toIndex: number) => {
    const newDestinations = [...selectedDestinations];
    const [movedDestination] = newDestinations.splice(fromIndex, 1);
    newDestinations.splice(toIndex, 0, movedDestination);
    setSelectedDestinations(newDestinations);
  };

  const validateDates = (startDate: string, endDate: string) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (start < today) {
      throw new Error("Start date cannot be in the past");
    }

    if (end < start) {
      throw new Error("End date must be after start date");
    }

    const diffTime = Math.abs(end.getTime() - start.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    if (diffDays > 30) {
      throw new Error("Trip duration cannot exceed 30 days");
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const formData = new FormData(event.currentTarget);
    const startDate = formData.get("startDate") as string;
    const endDate = formData.get("endDate") as string;

    try {
      validateDates(startDate, endDate);

      const response = await fetch("/api/itineraries", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: formData.get("title"),
          description: formData.get("description"),
          startDate,
          endDate,
          budget: formData.get("budget"),
          travelStyle: formData.get("travelStyle"),
          destinations: selectedDestinations.map((d) => d.id),
        }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "Failed to create itinerary");
      }

      router.push("/dashboard");
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          Plan Your Trip
        </h1>

        {error && (
          <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-md">
            <p className="text-sm text-red-600">{error}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Basic Information */}
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">
              Trip Details
            </h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="title"
                  className="block text-sm font-medium text-gray-700"
                >
                  Trip Title
                </label>
                <input
                  type="text"
                  name="title"
                  id="title"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  placeholder="e.g., Summer Vacation in Europe"
                />
              </div>

              <div>
                <label
                  htmlFor="description"
                  className="block text-sm font-medium text-gray-700"
                >
                  Description
                </label>
                <textarea
                  name="description"
                  id="description"
                  rows={3}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  placeholder="Brief description of your trip"
                />
              </div>

              <div>
                <label
                  htmlFor="startDate"
                  className="block text-sm font-medium text-gray-700"
                >
                  Start Date
                </label>
                <input
                  type="date"
                  name="startDate"
                  id="startDate"
                  required
                  min={new Date().toISOString().split("T")[0]}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                />
              </div>

              <div>
                <label
                  htmlFor="endDate"
                  className="block text-sm font-medium text-gray-700"
                >
                  End Date
                </label>
                <input
                  type="date"
                  name="endDate"
                  id="endDate"
                  required
                  min={new Date().toISOString().split("T")[0]}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                />
              </div>

              <div>
                <label
                  htmlFor="budget"
                  className="block text-sm font-medium text-gray-700"
                >
                  Budget (USD)
                </label>
                <input
                  type="number"
                  name="budget"
                  id="budget"
                  min="0"
                  step="100"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  placeholder="Enter your budget"
                />
              </div>

              <div>
                <label
                  htmlFor="travelStyle"
                  className="block text-sm font-medium text-gray-700"
                >
                  Travel Style
                </label>
                <select
                  name="travelStyle"
                  id="travelStyle"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                >
                  <option value="">Select a style</option>
                  <option value="luxury">Luxury</option>
                  <option value="budget">Budget</option>
                  <option value="adventure">Adventure</option>
                  <option value="cultural">Cultural</option>
                  <option value="relaxation">Relaxation</option>
                </select>
              </div>
            </div>
          </div>

          {/* Selected Destinations Preview */}
          {selectedDestinations.length > 0 && (
            <div className="bg-white shadow rounded-lg p-6">
              <h2 className="text-lg font-medium text-gray-900 mb-4">
                Selected Destinations
              </h2>
              <div className="space-y-4">
                {selectedDestinations.map((destination, index) => (
                  <div
                    key={destination.id}
                    className="flex items-center justify-between p-4 border rounded-lg"
                  >
                    <div className="flex-1">
                      <h3 className="text-sm font-medium text-gray-900">
                        {destination.name}
                      </h3>
                      <p className="text-sm text-gray-500">
                        {destination.country}
                      </p>
                    </div>
                    <div className="flex space-x-2">
                      {index > 0 && (
                        <button
                          type="button"
                          onClick={() => moveDestination(index, index - 1)}
                          className="p-2 text-gray-400 hover:text-gray-500"
                        >
                          ↑
                        </button>
                      )}
                      {index < selectedDestinations.length - 1 && (
                        <button
                          type="button"
                          onClick={() => moveDestination(index, index + 1)}
                          className="p-2 text-gray-400 hover:text-gray-500"
                        >
                          ↓
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Destinations List */}
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">
              Available Destinations
            </h2>
            {isLoading ? (
              <div className="flex justify-center items-center py-8">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
              </div>
            ) : (
              <div className="space-y-4">
                {destinations.map((destination) => (
                  <div
                    key={destination.id}
                    className="flex items-center space-x-4 p-4 border rounded-lg"
                  >
                    <input
                      type="checkbox"
                      checked={selectedDestinations.some(
                        (d) => d.id === destination.id
                      )}
                      onChange={(e) =>
                        handleDestinationChange(destination, e.target.checked)
                      }
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <div className="flex-1">
                      <h3 className="text-sm font-medium text-gray-900">
                        {destination.name}
                      </h3>
                      <p className="text-sm text-gray-500">
                        {destination.country}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Submit Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              disabled={isSubmitting || selectedDestinations.length === 0}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Creating..." : "Create Itinerary"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
