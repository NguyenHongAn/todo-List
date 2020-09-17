const { default: Axios } = require('axios');
// import package 
const express = require('express');
const todoRouter = express.Router();
let log = console.log;

//get todoModel
const todoModel = require('../models/todo_models');

todoRouter.get('/', (req,res,next)=>{
    // create array to store to do list
    let todos = [];
    //get from database 
    todoModel.find({}, (error, docs) =>{
      //controller error occur
      if (error)
      {
        res.status(404);
        res.send('Can not find any works');
      }
      //copy docs to array of todo 
      else
      {
        todos = [...docs];
      res.send(todos);
      }
      
    });
    
});

todoRouter.post('/',(req,res,next)=>{
    const newtodo = req.body;
    newtodo.userId = 1;
    const newWork = new todoModel(newtodo);
    newWork.save((error, docs) =>{
      if (error)
      {
        res.status(404);
        res.send("Eoor occur when change value");
      }
      else
      {
        res.send(docs);
      }
    });
});

todoRouter.put('/', (req,res,next) =>{
  const changedWork = req.body;
  
  if (changedWork._id.match(/^[0-9a-fA-F]{24}$/))
  {
    todoModel.findByIdAndUpdate(changedWork._id,changedWork,(error, docs)=>{
      if(error)
      {
        res.status(404);
        res.send("Eoor occur when change value");
      }
      else
      {
        res.send(docs);
      }
      
    });
  } 
  else
  {
    res.status(404);
    res.send("Eoor occur when change value");
  }
});

todoRouter.delete('/:id',(req,res,next) =>{
  const id = req.params.id;
  log({id: id});
  if (id.match(/^[0-9a-fA-F]{24}$/)) 
  {
    todoModel.findByIdAndDelete(id, (error, docs)=>{
      if (error)
      {
        res.status(404);
        res.send("Eoor occur when delete value");
      }
      else
      {
        log({delete: docs});
        res.send({msg: "Delete Success"});
      //res.status(200);
      }
      
      
    });
  }
  else
  {
    res.status(404);
  res.send({msg: "Error when finding related work"});
  }
  
});

module.exports = todoRouter;