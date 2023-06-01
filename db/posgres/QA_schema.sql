-- \connect q_a_db;

--to reset 
DROP TABLE IF EXISTS Product CASCADE;
DROP TABLE IF EXISTS Question CASCADE;
DROP TABLE IF EXISTS Answer CASCADE;
DROP TABLE IF EXISTS Photo CASCADE;

-- CREATE TABLE Product(
--     id SERIAL PRIMARY KEY,
--     name VARCHAR(100) 
-- );

-- CREATE TABLE Question (
--     id SERIAL PRIMARY KEY,
--     product_id INTEGER REFERENCES Product(id),
--     body VARCHAR(500),
--     date_written VARCHAR(80),
--     asker_email VARCHAR(60),
--     asker_name VARCHAR(60),
--     reported BOOLEAN,
--     helpful INTEGER
-- );

CREATE TABLE Question (
    id SERIAL PRIMARY KEY,
    product_id INTEGER,
    body VARCHAR(500),
    date_written VARCHAR(80),
    asker_name VARCHAR(60),
    asker_email VARCHAR(60),
    reported BOOLEAN DEFAULT false,
    helpful INTEGER DEFAULT 0
);

CREATE TABLE Answer(
    id SERIAL PRIMARY KEY,
    question_id INTEGER REFERENCES Question(id),
    body VARCHAR(500),
    date_written VARCHAR(80),
    answerer_name VARCHAR(60),
    answerer_email  VARCHAR(60),
    reported BOOLEAN DEFAULT false,
    helpfulness INTEGER DEFAULT 0
);

CREATE TABLE Photo (
    id SERIAL PRIMARY KEY,
    answer_id INTEGER REFERENCES Answer(id),
    photo_url VARCHAR(300)
);


--Copy CSV files into db
-- COPY Question from '/home/cesargua/hackreactor/Feta-cheese/SDC_QA_API/db/csv/questions.csv/questions.csv' DELIMITER ',' CSV HEADER;
-- COPY Answer from '/home/cesargua/hackreactor/Feta-cheese/SDC_QA_API/db/csv/answers.csv/answers.csv' DELIMITER ',' CSV HEADER;
-- COPY Photo from  '/home/cesargua/hackreactor/Feta-cheese/SDC_QA_API/db/csv/answers_photos.csv/answers_photos.csv' DELIMITER ',' CSV HEADER;