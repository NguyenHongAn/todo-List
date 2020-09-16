import React,{ Component } from 'react';
import TodoItem from './ToDoItem';
import PropTypes from 'prop-types';

class TodoList extends Component
{
    constructor(props)
    {
         super(props);
         this.state = props.data;
    }

    componentDidUpdate(preProps)
    {   
        if (this.props.data !== preProps.data)
        {
            this.setState(this.props.data);
            
        }
    }

    render()
    {
        const todoList = this.state['todos'];
        return todoList.map(todo => {
            return <TodoItem key={todo._id} work={todo} complete={this.props.complete} remove={this.props.remove}></TodoItem>;
        })
    }
}

TodoList.propTypes = {
    complete: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired,
    data: PropTypes.object.isRequired,
}

export default TodoList;