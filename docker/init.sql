CREATE TABLE accounts (
  id  SERIAL  PRIMARY KEY,
  username UNIQUE VARCHAR(250),
  password  VARCHAR(250)
);

CREATE TABLE todolists (
  id  SERIAL  PRIMARY KEY,
  task  TEXT,
  user_id int
);