# TalentForge - Backend

>  [Live Demo](https://talentforge-chi.vercel.app/)

A robust Node.js/Express backend for TalentForge that handles user authentication, real-time chat, video calls, code execution, and session orchestration.

## Overview

This backend serves as the API layer for TalentForge, providing endpoints for:

- User management and authentication (via Clerk)
- Real-time chat and video communication (via Stream)
- Background event processing (via Inngest)
- Database operations with MongoDB
- Code execution sandbox (JavaScript, Python, Java)

## Tech Stack

- **Runtime**: Node.js (ES Modules)
- **Framework**: Express.js 5.x
- **Database**: MongoDB (with Mongoose ODM 9.x)
- **Authentication**: Clerk (@clerk/express)
- **Real-time Communication**: Stream Video & Chat SDKs
- **Background Jobs**: Inngest
- **Code Execution**: Child process sandbox

## Project Structure

```
backend/
├── src/
│   ├── server.js                 # Express app initialization
│   ├── controllers/
│   │   ├── chatController.js     # Chat token handler
│   │   ├── executeController.js  # Code execution handler
│   │   └── sessionController.js  # Session management
│   ├── routes/
│   │   ├── chatRoutes.js         # Chat route definitions
│   │   ├── executeRoutes.js      # Code execution routes
│   │   └── sessionRoutes.js      # Session route definitions
│   ├── middleware/
│   │   └── protectRoute.js       # Authentication & authorization
│   ├── models/
│   │   ├── User.js               # User data model
│   │   └── Session.js            # Session data model
│   └── lib/
│       ├── db.js                 # MongoDB connection
│       ├── env.js                # Environment validation
│       ├── inngest.js            # Background job functions
│       └── stream.js             # Stream client initialization
├── package.json
└── README.md
```

## Dependencies

### Core
- **express**: Web framework (v5)
- **cors**: Cross-origin resource sharing
- **dotenv**: Environment variable management

### Database
- **mongoose**: MongoDB ODM
- **mongodb**: MongoDB driver

### Authentication & Real-time
- **@clerk/express**: Authentication middleware
- **@stream-io/node-sdk**: Stream SDK for video calls
- **stream-chat**: Stream SDK for chat features
- **inngest**: Background job orchestration

## Environment Variables

Create a `.env` file in the `backend` directory:

```env
# Server
PORT=5000
NODE_ENV=development
CLIENT_URL=http://localhost:5173

# Database
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/database-name

# Clerk Authentication
CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key

# Stream (Chat & Video)
STREAM_API_KEY=your_stream_api_key
STREAM_API_SECRET=your_stream_api_secret

# Inngest
INNGEST_EVENT_KEY=your_inngest_event_key
INNGEST_SIGNING_KEY=your_inngest_signing_key
```

## Installation

```bash
# Install dependencies
npm install

# Development (with auto-reload)
npm run dev

# Production
npm start
```

Server runs at `http://localhost:5000` (or configured PORT).

## API Endpoints

### Health Check
- **GET** `/api/health` - Public endpoint, returns `{ "msg": "Backend Running" }`

### Chat (`/api/chat`)
- **GET** `/token` - Protected, returns Stream chat token

### Code Execution (`/api/execute`)
- **POST** `/` - Execute code (JavaScript, Python, Java)

### Sessions (`/api/sessions`) - All protected
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/` | Create new session |
| GET | `/active` | Get active sessions (limit 20) |
| GET | `/my-recent` | Get user's completed sessions |
| GET | `/:id` | Get session by ID |
| POST | `/:id/join` | Join as participant |
| POST | `/:id/end` | End session (host only) |
| POST | `/:id/request-join` | Request to join |
| GET | `/:id/join-requests` | Get join requests |
| POST | `/:id/accept-join/:userId` | Accept join request |
| POST | `/:id/reject-join/:userId` | Reject join request |

### Inngest Webhook
- **POST** `/api/inngest` - Clerk event webhook

## Features

### User Management
- Automatic user sync from Clerk to MongoDB + Stream
- User deletion cascade (MongoDB + Stream)
- User model: name, email, profileImage, clerkId

### Authentication & Authorization
- Clerk JWT validation via middleware
- `protectRoute` middleware verifies user exists in DB
- 401 for invalid tokens, 404 for missing users

### Real-time Communication
- Stream Video calls with unique callId per session
- Stream Chat channels with host/participant members
- Secure token issuance via `/api/chat/token`

### Code Execution Sandbox
- Isolated temp directories per execution
- Supports: JavaScript (Node), Python 3, Java
- 10-second timeout, 1MB output limit
- Auto cleanup of temp files

### Session Orchestration
- Creates Stream Video call + Chat channel on session creation
- Participant capacity: 1 host + 1 participant
- Join requests with accept/reject flow
- Cleanup on end: delete call, delete channel, mark completed

### Background Processing (Inngest)
- `sync-user`: Creates user in MongoDB/Stream on Clerk signup
- `delete-user-from-db`: Removes user from MongoDB/Stream on Clerk deletion

## Database Models

### User
```javascript
{
  name: String,
  email: String,           // unique
  profileImage: String,
  clerkId: String,         // unique, required
  createdAt: Date,
  updatedAt: Date
}
```

### Session
```javascript
{
  problem: String,                    // Interview problem title
  difficulty: String,                 // "easy" | "medium" | "hard"
  host: Schema.Types.ObjectId,        // ref: User
  participant: Schema.Types.ObjectId, // ref: User (nullable)
  joinRequests: [{
    user: Schema.Types.ObjectId,
    status: "pending" | "accepted" | "rejected"
  }],
  status: String,                     // "active" | "completed"
  callId: String,                     // Stream call/channel ID
  createdAt: Date,
  updatedAt: Date
}
```

## Error Handling

Standard HTTP status codes:
- **200**: Success
- **401**: Unauthorized
- **404**: Not found
- **500**: Internal server error

Error response format:
```json
{ "message": "Error description" }
```

## Middleware

### Clerk Middleware
Validates JWT tokens, extracts user info.

### Protect Route Middleware
- Requires valid Clerk auth
- Verifies user exists in MongoDB
- Attaches user object to request

## Deployment

### Prerequisites
- Node.js 20+
- MongoDB Atlas cluster
- Clerk account
- Stream account
- Inngest account

### Production Build
```bash
npm run build  # From root (installs deps + builds frontend)
npm start      # Runs Express server (serves frontend static files)
```

### Environment Setup
- Set all env vars in deployment platform
- Configure Clerk webhook → `/api/inngest`
- Configure CORS for frontend URL
- Verify MongoDB connection string

## Development Notes

### Adding New Routes
1. Create route file in `src/routes/`
2. Import in `server.js`
3. Add controller in `src/controllers/`

### Adding New Models
1. Create schema in `src/models/`
2. Export model

### Background Jobs
1. Create function in `src/lib/inngest.js`
2. Add to `functions` export array

## Troubleshooting

### MongoDB Connection
- Verify `MONGO_URI`
- Check Atlas IP whitelist

### Clerk Auth Errors
- Verify `CLERK_SECRET_KEY`
- Check webhook → `/api/inngest`

### Stream Token Errors
- Verify Stream API keys
- Check user sync via Inngest

## License

ISC