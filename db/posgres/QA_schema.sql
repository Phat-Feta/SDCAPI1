-- \connect q_a_db;

--to reset 
DROP TABLE IF EXISTS Product CASCADE;
DROP TABLE IF EXISTS Question CASCADE;
DROP TABLE IF EXISTS Answer CASCADE;
DROP TABLE IF EXISTS Photo CASCADE;
	
CREATE TABLE Product(
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) 
);

CREATE TABLE Question (
    id SERIAL PRIMARY KEY,
    body VARCHAR(500),
    asker_name VARCHAR(60),
    asker_email VARCHAR(60),
    reported BOOLEAN,
    product_id INTEGER REFERENCES Product(id)
);

-- date written
CREATE TABLE Answer(
    id SERIAL PRIMARY KEY,
    body VARCHAR(500),
    date_written timestamp,
    answerer_name VARCHAR(60),
    answerer_email  VARCHAR(60),
    helpful INTEGER DEFAULT 0,
    question_id INTEGER REFERENCES Question(id)
);

CREATE TABLE Photo (
    id SERIAL PRIMARY KEY,
    photo_url VARCHAR(300),
    answer_id INTEGER REFERENCES Answer(id)
);
