const express = require('express');
const morgan = require('morgan');
const router = require('./routes.js')
require('dotenv').config()

const app = express();

//middleware
app.use(express.json());
app.use(morgan('dev'));

app.use('/api/fec2/hr-rf', router);

const port = process.env.PORT || 3000;

app.listen(port , (err)=>{
    if(err) console.error('there seems to be a problem with port', err);
    console.log(`Listening in on http://localhost:${port}`);
});

module.exports = app;
