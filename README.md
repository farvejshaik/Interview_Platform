# TalentForge - Interview Platform

> [Live Demo](https://talentforge-chi.vercel.app/)

TalentForge is a full-stack interview preparation platform that enables real-time collaborative coding sessions with HD video calling, live code editor, and structured learning roadmaps.

## 🚀 Features

### Core Interview Features
- **Real-time Pair Programming** - Create and join 1-on-1 coding sessions
- **HD Video Calling** - Powered by Stream Video SDK with screen sharing
- **Live Code Editor** - Monaco Editor with multi-language support (JavaScript, Python, Java)
- **Real-time Code Execution** - Server-side execution with sandboxed environment
- **Session Management** - Join requests, acceptance/rejection, session ending
- **Chat Integration** - In-session messaging via Stream Chat

### Learning & Preparation
- **Interactive Roadmaps** - Structured learning paths for JavaScript, React, DSA, Frontend, Backend, Fullstack, DevOps
- **Practice Problems** - Curated coding problems with difficulty levels and categories
- **Blog & Resources** - Technical articles and interview guides
- **Performance Analytics** - Session history and progress tracking

### User Experience
- **Modern UI** - Built with Tailwind CSS 4, DaisyUI, and Motion animations
- **Dark/Light Theme** - System-aware with manual toggle
- **Responsive Design** - Mobile-first with adaptive layouts
- **Authentication** - Clerk-based auth with protected routes

## 🏗️ Architecture

```
interview_platform/
├── frontend/          # React 19 + Vite + Tailwind CSS 4
├── backend/           # Express 5 + MongoDB + Stream SDK
└── package.json       # Root workspace scripts
```

### Tech Stack

**Frontend:**
- React 19, React Router 7, Vite 8
- Tailwind CSS 4 + DaisyUI 5
- Stream Video React SDK + Stream Chat React
- Monaco Editor (@monaco-editor/react)
- TanStack Query for server state
- Motion (Framer Motion) for animations
- Clerk React for authentication

**Backend:**
- Express 5 (ES Modules)
- MongoDB + Mongoose 9
- Stream Video/Chat Node SDK
- Inngest for background jobs
- Clerk Express middleware
- Child process for code execution (Node, Python, Java)

## 📦 Quick Start

### Prerequisites
- Node.js 20+
- MongoDB URI
- Clerk account (for auth)
- Stream account (for video/chat)

### Installation

```bash
# Clone repository
git clone <repository-url>
cd Interview_Platform

# Install all dependencies (root, backend, frontend)
npm run build

# Or install separately:
cd backend && npm install
cd ../frontend && npm install
```

### Environment Variables

**Backend (`backend/.env`):**
```env
PORT=5000
NODE_ENV=development
MONGO_URI=your_mongodb_uri
CLIENT_URL=http://localhost:5173

# Clerk
CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...

# Stream
STREAM_API_KEY=...
STREAM_API_SECRET=...
```

**Frontend (`frontend/.env`):**
```env
VITE_CLERK_PUBLISHABLE_KEY=pk_test_...
VITE_STREAM_API_KEY=...
VITE_API_URL=http://localhost:5000/api
```

### Development

```bash
# Terminal 1 - Backend
cd backend && npm run dev

# Terminal 2 - Frontend
cd frontend && npm run dev
```

### Production Build

```bash
# Builds frontend and installs backend deps
npm run build

# Start production server (serves frontend from backend)
npm start
```

## 📚 Project Structure

### Backend
```
backend/
├── src/
│   ├── controllers/     # Route handlers
│   │   ├── sessionController.js
│   │   ├── executeController.js
│   │   └── chatController.js
│   ├── models/          # Mongoose models
│   │   ├── Session.js
│   │   └── User.js
│   ├── routes/          # Express routes
│   │   ├── sessionRoutes.js
│   │   ├── executeRoutes.js
│   │   └── chatRoutes.js
│   ├── middleware/      # Auth middleware
│   │   └── protectRoute.js
│   ├── lib/             # Utilities & config
│   │   ├── stream.js
│   │   ├── db.js
│   │   ├── env.js
│   │   └── inngest.js
│   └── server.js        # Entry point
```

### Frontend
```
frontend/
├── src/
│   ├── components/
│   │   ├── ui/          # Reusable UI components
│   │   └── ui/roadmap/  # Roadmap-specific components
│   ├── pages/           # Page components
│   ├── hooks/           # Custom React hooks
│   ├── api/             # API clients
│   ├── lib/             # Utilities
│   ├── data/            # Static data (problems, roadmaps, blogs)
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css        # Tailwind + custom styles
```

## 🔌 API Endpoints

### Sessions (`/api/sessions`)
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/` | Create new session |
| GET | `/active` | Get active sessions |
| GET | `/my-recent` | Get user's completed sessions |
| GET | `/:id` | Get session by ID |
| POST | `/:id/join` | Join as participant |
| POST | `/:id/end` | End session (host only) |
| POST | `/:id/request-join` | Request to join |
| GET | `/:id/join-requests` | Get join requests |
| POST | `/:id/accept-join/:userId` | Accept join request |
| POST | `/:id/reject-join/:userId` | Reject join request |

### Code Execution (`/api/execute`)
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/` | Execute code (JS, Python, Java) |

### Chat (`/api/chat`)
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/token` | Get Stream Chat token |

## 🎯 Key Features Explained

### Session Flow
1. **Host creates session** → Backend creates MongoDB doc + Stream Video call + Chat channel
2. **Participant joins** → Direct join or request-join flow
3. **Real-time collaboration** → Video + Code Editor + Chat sync
4. **Host ends session** → Cleans up Stream resources, marks session completed

### Code Execution
- Sandboxed execution in temp directories
- Supports JavaScript (Node.js), Python 3, Java
- 10-second timeout, 1MB output limit
- Automatic cleanup of temp files

### Mobile Responsiveness
- **Session Page**: Tab-based layout (Description / Code / Video) on mobile
- **Video Call**: Stacked layout (50/50 split) with screen share on top
- **Landing Page**: Responsive bento grid with optimized images

## 🔐 Authentication

Clerk handles all authentication:
- Sign up / Sign in pages
- User profile management
- JWT tokens for API protection
- `protectRoute` middleware validates `req.auth.userId`

## 📝 License

ISC License

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## 📞 Support

For issues and feature requests, please open a GitHub issue.