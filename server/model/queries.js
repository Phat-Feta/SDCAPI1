// const pg = require('pg')
const db = require('../../db')

////creat index example
//CREATE INDEX photo_answerid_index ON Photo USING HASH (answer_id);

//helper queries
const queries = {
    queryIntoPhotos: (id,data)=>{
        const queryStatement = `INSERT INTO Photo (answer_id,url) values \ 
        (${id}, '${data.photo_url}');`;
        return db.query(queryStatement);
    },
    selectPhotos:(id)=> {
        const queryStatement = `Select * from Photo where answer_id=${id}`;
        return db.query(queryStatement);
    },
    recentAnswerIDEntry: () =>{
        const statement=`select id from Answer order by id desc limit 1;`
        return db.query(statement);
    }
}

module.exports = queries;