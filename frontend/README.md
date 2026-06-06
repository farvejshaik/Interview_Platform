# TalentForge - Frontend

>  [Live Demo](https://talentforge-chi.vercel.app/)

A modern React application for TalentForge - the interview preparation platform with real-time collaborative coding, HD video calls, and structured learning roadmaps.

## Overview

This frontend provides a seamless interview preparation experience with:

- **Real-time Collaborative Sessions** - Join/create coding sessions with video + editor
- **HD Video Calling** - Stream Video SDK integration with screen sharing
- **Live Code Editor** - Monaco Editor with multi-language support
- **Interactive Learning Roadmaps** - Visual skill trees for various domains
- **Practice Problems** - Curated coding challenges with filters
- **Blog & Resources** - Technical articles and guides

## Tech Stack

- **Framework**: React 19 + Vite 8
- **Routing**: React Router 7
- **Styling**: Tailwind CSS 4 + DaisyUI 5
- **State Management**: TanStack Query (React Query) v5
- **Authentication**: Clerk React SDK v5
- **Real-time**: Stream Video React SDK + Stream Chat React
- **Editor**: Monaco Editor (@monaco-editor/react)
- **Animations**: Motion (Framer Motion) v12
- **Code Execution**: Piston API client
- **Syntax Highlighting**: Highlight.js + React Syntax Highlighter
- **UI Components**: Radix UI primitives, Lucide React icons
- **Date Handling**: date-fns

## Project Structure

```
frontend/
├── public/
│   ├── logo.png
│   └── demo-pic.png
├── src/
│   ├── components/
│   │   ├── ui/                    # Reusable UI components
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── VideoCallUI.jsx
│   │   │   ├── CodeEditorPanel.jsx
│   │   │   ├── OutputPanel.jsx
│   │   │   ├── CreateSessionModal.jsx
│   │   │   ├── WelcomeSection.jsx
│   │   │   ├── StatsCard.jsx
│   │   │   ├── ActiveSessions.jsx
│   │   │   ├── RecentSessions.jsx
│   │   │   ├── HeroSection.jsx
│   │   │   ├── BentoGrid.jsx / CyberneticBentoGrid.jsx
│   │   │   ├── Testimonials.jsx
│   │   │   ├── CompaniesMarquee.jsx
│   │   │   └── ...
│   │   └── ui/roadmap/           # Roadmap-specific components
│   │       ├── RoadmapTree.jsx
│   │       ├── RoadmapNode.jsx
│   │       ├── RoadmapModal.jsx
│   │       ├── RoadmapHeader.jsx
│   │       ├── LearningPath.jsx
│   │       └── ResourcesSection.jsx
│   ├── pages/                    # Page components
│   │   ├── HomePage.jsx
│   │   ├── DashboardPage.jsx
│   │   ├── SessionPage.jsx       # Main interview session
│   │   ├── problemPage.jsx       # Solo practice problems
│   │   ├── RoadmapsPage.jsx
│   │   ├── RoadmapDetailPage.jsx
│   │   ├── ProblemsPage.jsx
│   │   ├── BlogPage.jsx
│   │   ├── BlogPostPage.jsx
│   │   ├── SignInPage.jsx
│   │   ├── SignUpPage.jsx
│   │   └── ... (About, Contact, Pricing, etc.)
│   ├── hooks/                    # Custom React hooks
│   │   ├── useStreamClient.jsx   # Stream Video/Chat client
│   │   ├── useSessions.js        # TanStack Query hooks
│   │   └── useTheme.js           # Theme management
│   ├── api/                      # API clients
│   │   └── sessions.js
│   ├── lib/                      # Utilities
│   │   ├── axios.js              # Axios instance
│   │   ├── piston.js             # Code execution client
│   │   ├── stream.js             # Stream client singleton
│   │   ├── useTheme.js
│   │   └── utils.js
│   ├── data/                     # Static data
│   │   ├── problems.js
│   │   ├── problems-meta.js
│   │   ├── roadmaps.js
│   │   ├── blog.js
│   │   └── *Roadmap.jsx files
│   ├── components/ui/            # Additional UI components
│   │   ├── button.jsx
│   │   ├── navigation-menu.jsx
│   │   ├── codeBlock.jsx
│   │   ├── bento-item.jsx
│   │   └── ...
│   ├── App.jsx                   # Root component with routes
│   ├── main.jsx                  # Entry point
│   └── index.css                 # Tailwind + custom styles
├── index.html
├── package.json
├── vite.config.js
├── vercel.json
└── README.md
```

## Environment Variables

Create `.env` in frontend directory:

```env
# Clerk Authentication
VITE_CLERK_PUBLISHABLE_KEY=pk_test_...

# Stream
VITE_STREAM_API_KEY=...

# Backend API
VITE_API_URL=http://localhost:5000/api
```

## Installation

```bash
cd frontend
npm install

# Development
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint
npm run lint
```

Runs at `http://localhost:5173`

## Key Features Implementation

### Session Page (`SessionPage.jsx`)
- **Desktop**: Three-panel resizable layout (Description | Editor+Output | Video)
- **Mobile**: Tab-based navigation (Description / Code / Video)
- Real-time Monaco Editor with language switching
- Code execution with output panel
- Stream Video integration with custom UI
- Join request notifications for host

### Video Call (`VideoCallUI.jsx`)
- Stream Video SDK with ParticipantView
- Screen sharing support
- **Mobile**: 50/50 stacked layout (screen share top, participants bottom)
- **Desktop**: Sidebar layout with centered screen share
- Stream Chat integration (collapsible sidebar)
- Call controls (mic, camera, screen share, leave)

### Code Editor (`CodeEditorPanel.jsx`)
- Monaco Editor with theme support
- Language selector (JavaScript, Python, Java)
- Starter code per problem/language
- Run button with loading state
- Keyboard shortcuts

### Roadmaps
- Interactive SVG-based skill trees
- Expandable nodes with resources
- Progress tracking
- Multiple domains: JavaScript, React, DSA, Frontend, Backend, Fullstack, DevOps

### Problems Page
- Advanced filtering (difficulty, category, company)
- Search with debounce
- Pagination
- Problem cards with difficulty badges

### Theme System
- CSS custom properties for colors
- Tailwind CSS 4 with DaisyUI 5
- Dark/Light mode with localStorage persistence
- System preference detection

## Responsive Design

| Breakpoint | Behavior |
|------------|----------|
| `< 640px` | Mobile: tab navigation, stacked video, single column |
| `640-1024px` | Tablet: adaptive grids, collapsible sidebars |
| `> 1024px` | Desktop: full three-panel layout, sidebars |

## State Management

- **Server State**: TanStack Query (caching, refetching, mutations)
- **Client State**: React useState/useReducer
- **Theme**: Context + localStorage
- **Stream Client**: Singleton pattern with cleanup

## API Integration

- **Axios instance** (`lib/axios.js`) with base URL + auth headers
- **Session API** (`api/sessions.js`) - all session operations
- **Piston client** (`lib/piston.js`) - code execution

## Deployment

### Vercel (Recommended)
```bash
# From root
npm run build  # Builds frontend, installs backend deps
```

### Build Output
- `dist/` - Production-ready static assets
- Served by backend in production (`express.static`)

### Environment Variables for Production
```env
VITE_CLERK_PUBLISHABLE_KEY=pk_live_...
VITE_STREAM_API_KEY=...
VITE_API_URL=https://your-domain.com/api
```

## Performance Optimizations

- Code splitting via React Router lazy loading (ready to implement)
- TanStack Query caching (5s refetch for active sessions)
- Motion animations with `will-change` hints
- Image optimization (WebP, responsive sizes)
- Tailwind JIT compilation

## Development Notes

### Adding New Pages
1. Create component in `src/pages/`
2. Add route in `App.jsx`
3. Add navigation link in `Navbar.jsx` if needed

### Adding UI Components
1. Create in `src/components/ui/`
2. Export from component file
3. Import where needed

### Custom Styles
- Global styles in `src/index.css` (Tailwind layers + CSS variables)
- Component-specific styles inline with Tailwind classes

## Testing

```bash
# No test suite configured yet
# Recommended: Vitest + React Testing Library
```

## License

ISC