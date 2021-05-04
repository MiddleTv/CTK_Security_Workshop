create table accounts (
  id SERIAL PRIMARY KEY,
  username VARCHAR(250),
  password VARCHAR(250)
);

create table todolists (
  id SERIAL PRIMARY KEY,
  task TEXT,
  user_id int
);