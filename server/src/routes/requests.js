const express = require('express');
const router = express.Router();
const db = require('../db');

// env toggle to simulate cache behavior
const MODE = (process.env.CACHE_MODE || 'cache').toLowerCase(); // cache|miss|offline

router.post('/', (req, res) => {
  const { content_id } = req.body || {};
  const content = db.prepare('SELECT * FROM content WHERE id=?').get(Number(content_id));
  if (!content) return res.status(404).json({ error: 'content not found' });

  let served_from = 'cache', latency_ms = 12;
  if (MODE === 'miss') { served_from = 'upstream'; latency_ms = 200; }
  if (MODE === 'offline') { served_from = 'offline'; latency_ms = 0; }

  db.prepare('INSERT INTO request_logs (content_id, served_from, latency_ms) VALUES (?,?,?)')
    .run(content.id, served_from, latency_ms);

  res.json({ ok:true, served_from, latency_ms, content });
});

router.get('/recent', (_req, res) => {
  const rows = db.prepare(`
    SELECT rl.id, rl.served_from, rl.latency_ms, rl.ts, c.title
    FROM request_logs rl LEFT JOIN content c ON c.id = rl.content_id
    ORDER BY rl.id DESC LIMIT 20
  `).all();
  res.json(rows);
});

module.exports = router;
