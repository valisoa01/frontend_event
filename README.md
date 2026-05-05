# 🎯 EventSync Frontend

Frontend for the EventSync platform - Real-time event management system built with Next.js App Router.

## 🚀 Technologies

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS v4
- **State Management**: React Context + Custom Hooks
- **HTTP Client**: Axios
- **Real-time**: Socket.io-client

## 📋 Prerequisites

- Node.js (v18 or higher)
- npm (v9 or higher)

## ⚡ Installation

```bash
# 1. Clone the repository
git clone https://github.com/your-org/eventsync-frontend.git
cd eventsync-frontend

# 2. Install dependencies
npm install

# 3. Configure environment variables
cp .env.example .env.local
# Edit .env.local with your values

# 4. Start the development server
npm run dev
```

## 📁 App Router Structure

```
src/
├── app/
│   ├── (public)/          # Public routes (no auth)
│   │   ├── layout.tsx     # Public layout with Header/Footer
│   │   └── page.tsx       # Homepage
│   ├── (admin)/           # Admin routes (protected)
│   │   ├── layout.tsx     # Admin layout with auth guard
│   │   ├── login/page.tsx # Login page
│   │   └── dashboard/page.tsx
│   └── api/               # API routes (proxy to backend)
├── components/            # React components
│   ├── common/           # Header, Footer, Layout components
│   ├── events/           # Events components
│   ├── sessions/         # Sessions components
│   └── speakers/         # Speakers components
├── services/             # API services
├── hooks/                # Custom hooks
├── types/                # TypeScript types
├── contexts/             # React Context providers
├── utils/                # Utility functions
└── lib/                  # Third-party configurations
```

## 🎯 Route Groups

| Route Group | URL Prefix | Authentication | Layout |
|-------------|------------|----------------|--------|
| `(public)` | `/` | No | Public Layout (Header + Footer) |
| `(admin)` | `/admin` | Yes (JWT) | Admin Layout + Auth Guard |

## 👥 Task Distribution (4 Developers)

| Developer | Entities | Main folders |
|-----------|----------|--------------|
| **Dev A** | Events | `components/events/`, `services/event.service.ts` |
| **Dev B** | Sessions & Rooms | `components/sessions/`, `components/rooms/` |
| **Dev C** | Speakers | `components/speakers/`, `services/speaker.service.ts` |
| **Dev D** | Questions & Live | `hooks/useQuestions.ts`, `utils/socket.ts` |

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking
- `npm run format` - Format code with Prettier

## 🌐 Environment Variables

```env
NEXT_PUBLIC_API_URL=http://localhost:3000/api
NEXT_PUBLIC_SOCKET_URL=http://localhost:3000
NEXT_PUBLIC_APP_URL=http://localhost:3001
```

## 📝 App Router vs Pages Router

**Why App Router?**
- ✅ Server Components by default (better performance)
- ✅ Nested layouts without wrapper hell
- ✅ Parallel and intercepted routes
- ✅ Built-in loading and error boundaries
- ✅ Better SEO with metadata API
- ✅ Streaming and Suspense support

## 🛠️ Development Workflow

```bash
# Create feature branch
git checkout -b feature/feature-name

# Make changes and commit
git add .
git commit -m "feat(scope): description"

# Push and create PR
git push origin feature/feature-name
```

## 🐛 Troubleshooting

### Module not found
```bash
rm -rf node_modules package-lock.json
npm install
```

### Port already in use
```bash
# Change port in package.json
"dev": "next dev -p 3002"
```

### Type errors
```bash
npm run type-check
```

## 📄 License

MIT