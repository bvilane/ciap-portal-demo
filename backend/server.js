const express = require('express');
const cors = require('cors');
const path = require('path');
const sqlite3 = require('sqlite3').verbose();

const app = express();
app.use(cors());
app.use(express.json());
app.use('/static', express.static(path.join(__dirname, 'public')));

// open db helper
const dbPath = path.join(__dirname, 'db', 'ciap.sqlite');
function withDb(run) { const db = new sqlite3.Database(dbPath); run(db); db.close(); }

// Status
app.get('/api/status', (req, res) => {
  res.json({ service: 'CIAP Backend', online: true, timestamp: new Date().toISOString() });
});

// News
app.get('/api/news', (req, res) => {
  withDb(db => db.all('SELECT * FROM news ORDER BY date DESC', (err, rows) =>
    err ? res.status(500).json({ error: 'DB error' }) : res.json(rows)
  ));
});
app.post('/api/news', (req, res) => {
  const { title, summary, date, image, link } = req.body || {};
  if (!title || !summary || !date) return res.status(400).json({ error: 'Missing fields' });
  withDb(db => {
    db.run('INSERT INTO news (title,summary,date,image,link) VALUES (?,?,?,?,?)',
      [title, summary, date, image || null, link || null],
      function (err) { err ? res.status(500).json({ error: 'DB insert error' }) :
        res.status(201).json({ id: this.lastID, title, summary, date, image, link }); }
    );
  });
});

// Tutorials
app.get('/api/tutorials', (req, res) => {
  withDb(db => db.all('SELECT * FROM tutorials ORDER BY id DESC', (err, rows) =>
    err ? res.status(500).json({ error: 'DB error' }) : res.json(rows)
  ));
});

// PDFs
app.get('/api/pdfs', (req, res) => {
  withDb(db => db.all('SELECT * FROM pdfs ORDER BY id DESC', (err, rows) =>
    err ? res.status(500).json({ error: 'DB error' }) : res.json(rows)
  ));
});

// 404
app.use((req, res) => res.status(404).json({ error: 'Not found' }));

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`CIAP backend running on http://localhost:${PORT}`));
