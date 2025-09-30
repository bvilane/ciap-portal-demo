const express = require('express');
const cors = require('cors');
require('dotenv').config();

const content = require('./routes/content');
const requests = require('./routes/requests');
const stats = require('./routes/stats');

const app = express();
app.use(cors({ origin: ['http://localhost:5173'], credentials: true }));
app.use(express.json());

app.get('/api/health', (_req, res) => res.json({ ok:true, message:'CIAP API healthy', mode: (process.env.CACHE_MODE||'cache') }));

app.use('/api/content', content);
app.use('/api/requests', requests);
app.use('/api/stats', stats);

app.use((req,res)=>res.status(404).json({ error:'Not Found', path:req.path }));

const PORT = process.env.PORT || 4001;
app.listen(PORT, ()=> console.log(`CIAP API listening http://localhost:${PORT}`));
