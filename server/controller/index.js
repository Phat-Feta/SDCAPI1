const models = require('../model')
const Promise = require('bluebird');

const controllers = {
    getQuestions: async (req,res)=>{
        // const series = Promise.all([models.getQuestions(urlQuery),])
        try{
            const response = await models.getQuestions(req.query);
            for(let question of response.rows){
                let answers = await models.getAnswers(question.id);
                question.answers= answers.rows;
            }
            res.json(response.rows).status(200)
        } catch(err){
            console.error(err);
            res.status(500);;
        }

    },
    getAnswers: async (req,res)=>{
        // models.getAnswers(req.params.question_id, req.query).then(response=>{
        //     res.json(response.rows).status(200);
        // }).catch(err=>{
        //     console.error(err)
        //     res.status(500);
        // });
    },
    postQuestion: (req,res)=> {
        models.postQuestion(req.body).then(response=>{
            console.log('post successful!')
            res.sendStatus(201);
        }).catch(err=>{
            console.error(err);
            res.sendStatus(500);
        })
    },
    postAnswer: (req,res)=> {

    },
    markQuestionHelpful: (req,res)=> {
        models.markQuestionHelpful(req.params.question_id).then(response=>{
            console.log('question marked helpful!!');
            res.sendStatus(200);
        }).catch(err=>{
            console.error(err);
            res.sendStatus(500)
        });
    },
    markAnswerHelpful: (req,res)=> {
        models.markAnswerHelpful(req.params.answer_id).then(response=>{
            console.log('answer marked helpful!!');
            res.sendStatus(200);
        }).catch(err=>{
            console.error(err);
            res.sendStatus(500)
        });
    },
    reportQuestion: (req,res)=> {
        models.reportQuestion(req.params.question_id).then(response=>{
            console.log('Question reported :O!!');
            res.sendStatus(200);
        }).catch(err=>{
            console.error(err);
            res.sendStatus(500);
        })
    },
    reportAnswer: (req,res)=> {
        models.reportAnswer(req.params.answer_id).then(response=>{
            console.log('Answer reported :O!!');
            res.sendStatus(200);
        }).catch(err=>{
            console.error(err);
            res.sendStatus(500);
        })
    }
}

module.exports = controllers;