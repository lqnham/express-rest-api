const express = require('express') //Import Express
const bodyParser = require('body-parser') //Import json magical :D
const logger = require('./config/logs/log') //Import logger with winston
const db = require('./config/db/db') //Import DB using Mongo
const userRoute = require('./routes/user') //Import routers user
const contactRoute = require('./routes/contact') //Import routers contact
require('dotenv').config({path: './config/.env'}); 

const app = express()
const PORT = process.env.PORT

//Process bodyparser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

//Declare routes
app.use('/users', userRoute);
app.use('/contact', contactRoute);

//default home page
app.get('/', (req, res) => {
    res.send('Coffee Station home page');
})


//port listening
app.listen(PORT , () =>{
    logger.info('Run at port: '+  PORT);
});