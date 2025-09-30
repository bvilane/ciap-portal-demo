const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/', (_req, res) => {
  const total = db.prepare('SELECT COUNT(*) as c FROM request_logs').get().c;
  const hits = db.prepare("SELECT COUNT(*) as c FROM request_logs WHERE served_from='cache'").get().c;
  const bytes = db.prepare(`
    SELECT IFNULL(SUM(CASE WHEN rl.served_from='cache' THEN c.size_bytes ELSE 0 END),0) as saved
    FROM request_logs rl LEFT JOIN content c ON c.id=rl.content_id
  `).get().saved;
  const ratio = total ? Math.round((hits/total)*100) : 0;
  res.json({ total_requests: total, cache_hits: hits, hit_ratio_pct: ratio, bytes_saved: bytes });
});

module.exports = router;
