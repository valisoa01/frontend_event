# 🎯 EventSync Frontend

Frontend for the EventSync platform - Real-time event management system.

## 🚀 Technologies

- **Framework**: Next.js (Page Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS v4.2
- **State Management**: React Context + Custom Hooks
- **HTTP Client**: Axios
- **Real-time**: Socket.io-client

## 📋 Prerequisites

- Node.js (v18 or higher)
- npm (v9 or higher)

## ⚡ Installation

```bash
# 1. Clone the repository
git clone https://github.com/FullStack-Collective/event-sync-frontend.git
cd event-sync-frontend

# 2. Install dependencies
npm install

# 3. Configure environment variables
cp .env.example .env.local
# Edit .env.local with your values

# 4. Start the development server
npm run dev
```

## 📁 Project Structure

```
src/
├── components/          # React components by entity
│   ├── common/         # Generic components (Layout, Button, etc.)
│   ├── events/         # Events components
│   ├── sessions/       # Sessions components
│   ├── speakers/       # Speakers components
│   ├── rooms/          # Rooms components
│   └── admin/          # Admin components
├── pages/              # Next.js pages (Page Router)
│   ├── events/         # Events pages
│   ├── sessions/       # Sessions pages
│   ├── speakers/       # Speakers pages
│   └── admin/          # Admin pages
├── services/           # API services by entity
├── hooks/              # Custom hooks
├── types/              # TypeScript types
├── contexts/           # React Contexts
├── utils/              # Utilities
└── styles/             # Global styles
```

## 👥 Task Distribution (4 Developers)

| Developer | Entities | Main folders |
|-----------|----------|--------------|
| **[Valisoa](https://github.com/valisoa01)** | Events | `components/events/`, `services/event.service.ts`, `pages/events/` |
| **[David](https://github.com/DavFilsDev)** | Sessions & Rooms | `components/sessions/`, `components/rooms/`, `services/session.service.ts` |
| **[Zinedis](https://github.com/Safid849)** | Speakers | `components/speakers/`, `services/speaker.service.ts`, `pages/speakers/` |
| **[Herinjaka](https://github.com/24194Njaka)** | Questions & Live | `components/sessions/QuestionList.tsx`, `services/question.service.ts`, `utils/socket.ts` |

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint code validation
- `npm run type-check` - Run TypeScript type checking

## 🌐 Environment Variables

```env
NEXT_PUBLIC_API_URL=http://localhost:3000/api
NEXT_PUBLIC_SOCKET_URL=http://localhost:3000
NEXT_PUBLIC_APP_URL=http://localhost:3001
```

## 📝 Git Conflict Prevention Rules

1. **Always work on a dedicated branch**
   ```bash
   git checkout -b feature/feature-name
   ```

2. **Do not modify other developers' files**

3. **Communicate before modifying**:
   - `src/pages/_app.tsx`
   - `src/pages/_document.tsx`
   - `src/contexts/` (global files)

4. **Make atomic and frequent commits**

5. **Create a Pull Request before merging into main**

## 🐛 Troubleshooting

### Type error with Prisma
```bash
npm run type-check
```

### Port already in use
```bash
# Change the port in package.json
"dev": "next dev -p 3001"
```

## 📄 License

MIT