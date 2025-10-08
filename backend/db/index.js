const fs = require('fs');
const path = require('path');
const sqlite3 = require('sqlite3').verbose();

const dbPath = path.join(__dirname, 'ciap.sqlite');
const schemaPath = path.join(__dirname, 'schema.sql');
const seedPath = path.join(__dirname, 'seed.sql');

function open() {
  return new sqlite3.Database(dbPath);
}

function runSql(db, sql) {
  return new Promise((resolve, reject) => {
    db.exec(sql, (err) => (err ? reject(err) : resolve()));
  });
}

async function migrate() {
  const db = open();
  try {
    const schema = fs.readFileSync(schemaPath, 'utf8');
    await runSql(db, schema);
    console.log('DB migrated ✅');
  } finally {
    db.close();
  }
}

async function seed() {
  const db = open();
  try {
    const seedSql = fs.readFileSync(seedPath, 'utf8');
    await runSql(db, seedSql);
    console.log('DB seeded 🌱');
  } finally {
    db.close();
  }
}

async function reset() {
  if (fs.existsSync(dbPath)) fs.unlinkSync(dbPath);
  await migrate();
  await seed();
}

const cmd = process.argv[2];
if (cmd === 'migrate') migrate();
else if (cmd === 'seed') seed();
else if (cmd === 'reset') reset();
else console.log('Usage: node db/index.js [migrate|seed|reset]');
