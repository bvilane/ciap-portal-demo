const Database = require('better-sqlite3');
const path = require('path');
const fs = require('fs');

const dataDir = path.join(__dirname, '..', 'data');
if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true });
const dbFile = path.join(dataDir, 'ciap.db');
const db = new Database(dbFile);

db.exec(`
CREATE TABLE IF NOT EXISTS content (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT NOT NULL,
  type TEXT NOT NULL, -- pdf|video|html|image|other
  size_bytes INTEGER NOT NULL DEFAULT 0,
  tags TEXT DEFAULT '', -- comma-separated
  last_updated TEXT NOT NULL DEFAULT (datetime('now'))
);
CREATE TABLE IF NOT EXISTS request_logs (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  content_id INTEGER,
  served_from TEXT NOT NULL, -- cache|upstream|offline
  latency_ms INTEGER NOT NULL,
  ts TEXT NOT NULL DEFAULT (datetime('now')),
  FOREIGN KEY(content_id) REFERENCES content(id)
);
`);

// Seed a few content items if empty
const count = db.prepare('SELECT COUNT(*) as c FROM content').get().c;
if (count === 0) {
  const insert = db.prepare('INSERT INTO content (title,type,size_bytes,tags) VALUES (?,?,?,?)');
  insert.run('Clinic Guidelines (PDF)','pdf', 2300000,'health,clinic,pdf');
  insert.run('Math Lesson (Video 720p)','video', 48000000,'education,math,video');
  insert.run('Community Notice (HTML)','html', 12000,'civic,notice,html');
}

module.exports = db;
