# Interview Platform - Backend

A robust Node.js/Express backend for an interview platform that handles user authentication, real-time chat, video calls, and background job processing.

## Overview

This backend serves as the API layer for the Interview Platform, providing endpoints for:

- User management and authentication (via Clerk)
- Real-time chat and video communication (via Stream)
- Background event processing (via Inngest)
- Database operations with MongoDB

## Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js 5.2
- **Database**: MongoDB (with Mongoose ORM)
- **Authentication**: Clerk
- **Real-time Communication**: Stream (chat & video)
- **Background Jobs**: Inngest
- **Package Manager**: npm

## Project Structure

```
backend/
├── src/
│   ├── server.js                 # Express app initialization
│   ├── controllers/
│   │   └── chatController.js     # Chat-related handlers
│   ├── routes/
│   │   └── chatRoutes.js         # Chat route definitions
│   ├── middleware/
│   │   └── protectRoute.js       # Authentication & authorization
│   ├── models/
│   │   └── User.js               # User data model
│   └── lib/
│       ├── db.js                 # MongoDB connection
│       ├── env.js                # Environment variables
│       ├── inngest.js            # Background job functions
│       └── stream.js             # Stream client initialization
├── package.json
└── README.md
```

## Dependencies

### Core

- **express**: Web framework
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

Create a `.env` file in the `backend` directory with the following variables:

```env
# Server
PORT=3000
NODE_ENV=production
CLIENT_URL=http://localhost:5173

# Database
DB_URL=mongodb+srv://username:password@cluster.mongodb.net/database-name

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

1. **Install dependencies**:

   ```bash
   npm install
   ```

2. **Set up environment variables**:
   - Copy `.env.example` to `.env` (if available) or create `.env` manually
   - Fill in all required environment variables

3. **Start the server**:
   - Development (with auto-reload):
     ```bash
     npm run dev
     ```
   - Production:
     ```bash
     npm start
     ```

The server will be accessible at `http://localhost:3000` (or your configured PORT).

## API Endpoints

### Health Check

- **GET** `/api/health`
  - Public endpoint
  - Response: `{ "msg": "Backend Running" }`

### Chat

- **GET** `/api/chat/token`
  - Protected endpoint (requires authentication)
  - Returns Stream chat token for real-time communication
  - Response:
    ```json
    {
      "token": "stream_token_string",
      "userId": "clerk_user_id",
      "userName": "User Name",
      "userImage": "profile_image_url"
    }
    ```

### Inngest Events

- **POST** `/api/inngest`
  - Webhook endpoint for Clerk events
  - Handles automatic user sync and deletion

## Features

### User Management

- **Automatic User Sync**: When a user signs up via Clerk, they're automatically created in MongoDB
- **User Deletion**: When a user is deleted in Clerk, they're removed from both MongoDB and Stream
- **User Model**: Stores name, email, profile image, and Clerk ID

### Authentication & Authorization

- **Clerk Middleware**: Validates Clerk JWT tokens
- **Protected Routes**: Custom middleware verifies users exist in the database
- **Error Handling**: Returns 401 for invalid tokens, 404 for missing users

### Real-time Communication

- **Stream Integration**: Provides secure tokens for chat and video calls
- **User Sync**: Keeps user data in sync between Clerk, MongoDB, and Stream
- **Token Management**: Issues fresh tokens on-demand via `/api/chat/token`

### Background Processing

- **Inngest Functions**:
  - `sync-user`: Creates user in MongoDB when signed up via Clerk
  - `delete-user-from-db`: Removes user from MongoDB and Stream when deleted from Clerk

### Production Features

- **Static File Serving**: Serves frontend build in production mode
- **CORS Support**: Allows requests from configured frontend URL
- **Error Handling**: Comprehensive error logging and responses

## Running the Server

### Development

```bash
npm run dev
```

Starts with `nodemon` for automatic restart on file changes.

### Production

```bash
npm start
```

Runs the server normally.

## Database Models

### User

```javascript
{
  name: String,                  // User's full name
  email: String,                 // Unique email address
  profileImage: String,          // URL to profile image
  clerkId: String,               // Unique Clerk user ID
  createdAt: Date,               // Timestamp
  updatedAt: Date                // Timestamp
}
```

## Error Handling

The API uses standard HTTP status codes:

- **200**: Success
- **401**: Unauthorized (missing/invalid token)
- **404**: Not found (user not in database)
- **500**: Internal server error

All error responses follow this format:

```json
{
  "message": "Error description"
}
```

## Middleware

### Clerk Middleware

- Validates Clerk JWT tokens
- Extracts user information from token

### Protect Route Middleware

- Requires valid Clerk authentication
- Verifies user exists in MongoDB
- Attaches user object to request

## Key Functions

### `connectDB()` (db.js)

Establishes MongoDB connection using Mongoose.

### `getStreamToken()` (chatController.js)

Generates Stream authentication token for the authenticated user.

### `upsertStreamUser()` (stream.js)

Creates or updates user in Stream platform.

### `deleteStreamUser()` (stream.js)

Removes user from Stream platform.

### `syncUser()` (inngest.js)

Inngest function that syncs new Clerk users to MongoDB and Stream.

### `deleteUserFromDB()` (inngest.js)

Inngest function that removes users from MongoDB and Stream when deleted from Clerk.

## Deployment

### Vercel

The project includes a `vercel.json` at the root for Vercel deployment. The backend is designed to work with the frontend in a monorepo structure.

### Prerequisites

- Node.js 16+
- MongoDB Atlas cluster
- Clerk account
- Stream account
- Inngest account

### Deployment Checklist

- [ ] Set all environment variables in deployment platform
- [ ] Verify MongoDB connection string
- [ ] Configure Clerk webhook to point to `/api/inngest`
- [ ] Configure CORS to allow frontend URL
- [ ] Test all endpoints after deployment

## Development Notes

### Adding New Routes

1. Create a new file in `src/routes/`
2. Import and use the router in `server.js`
3. Add corresponding controller in `src/controllers/`

### Adding New Models

1. Create schema in `src/models/`
2. Export the model
3. Use in controllers as needed

### Background Jobs

To add new Inngest functions:

1. Create function in `src/lib/inngest.js`
2. Add to the `functions` export array
3. Functions are automatically registered

## Troubleshooting

### MongoDB Connection Issues

- Verify `DB_URL` is correct
- Check MongoDB Atlas IP whitelist
- Ensure network connectivity

### Clerk Authentication Errors

- Verify `CLERK_SECRET_KEY` is set
- Check Clerk webhook configuration
- Ensure Clerk frontend is properly configured

### Stream Token Errors

- Verify `STREAM_API_KEY` and `STREAM_API_SECRET`
- Check if user exists in both MongoDB and Stream
- Verify user sync happened correctly via Inngest

## Support & Documentation

- [Express.js Documentation](https://expressjs.com/)
- [Mongoose Documentation](https://mongoosejs.com/)
- [Clerk Documentation](https://clerk.com/docs)
- [Stream Chat Documentation](https://getstream.io/chat/)
- [Inngest Documentation](https://www.inngest.com/docs)

## License

ISC
