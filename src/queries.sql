CREATE TABLE IF NOT EXISTS users (
  id serial PRIMARY KEY,
  username VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
);