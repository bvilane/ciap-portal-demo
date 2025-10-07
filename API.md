
# CIAP API (Demo)

Base URL: `http://localhost:4000`

Endpoints:
- `GET /api/status` → `{ service, online, timestamp }`
- `GET /api/news` → `{ id, title, summary, date, image?, link? }[]`
- `GET /api/tutorials` → `{ id, title, url }[]`
- `GET /api/pdfs` → `{ id, title, url }[]`

Frontend wiring example (Home.jsx):
```js
const API = 'http://localhost:4000'
useEffect(()=>{
  fetch(`${API}/api/news`).then(r=>r.json()).then(setNews)
  fetch(`${API}/api/tutorials`).then(r=>r.json()).then(setTuts)
  fetch(`${API}/api/pdfs`).then(r=>r.json()).then(setPdfs)
},[])
```
