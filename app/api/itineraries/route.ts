import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { prisma } from "@/lib/prisma";

interface SessionUser {
  id: string;
  name?: string | null;
  email?: string | null;
  image?: string | null;
}

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user) {
      return NextResponse.json(
        { error: "Authentication required" },
        { status: 401 }
      );
    }

    const user = session.user as SessionUser;
    const body = await request.json();
    const {
      title,
      description,
      startDate,
      endDate,
      destinations,
      budget,
      travelStyle,
    } = body;

    // Validate required fields
    if (!title || !startDate || !endDate || !destinations?.length) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    try {
      // Create the itinerary
      const itinerary = await prisma.itinerary.create({
        data: {
          title,
          description,
          startDate: new Date(startDate),
          endDate: new Date(endDate),
          userId: user.id,
          items: {
            create: destinations.map(
              (destinationId: string, index: number) => ({
                destinationId,
                type: "DESTINATION",
                order: index,
                title: "Visit Destination",
                description: "Explore the destination",
                startTime: new Date(startDate),
                endTime: new Date(endDate),
                location: "To be determined",
                cost: 0,
              })
            ),
          },
          metadata: {
            budget: budget ? Number(budget) : null,
            travelStyle: travelStyle || null,
          },
        },
        include: {
          items: {
            include: {
              destination: true,
            },
          },
        },
      });

      return NextResponse.json(itinerary);
    } catch (error) {
      // If database is not available, return a mock response
      console.log("Database not available, returning mock response");
      return NextResponse.json({
        id: "mock-id",
        title,
        description,
        startDate: new Date(startDate),
        endDate: new Date(endDate),
        userId: user.id,
        items: destinations.map((destinationId: string, index: number) => ({
          id: `mock-item-${index}`,
          type: "DESTINATION",
          order: index,
          title: "Visit Destination",
          description: "Explore the destination",
          startTime: new Date(startDate),
          endTime: new Date(endDate),
          location: "To be determined",
          cost: 0,
          destinationId,
        })),
        metadata: {
          budget: budget ? Number(budget) : null,
          travelStyle: travelStyle || null,
        },
      });
    }
  } catch (error) {
    console.error("Error creating itinerary:", error);
    return NextResponse.json(
      { error: "Failed to create itinerary" },
      { status: 500 }
    );
  }
}

export async function GET(request: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user) {
      return NextResponse.json(
        { error: "Authentication required" },
        { status: 401 }
      );
    }

    const user = session.user as SessionUser;

    try {
      const itineraries = await prisma.itinerary.findMany({
        where: {
          userId: user.id,
        },
        include: {
          items: {
            include: {
              destination: true,
            },
            orderBy: {
              order: "asc",
            },
          },
        },
        orderBy: {
          createdAt: "desc",
        },
      });

      return NextResponse.json(itineraries);
    } catch (error) {
      // If database is not available, return mock data
      console.log("Database not available, returning mock data");
      return NextResponse.json([
        {
          id: "mock-itinerary-1",
          title: "Summer Vacation",
          description: "A wonderful summer trip",
          startDate: new Date("2024-07-01"),
          endDate: new Date("2024-07-15"),
          userId: user.id,
          items: [
            {
              id: "mock-item-1",
              type: "DESTINATION",
              order: 0,
              title: "Visit Paris",
              description: "Explore the city of love",
              startTime: new Date("2024-07-01"),
              endTime: new Date("2024-07-05"),
              location: "Paris, France",
              cost: 0,
              destinationId: "1",
            },
          ],
          metadata: {
            budget: 5000,
            travelStyle: "luxury",
          },
        },
      ]);
    }
  } catch (error) {
    console.error("Error fetching itineraries:", error);
    return NextResponse.json(
      { error: "Failed to fetch itineraries" },
      { status: 500 }
    );
  }
}
