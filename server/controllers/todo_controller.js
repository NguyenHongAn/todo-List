const { render } = require('@testing-library/react');
const express = require('express');
const todoRouter = express.Router();
let log = console.log;

todoRouter.get('/', (req,res,next)=>{

    let todos = [
        {
            "userId": 1,
            "_id": 1,
            "descript": "do something",
            "title": "delectus aut autem",
            "completed": false
          },
          {
            "user_id": 1,
            "_id": 2,
            "descript": "do something",
            "title": "quis ut nam facilis et officia qui",
            "completed": false
          },
          {
            "user_id": 1,
            "_id": 3,
            "descript": "do something",
            "title": "fugiat veniam minus",
            "completed": false
          },
          {
            "user_id": 1,
            "_id": 4,
            "descript": "do something",
            "title": "et porro tempora",
            "completed": true
          },
          {
            "user_id": 1,
            "_id": 5,
            "descript": "do something",
            "title": "laboriosam mollitia et enim quasi adipisci quia prov_ident illum",
            "completed": false
          },
          {
            "user_id": 1,
            "_id": 6,
            "descript": "do something",
            "title": "qui ullam ratione quibusdam voluptatem quia omnis",
            "completed": false
          },
    ];

   res.send(todos);
});

todoRouter.post('/', (req,res,next)=>{
    const newtodo = req.body;

    log(newtodo);
});

todoRouter.put('/', (req,res,next) =>{
  const changedWork = req.body;
  log(changedWork);
});

todoRouter.delete('/:id',(req,res,next) =>{
  const deleteWork = req.params;
  log(deleteWork);
});

module.exports = todoRouter;