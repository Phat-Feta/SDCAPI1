const express = require('express');
const morgan = require('morgan');
const path = require('path');
const router = require('./routes.js')
require('dotenv').config()

const app = express();

//middleware
app.use(express.json());
//app.use(morgan('dev'));
//app.use(express.static(path.join(__dirname,'../loaderio-46d9dcc7b2f9d0a7290202dabf338dd4d.txt')));

app.use('/api/fec2/hr-rf', router);

app.get('/loaderio-46d9dcc7b2f9d0a7290202dabf338d4d',(req,res)=>{
	res.send('loaderio-46d9dcc7b2f9d0a7290202dabf338d4d').status(200);
})

const port = process.env.PORT || 3000;

app.listen(port , (err)=>{
    if(err) console.error('there seems to be a problem with port', err);
    console.log(`Listening in on http://localhost:${port}`);
});

module.exports = app;
