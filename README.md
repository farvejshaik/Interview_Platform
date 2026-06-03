# TalentForge

A real-time technical interview platform featuring user authentication, interactive code/session orchestration, live video calls, and instant chat. This repository is structured as a monorepo containing both the frontend and backend applications.

## Project Architecture

This project is divided into two primary workspaces:

- **[backend](file:///Users/farvejfaru/Desktop/Backend_Projects/Interview_Platform/backend)**: Node.js/Express server orchestrating MongoDB (via Mongoose), Clerk authentication, Stream (video & chat), and Inngest background event processing.
- **[frontend](file:///Users/farvejfaru/Desktop/Backend_Projects/Interview_Platform/frontend)**: React + Vite application featuring real-time collaborative interfaces and user flows.

```
TalentForge/
├── backend/                  # Node.js/Express server (port 3000)
│   ├── src/                  # Backend source files
│   └── README.md             # Detailed Backend documentation
├── frontend/                 # React + Vite client (port 5173)
│   ├── src/                  # Frontend source files
│   └── README.md             # Detailed Frontend documentation
├── package.json              # Monorepo task configurations
└── vercel.json               # Vercel deployment configuration
```

---

## Tech Stack Overview

### Backend
- **Runtime & Web Framework**: Node.js, Express.js 5.x
- **Database**: MongoDB (Mongoose ODM)
- **Authentication**: Clerk
- **Real-time Video & Chat**: Stream (GetStream.io)
- **Background Job Orchestration**: Inngest

### Frontend
- **Framework & Build Tool**: React, Vite
- **Authentication Components**: Clerk React SDK
- **Styling**: Vanilla CSS

---

## Quick Start & Installation

### Prerequisites

Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v18+)
- [npm](https://www.npmjs.com/)
- A running [MongoDB](https://www.mongodb.com/) instance (or Atlas URI)
- Accounts for [Clerk](https://clerk.com/), [Stream](https://getstream.io/), and [Inngest](https://www.inngest.com/)

### 1. Clone & Install Dependencies

From the root directory, you can install dependencies for both workspaces:

```bash
# Install root dependencies
npm install

# Install backend dependencies
cd backend && npm install

# Install frontend dependencies
cd ../frontend && npm install
```

### 2. Environment Variables Configuration

Create a `.env` file in both `backend` and `frontend` directories:

#### Backend (`backend/.env`)
```env
PORT=3000
NODE_ENV=development
CLIENT_URL=http://localhost:5173

DB_URL=your_mongodb_connection_uri
CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key

STREAM_API_KEY=your_stream_api_key
STREAM_API_SECRET=your_stream_api_secret

# Inngest Dev Server doesn't strictly require these locally, but useful for production
INNGEST_EVENT_KEY=your_inngest_event_key
INNGEST_SIGNING_KEY=your_inngest_signing_key
```

#### Frontend (`frontend/.env`)
```env
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
```

### 3. Run Locally

To run the application locally, start the backend and frontend servers:

#### Start the Backend Server (Express + Inngest Dev Server)
```bash
cd backend
npm run dev
```

#### Start the Inngest Dev Server (for background job testing)
```bash
npx inngest-cli@latest dev -u http://localhost:3000/api/inngest
```

#### Start the Frontend App (Vite Dev Server)
```bash
cd frontend
npm run dev
```

The frontend will run at `http://localhost:5173` and communicate with the backend at `http://localhost:3000`.

---

## Deployment

The project is configured for seamless deployment on platforms like **Vercel** using the root `vercel.json` and monorepo scripts.

### Build and Start Commands

The root `package.json` contains scripts to automate deployment builds:
- **Build**: `npm run build` (Installs all dependencies and builds the React frontend)
- **Start**: `npm run start` (Runs the Express backend server)

Refer to [backend/README.md](file:///Users/farvejfaru/Desktop/Backend_Projects/Interview_Platform/backend/README.md) for detailed descriptions of API endpoints, database schemas, and background job event flows.
