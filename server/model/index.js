const pg = require('pg')
const db = require('../../db')

const models = {
    getQuestions: async (urlQuery)=>{
        const queryStatement =`Select q.id as question_id, q.product_id, q.body as question_body, q.date_written as question_date, q.asker_name, q.helpful as question_helpfulness, q.reported \ 
        from Question q where q.product_id=${urlQuery.product_id} AND q.reported=false LIMIT ${urlQuery.count||5};`;
        
        // const queryStatement = `Select * from Question where product_id=${urlQuery.product_id} LIMIT 5;`
        
        // const queryStatement = `Select q.*, JSON_AGG(ans.*) as Answers from Question q \
        // JOIN Answer ans on ans.question_id=q.id AND q.product_id=${urlQuery.product_id} GROUP BY q.id`;
        // const {rows} = await db.query(queryStatement)
        return db.query(queryStatement);
    },
    getAnswers: (id, urlQuery={count:5})=>{
        // const queryStatement = `Select ans.*, JSON_AGG(phot.*) as Photos from Answer ans JOIN Photo phot on phot.answer_id=ans.id 
        // AND ans.question_id=${id} GROUP BY ans.id`;
        const queryStatement = `Select ans.*, JSON_AGG(phot.*) as Photos \
        from Answer ans FULL OUTER JOIN Photo phot ON phot.answer_id=ans.id where ans.question_id=${id} GROUP BY ans.id;`
        return db.query(queryStatement);
    },
    //tough
    postQuestion: (data, id)=> {
        const queryStatement = `Insert into Question (product_id, body, date_written, asker_name, asker_email, reported, helpful) \ 
        VALUES (${data.product_id}, '${data.body}', '${Date.now()}', '${data.name}', '${data.email}', false , 0);`;
        return db.query(queryStatement);
    },
    postAnswer: (id, data)=> {
        const queryStatement = `INSERT INTO Answer (question_id,body,date_written, answerer_name,answerer_email, reported, helpfulness) values \ 
        (${id}, '${data.body}', '${Date.now()}' ,'${data.name}', '${data.email}', false, 0);`;
        return db.query(queryStatement)
    }, 

    markQuestionHelpful: (id)=> {
        const queryStatement= `UPDATE Question SET helpful=helpful+1 where id=${id}`;
        return db.query(queryStatement);
    },
    markAnswerHelpful: (id) =>{
        const queryStatement= `UPDATE Answer SET helpfulness=helpfulness+1 where id=${id}`;
        return db.query(queryStatement);
    },
    reportQuestion: (id)=> {
        const queryStatement = `UPDATE Question SET reported=true where id=${id}`;
        return db.query(queryStatement)
    },
    reportAnswer: (id)=> {
        const queryStatement = `UPDATE Answer SET reported=true where id=${id}`;
        return db.query(queryStatement)
    }
}

module.exports = models;