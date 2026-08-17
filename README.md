# HKM App - Social Community Dashboard

A modern full-stack social/community dashboard application built with Next.js, TypeScript, Prisma, and Tailwind CSS.

## Features

- Social Feed - Real-time updates and community interactions
- User Profiles - Customizable profiles with bio and following system
- Analytics Dashboard - Track engagement and community metrics
- Notifications - Real-time notification system using Socket.io
- Authentication - Secure authentication with NextAuth.js
- Responsive Design - Mobile-first, fully responsive UI
- Dark Mode - Built-in dark/light theme support
- Accessibility - WCAG AA compliant components
- Type Safety - Full TypeScript support with Prisma

## Tech Stack

### Frontend
- Next.js 14 - React framework with SSR/SSG
- TypeScript - Type-safe development
- Tailwind CSS - Utility-first CSS
- React Hook Form - Efficient form handling
- TanStack Query - Data fetching & state management
- Zustand - Lightweight state management

### Backend
- Node.js/Express - API server
- NextAuth.js - Authentication
- Prisma ORM - Database management
- PostgreSQL - Relational database
- Socket.io - Real-time communication

## Installation

### Prerequisites
- Node.js 18+
- PostgreSQL 12+
- npm or yarn

### Setup

1. Clone the repository
   git clone https://github.com/jxthakim/davinlayer.git
   cd davinlayer

2. Install dependencies
   npm install

3. Configure environment variables
   cp .env.example .env.local
   Edit .env.local with your configuration

4. Setup database
   npm run prisma:generate
   npm run prisma:migrate

5. Start development server
   npm run dev

Open http://localhost:3000 in your browser

## Project Structure

src/
- app/ - Next.js app directory
- components/ - React components
- lib/ - Utility functions
- types/ - TypeScript type definitions

prisma/
- schema.prisma - Database schema
- migrations/ - Database migrations

## Development

Run Tests
  npm run test

E2E Tests
  npm run test:e2e

Type Checking
  npm run type-check

Linting
  npm run lint

Database
  npm run prisma:studio

## License

MIT License
