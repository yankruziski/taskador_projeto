CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  name_user VARCHAR NOT NULL
);

CREATE TABLE IF NOT EXISTS categorie (
  id SERIAL PRIMARY KEY,
  name_categorie VARCHAR NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS task (
  id SERIAL PRIMARY KEY,
  name_tasks VARCHAR NOT NULL,
  description_task TEXT,
  start_date DATE,
  finish_date DATE,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  categorie_id INTEGER REFERENCES categorie(id) ON DELETE SET NULL
);
