# Project: Calgary Comp Calls

## Current Status
- **Architecture:** Full-stack Monorepo
- **Frontend:** React (Vite) + TypeScript in `/frontend`
- **Backend:** Express + TypeScript in `/backend`
- **Infrastructure:** Dockerized orchestration via `docker-compose.yml`

## Technology Stack
- **Runtime:** Node.js (v20+)
- **Frontend Libs:** React 19, React Router Dom
- **Backend Libs:** Express 5
- **Tooling:** TypeScript, Docker, Vite, Nodemon

## Setup & Development
1. **System Deps:** Ensure `docker` and `docker-compose` are installed.
2. **Launch All:** `docker-compose up --build`
3. **Manual Backend:** `cd backend && npm install && npm run dev` (Port 3000)
4. **Manual Frontend:** `cd frontend && npm install && npm run dev` (Port 5173)

## Project Rules & Conventions
- **TypeScript First:** All new code must be written in TypeScript with strict type checking.
- **Surgical Updates:** Use the `replace` tool for targeted edits; avoid overwriting entire files unless necessary.
- **Validation:** Always verify builds (`npm run build`) before considering a task complete.
- **Git:** Use the `main` branch for the primary development line.

## Recent Changes (2026-04-28)
- Initialized Git repository and `.gitignore`.
- Scaffolded Express backend with TypeScript and health check endpoints.
- Scaffolded React frontend with Vite and TypeScript.
- Added Dockerfiles and Root Docker Compose configuration for local orchestration.
- Verified successful builds for both frontend and backend.
