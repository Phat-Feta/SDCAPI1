import mongoose from 'mongoose';
const { Schema } = mongoose;


const AnswersSchema = new Schema({
    id: Number,
    body: String,
    answerer_name: String,
    answerer_email: String,
    photos: [
        {
            url: String
        }
    ]
}, {timestamps:true});

const QuestionSchema = new Schema({
        id: Number,
        body: String,
        asker_name: String,
        asker_email: String,
        reported: Boolean,
        answers: [AnswersSchema]
}, {timestamps:true});


const Q_A_Schema = new Schema({
    product_id: Number,
    questions: [QuestionSchema]
});

mongoose.connect('mongodb://127.0.0.1:27017/myapp');

const QAModel = mongoose.model('qa', Q_A_Schema);



module.exports = {Q_A_Schema};