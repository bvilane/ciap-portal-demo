-- Users (simple demo auth / roles)
CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  role TEXT CHECK(role IN ('admin','viewer')) NOT NULL DEFAULT 'viewer'
);

-- News (cards on homepage)
CREATE TABLE IF NOT EXISTS news (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT NOT NULL,
  summary TEXT NOT NULL,
  date TEXT NOT NULL,
  image TEXT,
  link TEXT
);

-- Tutorials (YouTube embeds)
CREATE TABLE IF NOT EXISTS tutorials (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT NOT NULL,
  url TEXT NOT NULL
);

-- PDFs (local or external)
CREATE TABLE IF NOT EXISTS pdfs (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT NOT NULL,
  url TEXT NOT NULL
);
