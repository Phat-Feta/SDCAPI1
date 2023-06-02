CREATE MATERIALIZED VIEW ans_photos 
as
Select ans.*, JSON_AGG(phot.*) as Photos 
from Answer ans FULL OUTER JOIN Photo phot ON phot.answer_id=ans.id GROUP BY ans.id;

CREATE MATERIALIZED VIEW ques_ans as 
Select q.id as question_id, q.product_id, q.body as question_body, 
q.date_written as question_date, q.asker_name, q.helpful as question_helpfulness, 
q.reported, JSON_AGG(ans.*) as Answers from Question q 
FULL OUTER JOIN ans_photos ans on ans.question_id=q.id GROUP BY q.id;

CREATE INDEX ques_ans_idx on ques_ans(product_id);