// User Types
export interface User {
  id: string;
  email: string;
  name: string;
  image?: string;
  createdAt: Date;
  updatedAt: Date;
}

// Destination Types
export interface Destination {
  id: string;
  name: string;
  country: string;
  city: string;
  description: string;
  image: string;
  rating: number;
  reviews: Review[];
  coordinates: {
    latitude: number;
    longitude: number;
  };
}

// Review Types
export interface Review {
  id: string;
  userId: string;
  destinationId: string;
  rating: number;
  comment: string;
  createdAt: Date;
  user: User;
}

// Itinerary Types
export interface Itinerary {
  id: string;
  userId: string;
  title: string;
  description: string;
  startDate: Date;
  endDate: Date;
  items: ItineraryItem[];
  createdAt: Date;
  updatedAt: Date;
}

export interface ItineraryItem {
  id: string;
  itineraryId: string;
  type: "flight" | "hotel" | "activity" | "restaurant";
  title: string;
  description: string;
  startTime: Date;
  endTime: Date;
  location: string;
  cost: number;
  bookingReference?: string;
}

// Hotel Types
export interface Hotel {
  id: string;
  name: string;
  description: string;
  address: string;
  city: string;
  country: string;
  rating: number;
  priceRange: string;
  amenities: string[];
  images: string[];
  coordinates: {
    latitude: number;
    longitude: number;
  };
}

// Flight Types
export interface Flight {
  id: string;
  airline: string;
  flightNumber: string;
  departureAirport: string;
  arrivalAirport: string;
  departureTime: Date;
  arrivalTime: Date;
  price: number;
  currency: string;
  availableSeats: number;
}

// API Response Types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

// Authentication Types
export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterCredentials extends LoginCredentials {
  name: string;
  confirmPassword: string;
}

// Search Types
export interface SearchFilters {
  destination?: string;
  startDate?: Date;
  endDate?: Date;
  priceRange?: {
    min: number;
    max: number;
  };
  rating?: number;
  amenities?: string[];
}
