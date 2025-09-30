# Deployment Plan (Brief)
- Backend on Render/Fly (port 4001). Set env `CACHE_MODE=cache` (or miss/offline for demo).
- Frontend on Vercel/Netlify. Set `VITE_API_BASE_URL` to backend URL.
- Run on LAN for mesh testbeds; front+back can be hosted on a Raspberry Pi.
