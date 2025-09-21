# Travel Made Easy

A full-featured travel platform with both web and mobile applications, built with modern technologies and best practices.

## Features

- Explore countries, hotels, restaurants, and shopping locations
- Search and filter destinations and businesses
- Plan trip itineraries (scheduling places, flights, hotels)
- Manage travel to-do lists and expenses
- Browse shopping categories with e-commerce links
- User accounts with saved itineraries and favorites
- Flight/transport search and tracking
- Currency converter
- Location-based recommendations (GPS)
- Reviews and ratings system with wishlists

## Tech Stack

### Frontend (Web)

- Next.js 14 with TypeScript
- React 18
- Tailwind CSS for styling
- Material-UI components
- Framer Motion for animations

### Frontend (Mobile)

- React Native (coming soon)
- Expo (planned)

### Backend

- Node.js with Express
- PostgreSQL database
- Redis for caching
- AWS services (planned)

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── (auth)/            # Authentication routes
│   ├── (dashboard)/       # Dashboard routes
│   ├── (explore)/         # Explore features
│   └── api/               # API routes
├── components/            # Reusable components
│   ├── common/           # Shared components
│   ├── features/         # Feature-specific components
│   └── layout/           # Layout components
├── lib/                  # Utility functions and shared logic
├── styles/              # Global styles
├── types/               # TypeScript type definitions
└── public/              # Static assets
```

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables:
   ```bash
   cp .env.example .env.local
   ```
4. Run the development server:
   ```bash
   npm run dev
   ```

## Development Phases

### Phase 1: MVP

- Basic exploration and search functionality
- Simple itinerary builder
- User authentication
- Geolocation features
- Core backend setup

### Phase 2: Expanded Features

- Flight search integration
- Currency converter
- Shopping/e-commerce features
- Trip management tools
- Reviews and ratings system

### Phase 3: Performance & Scaling

- Performance optimization
- Advanced search and recommendations
- Infrastructure scaling
- Analytics integration
- Mobile app deployment

## Contributing

Please read our [Contributing Guide](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

# EduTravels
