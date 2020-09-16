import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class AddToDo extends Component {

    constructor(props)
    {
        super(props);
        this.state ={
            title: '',
            descript: '',
            complete: false,
        }
        this.HandleNewWork = this.HandleNewWork.bind(this);
        this.AddNewTodo = this.AddNewTodo.bind(this);
    }

    AddNewTodo(e)
    {
        e.preventDefault();
        if (e.target.title.value !== '')
        {
            this.props.newtodo(this.state);
            this.setState({
                title: '',
                descript: ''
            });
        }
    }
    HandleNewWork = (e) => 
    {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    render() {
        const todo = this.state;
        return (
            <div>
                
            <form onSubmit={(e) => {this.AddNewTodo(e)}} className="form-todo">
                <input type="text" name="title" className="todo-title" value={todo.title}
                onChange={(e) =>{this.HandleNewWork(e)}}
                id="title" placeholder="Title work......." ></input>
                <input type="text" className="todo-descript" placeholder="Description ...."
                name='descript' id='discript' value={todo.descript}
                onChange={(e) =>{this.HandleNewWork(e)}}></input>
                <input type="submit" className="submit-btn" value="Submit"></input>
            </form>
            </div>
        )
    }
}

AddToDo.propTypes = {
    newtodo: PropTypes.func.isRequired,
}

export default AddToDo;

