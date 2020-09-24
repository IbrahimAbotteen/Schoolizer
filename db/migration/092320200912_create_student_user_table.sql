CREATE TABLE IF NOT EXISTS student_user (
  id SERIAL PRIMARY KEY,
  username VARCHAR(255) UNIQUE NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  password_digest TEXT NOT NULL,

);

Alter table student_user
ADD COLUMN access VARCHAR NOT NULL;