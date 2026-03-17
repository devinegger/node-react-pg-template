# node-react-pg-template

Reusable solo-dev scaffold: Node/Express + React/Vite + PostgreSQL.

## Stack

| Layer    | Tech                                    |
|----------|-----------------------------------------|
| Server   | Node.js (ESM), Express, pg              |
| Client   | React 18, Vite 5, Tailwind CSS, PostCSS |
| Database | PostgreSQL 16 (Docker)                  |

## Project structure

```
server/          Express app (ESM, no build step)
  index.js       Entry point — /health route + error handler
  db/            pg pool + query helper
  connectors/    External service connectors

client/          Vite + React SPA
  src/
    App.jsx
    components/
  postcss.config.cjs   PostCSS config (must be .cjs — Vite ESM incompatibility)
  tailwind.config.js
  vite.config.js

docker-compose.yml    Single service: `db` (postgres:16, container: app-db)
.env.example          Copy to .env before first run
```

## Local dev

```bash
cp .env.example .env
docker compose up db -d
npm install
npm run dev         # server :4000, client :5173
```

Health check: `GET /health` → `{"status":"ok"}` (also drives the green dot on the welcome screen).

## Key conventions

- **PostCSS config must be `.cjs`** — Vite's ESM mode does not load `.js` PostCSS configs. Do not rename back to `.js`.
- **docker-compose.yml has no `version:` field** — removed to silence the deprecation warning from Compose v2. Do not add it back.
- **DB service name is `db`** — used in `docker compose up db -d` and referenced in docs. Do not rename.
- Server uses Node ESM (`"type": "module"`) — all imports use `.js` extensions.
- No build step for server (`npm run build` on server is a no-op echo).

## npm scripts (root workspace)

| Script        | What it does                        |
|---------------|-------------------------------------|
| `npm run dev` | Starts server + client concurrently |
| `npm run build` | Builds client (server has no build) |
| `npm run lint` | Lints both workspaces              |
| `npm start`   | Production start (server only)      |
