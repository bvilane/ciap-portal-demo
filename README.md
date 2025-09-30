# CIAP Portal Demo — Offline‑First Content Access (Express + SQLite + React/Vite TS)

This demo aligns with the **Offline‑First Community Internet Access Platform (CIAP)** proposal:
- **Mesh-friendly** web portal (runs on LAN; mesh is out-of-scope for this code demo)
- **Local caching** simulation + usage logging
- **Admin stats** (cache hit ratio, bytes served, top items)
- **Offline‑first** PWA shell (service worker + manifest)

## Quick Start
```bash
cd ciap-portal-demo
npm install
npm run dev
```
- Frontend: http://localhost:5173
- API health: http://localhost:4001/api/health

## What to Demo (5–10 min)
1) Browse → Request an item → see success + source (cache/upstream/offline).
2) Admin → View hit ratio, bytes saved, recent requests.
3) Toggle server CACHE_MODE to show cache‑hit vs miss behavior.
4) Show offline behavior: load once, then switch network off; list + UI still open.

## App Structure
- **/server** Express + SQLite (better-sqlite3)
  - `CACHE_MODE` env: `cache|miss|offline`
  - Tables: `content`, `request_logs`
- **/client** React TS + Vite (PWA manifest + service worker)
- **/docs** wireframes + deployment plan

