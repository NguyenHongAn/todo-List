const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// create schema for 
const todoSchema = new Schema({
    userId:{
        type: String,
    },
    title: String,
    descript: String,
    complete: Boolean,
});

// add midleware to generate _id 
// todoSchema.pre("save", function(next){
//     this._id = mongoose.Types.ObjectId();
//     console.log(this._id);
// });
//create model 
const todoModel = mongoose.model('todoList', todoSchema);

// export model
module.exports = todoModel;