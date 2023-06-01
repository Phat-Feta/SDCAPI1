CREATE INDEX question_prod_id_idx ON Question(product_id);
CREATE INDEX answer_ques_id_idx on Answer(question_id);
CREATE INDEX photo_ans_id_idx on Photo(answer_id);