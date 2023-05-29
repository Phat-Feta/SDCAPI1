const router = require('express').Router();
const controllers = require('./controller')

//all questions
router.get('/qa/questions', controllers.getQuestions);

//all answers of question
router.get('/qa/questions/:question_id/answers', controllers.getAnswers);

//add new question
router.post('/qa/questions', controllers.postQuestion)

//add answer to question
router.post('/qa/questions/:question_id/answers');

//mark question as helpful
router.put('/qa/questions/:question_id/helpful', controllers.markQuestionHelpful)

//report question
router.put('/qa/questions/:question_id/report', controllers.reportQuestion)

//mark answer as helpful
router.put('/qa/answers/:answer_id/helpful', controllers.markAnswerHelpful)

//report answer
router.put('/qa/answers/:answer_id/report', controllers.reportAnswer)


module.exports= router;