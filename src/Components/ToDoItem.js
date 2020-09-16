import React,{ Component} from 'react';
import '../App.css';
import PropTypes from 'prop-types';


class TodoItem extends Component
{
    constructor(props)
    {
        super(props);
        this.state = props.work;
        this.isComplete = this.isComplete.bind(this);
        this.CompleteWork = props.complete;
        this.RemoveWork = props.remove;
    }

    isComplete()
    {
        if (this.state.complete)
        {
            return {textDecoration: "line-through"};
        }
        return {textDecoration: "none"};
    }

    componentDidUpdate(preProps)
    {
        if (this.props.work !== preProps.work)
        {
            this.setState({
                work: this.props.work,
            })
        }
    }

    render()
    {
        const todoInfo = this.state;
        return (<div className="todo-item" >
                <input type="checkbox" onChange={() =>{this.CompleteWork(todoInfo._id)}}></input>
                <div className="todo-info">
                    <h5 style={this.isComplete()}>{todoInfo.title}</h5>
                    <p style={this.isComplete()}>{todoInfo.descript} </p>
                </div>
                
                <button className="remove-btn" onClick={() =>{this.RemoveWork(todoInfo._id)}}>x</button>
            
        </div>
        );
        
    }
}

TodoItem.propTypes ={
    work:   PropTypes.object.isRequired,
    complete:  PropTypes.func.isRequired,
    remove:  PropTypes.func.isRequired,
}

export default TodoItem;