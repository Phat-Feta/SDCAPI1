const { query } = require('express');
const models = require('../model');
const queries = require('../model/queries.js')
const helpers = require('../model/helpers.js')

const Promise = require('bluebird');

const controllers = {
    getQuestions: async (req,res)=>{
        try {
            const response = await models.getQuestions(req.query);
            for(let question of response.rows){
                let answers = await models.getAnswers(question.question_id);
                question.answers= helpers.transformAnswer(answers.rows);
            }
            // console.log(response.rows)
            res.send(response.rows).status(200)
            
        } catch(err) {
            console.error(err);
            res.sendStatus(500);;
        }
    },
    getAnswers: async (req,res)=>{
        try{
            const response = await models.getAnswers(req.params.question_id,req.query);
            res.json(response.rows).status(200)
        } catch(err){
            console.error(err);
            res.sendStatus(500);;
        }

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
    postAnswer: async (req,res)=> {
        try{
            const response = await models.postAnswer(req.params.question_id,req.body)
            const {rows} = await queries.recentAnswerIDEntry();
            // console.log(rows);
            for(let photo of req.body.photos){
                await queries.queryIntoPhotos(rows[0].id,photo)
                console.log(photo)
            }
            res.sendStatus(201);
        } catch(err){
            console.error(err);
            res.sendStatus(500);
        }
    },
    markQuestionHelpful: (req,res)=> {
        models.markQuestionHelpful(req.params.question_id).then(response=>{
            console.log('question marked helpful!!');
            res.sendStatus(204);
        }).catch(err=>{
            console.error(err);
            res.sendStatus(500)
        });
    },
    markAnswerHelpful: (req,res)=> {
        models.markAnswerHelpful(req.params.answer_id).then(response=>{
            console.log('answer marked helpful!!');
            res.sendStatus(204);
        }).catch(err=>{
            console.error(err);
            res.sendStatus(500)
        });
    },
    reportQuestion: (req,res)=> {
        models.reportQuestion(req.params.question_id).then(response=>{
            console.log('Question reported :O!!');
            res.sendStatus(204);
        }).catch(err=>{
            console.error(err);
            res.sendStatus(500);
        })
    },
    reportAnswer: (req,res)=> {
        models.reportAnswer(req.params.answer_id).then(response=>{
            console.log('Answer reported :O!!');
            res.sendStatus(204);
        }).catch(err=>{
            console.error(err);
            res.sendStatus(500);
        })
    }
}

module.exports = controllers;