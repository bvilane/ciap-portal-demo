
# Offline-First Community Internet Access Platform (CIAP)

**Author:** Bavukile Vilane  
**Programme:** Bachelor of Software Engineering – Capstone Project  
**Supervisor:** Ndinelao Iitumba  
**GitHub Repository:** [https://github.com/bvilane/ciap-portal-demo](https://github.com/bvilane/ciap-portal-demo)

---

## Description
The **CIAP Portal** is an offline-first web platform designed to bridge the urban–rural digital divide in South Africa by enabling community-level access to digital content through mesh networking and intelligent caching.

### Key Features
- **Online Mode:** Rich, visual UI with latest news, educational videos, and downloadable PDFs.
- **Offline Mode:** Lightweight interface with cached local content.
- **Admin Dashboard:** Displays system metrics, announcements, and usage summaries.
- **Backend (Node.js + SQLite):** RESTful APIs to serve community data.
- **Frontend (React + Vite):** Responsive web interface with a manual mode toggle for demonstration.

---

## Setup Instructions

### 1. Clone and Navigate
```bash
git clone https://github.com/bvilane/ciap-portal-demo.git
cd ciap-portal-demo
```

### 2. Run the Backend
```bash
cd backend
npm install
npm run reset  # creates + seeds the SQLite database
npm run dev
# Runs on http://localhost:4000
```

### 3. Run the Frontend
Open a new terminal:
```bash
cd frontend
npm install
npm run dev
# Runs on http://localhost:5173
```

Then open [http://localhost:5173](http://localhost:5173) in your browser.

---

## Design Process

All design assets are in the `/designs` folder and GitHub repo.

- **Wireframes:** Built in Figma to outline user flow (Home → Admin → Offline toggle)
- **UI Mockups:** High-fidelity layout showing visual hierarchy, accessibility, and responsive design
- **Color Palette:**  
  - Primary: `#0D9488` (Teal)  
  - Background: `#0B1220` (Dark blue)  
  - Accent: `#EEF2F7` (Light grey)  
- **Font:** System UI stack (Segoe UI, Roboto, Ubuntu)

---

## System Design

### Database Schema
| Table | Key Columns | Description |
|--------|--------------|--------------|
| users | id, name, email, role | Authentication + roles |
| news | id, title, summary, date, image, link | News cards on homepage |
| tutorials | id, title, url | YouTube guides |
| pdfs | id, title, url | Downloadable documents |

See `backend/db/schema.sql` for details.

---

## Deployment Plan

For local demo:
- **Backend:** Node.js server running on port 4000  
- **Database:** SQLite file `backend/db/ciap.sqlite`
- **Frontend:** Vite server (dev) or `vite build` → serve `/dist`

For production / Raspberry Pi:
- Serve backend with `pm2` or Docker
- Host frontend static files via Nginx or `vite preview`
- Use mesh network nodes for local offline distribution

---

## Video Demo (5–10 mins)
A demo video will be uploaded and linked in the GitHub repo under `/designs` and `/video-demo/`.  
The recording will show:
1. Online + Offline modes in action  
2. Frontend–Backend API connection  
3. Database operations using Postman  
4. Admin dashboard updates  

---

## API Testing
Import `CIAP.postman_collection.json` into Postman to test:
- `GET /api/status`
- `GET /api/news`
- `POST /api/news`
- `GET /api/tutorials`
- `GET /api/pdfs`

---

## Tech Stack
| Layer | Technology |
|--------|-------------|
| Frontend | React + Vite |
| Backend | Node.js + Express |
| Database | SQLite |
| Styling | CSS Grid + Flexbox |
| Testing | Postman |
| Version Control | GitHub |

---

##  Future Improvements
- Mesh networking integration
- Real caching + sync logic
- Authentication with JWT
- File upload + content moderation