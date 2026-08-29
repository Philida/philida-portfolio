import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: 1,
    title: "Eventful API",
    slug: "eventful-api",
    description:
      "Backend event management platform with authentication, ticketing, QR-code validation, notifications, analytics and Swagger documentation.",
    stack: [
      "NestJS",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "JWT",
      "Swagger",
    ],

    github: "https://github.com/Philida/eventful-api",
    live: "https://eventful-api-93g8.onrender.com",
    featured: true,

     overview:
    "Eventful API is a comprehensive event management backend platform built with NestJS, Prisma, PostgreSQL, and JWT authentication. The platform supports event creation, ticket purchasing, QR-code validation, analytics, reviews, favorites, notifications, and role-based access control.",

  features: [
    "User Registration & Authentication",
    "JWT & Refresh Token Authentication",
    "Role-Based Access Control",
    "Event Management",
    "Ticket Purchasing",
    "QR Code Generation",
    "Ticket Validation",
    "Duplicate Scan Prevention",
    "Reviews & Favorites",
    "Notifications",
    "Analytics",
  ],
  architecture: [
  "Modular NestJS architecture",
  "Controllers for route handling",
  "Services for business logic",
  "DTOs for request validation",
  "Guards for route protection",
  "Prisma ORM for database access",
],

authentication: [
  "JWT Authentication",
  "Refresh Token Support",
  "Role-Based Access Control",
],

databaseModels: [
  "User",
  "Event",
  "Ticket",
  "Review",
  "Favorite",
  "Notification",
],
  },

  {
  id: 2,
  title: "Restaurant ChatBot",
  slug: "restaurant-chatbot",
  description:
    "Full-stack restaurant ordering chatbot with menu browsing, cart management, checkout flow, session persistence, and a mock payment system.",
  stack: [
    "Node.js",
    "Express.js",
    "MongoDB",
    "Mongoose",
    "HTML",
    "CSS",
    "JavaScript",
  ],
  github: "https://github.com/Philida/restaurant-chatbot",
  live: "https://restaurant-chatbot-coks.onrender.com",
  featured: true,

  overview:
    "Restaurant ChatBot is a full-stack conversational food ordering application built with Node.js, Express.js, MongoDB Atlas, and vanilla JavaScript. It allows users to interact with a chatbot-style interface to browse menu options, place food orders, manage cart items, checkout, and simulate payments. The project also includes persistent user sessions and MongoDB-backed order/session storage.",

  features: [
    "Place food orders through a chatbot interface",
    "View current cart/order items",
    "Remove items from the cart",
    "Checkout workflow",
    "Mock payment confirmation flow",
    "Order history tracking",
    "MongoDB session persistence",
    "Quantity selection for menu items",
    "Chat-style conversational ordering experience",
    "Persistent user sessions",
  ],

  architecture: [
    "Express server for request handling",
    "Route-based backend structure",
    "MongoDB Atlas for persistent storage",
    "Mongoose models for data access",
    "Chatbot conversation flow for ordering logic",
    "Session-based state management",
    "Frontend built with HTML, CSS, and vanilla JavaScript",
    "Payment flow designed for future gateway integration",
  ],

  authentication: [
    "No authentication system implemented",
    "Session persistence used to maintain user order state",
    "Future-ready structure for adding authentication",
  ],

  databaseModels: [
    "Order",
    "Session",
    "Cart",
    "Menu Item",
    "Payment",
  ],
},

  {
  id: 3,
  title: "Guessing Game",
  slug: "guessing-game",
  description:
    "Real-time multiplayer guessing game using Socket.IO with live scoring, round management, and session-based gameplay.",
  stack: [
    "React",
    "JavaScript",
    "Node.js",
    "Express.js",
    "Socket.IO",
    "CSS",
  ],
  github: "https://github.com/Philida/guessing-game",
  live: "https://guessing-game-iota-fawn.vercel.app",
  featured: true,

  overview:
    "Guessing Game is a real-time multiplayer web application where players join a shared session and compete to guess the correct answer before time runs out. The game uses Socket.IO for live communication between the frontend and backend, allowing players to receive instant updates for guesses, scores, round state, timers, and winner announcements. One player acts as the Game Master, creates questions, and controls the round flow while the system manages attempts, scoring, and session lifecycle.",

  features: [
    "Create and join multiplayer game sessions",
    "Multiple players can join the same room",
    "Live player updates during gameplay",
    "Automatic session cleanup when players leave",
    "Game Master system for question creation and round control",
    "Role rotation after each round",
    "Custom questions and answers",
    "Three attempts per player",
    "60-second countdown timer",
    "Real-time guessing updates",
    "Automatic winner detection",
    "Live score tracking",
    "Persistent scores during the active session",
    "Game activity log and round status updates",
  ],

  architecture: [
    "React frontend for multiplayer game interface",
    "Node.js + Express backend for session and game logic",
    "Socket.IO for real-time bidirectional communication",
    "Room-based multiplayer session management",
    "Game state handled on the server for fairness and synchronization",
    "Round lifecycle management for question, timer, guesses, and winner detection",
  ],

  authentication: [
    "No authentication system implemented",
    "Players join sessions directly without login",
    "Future-ready structure for adding authentication later",
  ],

  databaseModels: [],

databaseNotes: [
  "No database integration yet",
  "Scores and session state stored in memory during gameplay",
  "Persistent leaderboard planned as a future improvement",
],
},

  {
  id: 4,
  title: "Birthday App",
  slug: "birthday-app",
  description:
    "Full-stack birthday reminder platform with user record management, countdown tracking, and automated email notifications.",
  stack: [
    "React",
    "Vite",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Mongoose",
    "Nodemailer",
  ],
  github: "https://github.com/Philida/birthday-app",
  live: "https://birthday-app-da8m.onrender.com",
  featured: true,

  overview:
    "Birthday App is a full-stack birthday reminder application built with React, Node.js, Express, MongoDB Atlas, and Nodemailer. It allows users to create, edit, search, and delete birthday records while also displaying birthday countdowns and sending automated email reminders. The application combines a user-friendly frontend with a backend API, persistent MongoDB storage, and email notification functionality for birthday tracking and reminders.",

  features: [
    "Add birthday records",
    "View all saved users",
    "Search users by name",
    "Edit existing birthday records",
    "Delete birthday records",
    "Birthday countdown display",
    "Automated birthday email notifications",
    "MongoDB Atlas cloud data storage",
    "Responsive mobile-friendly design",
    "REST API endpoints for user management",
  ],

  architecture: [
    "React frontend for birthday record management UI",
    "Vite for frontend development and build tooling",
    "Node.js + Express backend for API endpoints",
    "RESTful CRUD architecture for birthday records",
    "MongoDB Atlas for persistent cloud storage",
    "Mongoose models for database operations",
    "Nodemailer service for automated email notifications",
  ],

  authentication: [
    "No authentication system implemented yet",
    "Birthday records are managed without user login",
    "Future-ready structure for adding JWT authentication and user accounts",
  ],

  databaseModels: [
    "User",
    "Birthday Record",
    "Notification",
  ],
},
];