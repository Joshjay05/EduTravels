import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import NewItineraryForm from "./new-itinerary-form";

// Mock data for development
const mockDestinations = [
  {
    id: "1",
    name: "Paris",
    country: "France",
  },
  {
    id: "2",
    name: "Tokyo",
    country: "Japan",
  },
  {
    id: "3",
    name: "New York",
    country: "USA",
  },
  {
    id: "4",
    name: "Rome",
    country: "Italy",
  },
  {
    id: "5",
    name: "Sydney",
    country: "Australia",
  },
  {
    id: "6",
    name: "Barcelona",
    country: "Spain",
  },
];

export default async function NewItineraryPage() {
  const session = await getServerSession(authOptions);

  if (!session?.user) {
    redirect("/auth/login");
  }

  let destinations;
  try {
    destinations = await prisma.destination.findMany({
      orderBy: {
        name: "asc",
      },
    });
  } catch (error) {
    // If database is not available, use mock data
    console.log("Using mock data for destinations");
    destinations = mockDestinations;
  }

  return <NewItineraryForm destinations={destinations} />;
}
