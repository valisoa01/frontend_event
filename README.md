# 🎯 EventSync Frontend

Frontend de la plateforme EventSync - Gestion d'événements en temps réel.

## 🚀 Technologies

- **Framework**: Next.js (Page Router)
- **Langage**: TypeScript
- **Styling**: TailwindCSS v4.2
- **État**: React Context + Hooks personnalisés
- **HTTP Client**: Axios
- **Temps réel**: Socket.io-client

## 📋 Prérequis

- Node.js (v18 ou supérieur)
- npm (v9 ou supérieur)

## ⚡ Installation

```bash
# 1. Cloner le repository
git clone https://github.com/your-org/eventsync-frontend.git
cd eventsync-frontend

# 2. Installer les dépendances
npm install

# 3. Configurer les variables d'environnement
cp .env.example .env.local
# Éditer .env.local avec vos valeurs

# 4. Lancer le serveur de développement
npm run dev
```

## 📁 Structure du projet

```
src/
├── components/          # Composants React par entité
│   ├── common/         # Composants génériques (Layout, Button, etc.)
│   ├── events/         # Composants Events
│   ├── sessions/       # Composants Sessions
│   ├── speakers/       # Composants Speakers
│   ├── rooms/          # Composants Rooms
│   └── admin/          # Composants admin
├── pages/              # Pages Next.js (Page Router)
│   ├── events/         # Pages Events
│   ├── sessions/       # Pages Sessions
│   ├── speakers/       # Pages Speakers
│   └── admin/          # Pages admin
├── services/           # Services API par entité
├── hooks/              # Hooks personnalisés
├── types/              # Types TypeScript
├── contexts/           # React Contexts
├── utils/              # Utilitaires
└── styles/             # Styles globaux
```

## 👥 Répartition des tâches (4 développeurs)

| Développeur | Entités | Dossiers principaux |
|-------------|---------|---------------------|
| **Dev A** | Events | `components/events/`, `services/event.service.ts`, `pages/events/` |
| **Dev B** | Sessions & Rooms | `components/sessions/`, `components/rooms/`, `services/session.service.ts` |
| **Dev C** | Speakers | `components/speakers/`, `services/speaker.service.ts`, `pages/speakers/` |
| **Dev D** | Questions & Live | `components/sessions/QuestionList.tsx`, `services/question.service.ts`, `utils/socket.ts` |

## 🔧 Scripts disponibles

- `npm run dev` - Lance le serveur de développement
- `npm run build` - Build de production
- `npm run start` - Lance le serveur de production
- `npm run lint` - Vérifie le code avec ESLint
- `npm run type-check` - Vérifie les types TypeScript

## 🌐 Variables d'environnement

```env
NEXT_PUBLIC_API_URL=http://localhost:3000/api
NEXT_PUBLIC_SOCKET_URL=http://localhost:3000
NEXT_PUBLIC_APP_URL=http://localhost:3001
```

## 📝 Règles pour éviter les conflits Git

1. **Toujours travailler sur une branche dédiée**
   ```bash
   git checkout -b feature/nom-de-la-fonctionnalite
   ```

2. **Ne pas modifier les fichiers d'un autre développeur**

3. **Communiquer avant de modifier**:
   - `src/pages/_app.tsx`
   - `src/pages/_document.tsx`
   - `src/contexts/` (fichiers globaux)

4. **Faire des commits atomiques et fréquents**

5. **Créer une Pull Request avant de merger dans main**

## 🐛 Dépannage

### Erreur de type avec Prisma
```bash
npm run type-check
```

### Port déjà utilisé
```bash
# Changer le port dans package.json
"dev": "next dev -p 3001"
```

## 📄 Licence

MIT