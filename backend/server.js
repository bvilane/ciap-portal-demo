
const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();

app.use(cors());
app.use(express.json());
app.use('/static', express.static(path.join(__dirname, 'public')));

app.get('/api/status', (req, res) => {
  res.json({ service:'CIAP Backend', online:true, timestamp:new Date().toISOString() });
});

app.get('/api/news', (req, res) => res.json(require('./data/news.json')));
app.get('/api/tutorials', (req, res) => res.json(require('./data/tutorials.json')));
app.get('/api/pdfs', (req, res) => res.json(require('./data/pdfs.json')));

app.use((req,res)=> res.status(404).json({error:'Not found'}));

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`CIAP backend running on http://localhost:${PORT}`));
