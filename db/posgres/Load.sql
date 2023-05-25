-- COPY Product (id,name) from '/home/cesargua/hackreactor/Feta-cheese/SDC_QA_API/db/shorten_csv/products.csv' DELIMITER ',' CSV HEADER;
COPY Question from '/home/cesargua/hackreactor/Feta-cheese/SDC_QA_API/db/csv/questions.csv/questions.csv' DELIMITER ',' CSV HEADER;
COPY Answer from '/home/cesargua/hackreactor/Feta-cheese/SDC_QA_API/db/csv/answers.csv/answers.csv' DELIMITER ',' CSV HEADER;
COPY Photo from  '/home/cesargua/hackreactor/Feta-cheese/SDC_QA_API/db/csv/answers_photos.csv/answers_photos.csv' DELIMITER ',' CSV HEADER;