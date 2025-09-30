const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/', (_req, res) => {
  const rows = db.prepare('SELECT * FROM content ORDER BY id DESC').all();
  res.json(rows);
});

router.post('/', (req, res) => {
  const { title, type, size_bytes = 0, tags = '' } = req.body || {};
  if (!title || !type) return res.status(400).json({ error: 'title and type are required' });
  const info = db.prepare('INSERT INTO content (title,type,size_bytes,tags) VALUES (?,?,?,?)')
    .run(String(title), String(type), Number(size_bytes||0), String(tags));
  const row = db.prepare('SELECT * FROM content WHERE id=?').get(info.lastInsertRowid);
  res.status(201).json(row);
});

module.exports = router;
