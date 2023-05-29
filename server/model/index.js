const pg = require('pg')
const db = require('../../db')

const models = {
    getQuestions: (urlQuery)=>{
        const queryStatement =`Select * from Question where product_id=${urlQuery.product_id} LIMIT ${urlQuery.count||5};`;
        return db.query(queryStatement);
    },
    getAnswers: (id, urlQuery={count:5})=>{
        const queryStatement = `Select * from Answer where question_id=${id} limit ${urlQuery.count||5}`;
        return db.query(queryStatement);
    },
    //tough
    postQuestion: (data, id)=> {
        const queryStatement = `Insert into Question (product_id, body, date_written, asker_name, asker_email, reported, helpful) \ 
        VALUES (${data.product_id}, '${data.body}', '${Date.now()}', '${data.name}', '${data.email}', false , 0);`;
        return db.query(queryStatement);
    },
    postAnswer: (id, data)=> {
        const queryStatement = `INSERT INTO Answer (question_id,body,answerer_name,answerer_email, reported, helpful) values \ 
        (${id}, '${data.body}', '${data.name}', '${data.email}', false, 0);`;
    }, 
    markQuestionHelpful: (id)=> {
        const queryStatement= `UPDATE Question SET helpful=helpful+1 where id=${id}`;
        return db.query(queryStatement);
    },
    markAnswerHelpful: (id) =>{
        const queryStatement= `UPDATE Answer SET helpful=helpful+1 where id=${id}`;
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