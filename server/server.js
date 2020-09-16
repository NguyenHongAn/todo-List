//import package
const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
let log = console.log;

//import module to handle controler
const todoRouter = require('./controllers/todo_controller');
const userRouter = require('./controllers/user_controller.js');

//midleware import
const CORS = require('./midlewares/CORSconfig');
mongoose.connect(process.env.MongoURI,{
                useNewUrlParser: true, 
                useUnifiedTopology: true
        })
        .then(() =>{log('Connect successful to mongo DB'); });
                            
//config
const app = express();
dotenv.config({path: '../config/.env'});

app.use(CORS.AccessControllAllowOrigin);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false,
}));

//const variable
const PORT = process.env.PORT;
const HOST_NAME = process.env.HOST_NAME;

//switch router for handle request from client
app.use('/todo-list', todoRouter);
app.use('/user', userRouter)

app.listen(PORT,()=> {console.log(`SERVER START: ${HOST_NAME} AT PORT: ${PORT} `)})
