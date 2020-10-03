import React,{ Component} from 'react';
import '../App.css';
import PropTypes from 'prop-types';


class TodoItem extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            todo: props.work,
            isChange: false,
        }
        this.tempTodo = props.work;
        this.isComplete = this.isComplete.bind(this);
        this.CompleteWork = this.CompleteWork.bind(this);
        this.ChangeWork = this.ChangeWork.bind(this);
        this.RemoveWork = props.remove;
        this.ChangeInfo = this.ChangeInfo.bind(this);
    }

    isComplete()
    {
        if (this.state.todo.complete)
        {
            return {textDecoration: "line-through"};
        }
        return {textDecoration: "none"};
    }


    ChangeWork(e)
    {
        this.tempTodo[e.target.name] = e.target.value;
        console.log(e.target.name);
        if (e.target.name === "complete")
        {
            this.props.complete(this.tempTodo);
        }
    }

    CompleteWork()
    {  
        //console.log(e.currentTarget);
        let todoItem = this.tempTodo;
        //console.log(todoItem);
        //todoItem.complete = !todoItem.complete;
        this.setState({
            todo: todoItem,
            isChange: !this.state.isChange,
        });
    
        this.props.complete(todoItem);
    }

    ChangeInfo()
    {
        //console.log('inclick');
        this.setState({
            isChange: !this.state.isChange,
        });
        //this.state.isChange = !this.state.isChange;
    }

    componentDidUpdate(preProps, preState)
    { 
        if (this.props.work !== preProps.work)
        {
            this.setState({
                work: this.props.work,
            })
        }
        // if (this.state.isChange)
        // {
        //    this.ChangeInfo();
        // }
    }

    render()
    {
        const {todo, isChange} = this.state;
        //console.log(todo.complete);
        return (<div className="todo-item">
                <input type="checkbox" name="complete" onChange={(e) =>{this.ChangeWork(e)}} checked={todo.complete}></input>
                
                    {
                        isChange === true? 
                        (
                            <form className="todo-info">
                            <label>
                                Title:       <input type="text" name="title" defaultValue={todo.title} onChange={(e) =>{this.ChangeWork(e)}}></input>
                            </label>
                            <label>
                                Description: <input type="text" name="descript" defaultValue={todo.descript} onChange={(e) =>{this.ChangeWork(e)}}></input>
                            </label>
                            
                            <button type="submit" className="submit-btn" onClick={(e)=>{
                                e.preventDefault();
                                this.CompleteWork(e);
                                }}>Submit</button>
                            </form>
                        ): 
                        (<div className='todo-info'>
                            <h4 style={this.isComplete()}>{todo.title}</h4>
                            <p style={this.isComplete()}>{todo.descript} </p>
                        </div>)
                    }
                <div>
                <button className="remove-btn" onClick={() =>{this.RemoveWork(todo._id)}}>X</button>
                <button className="change-btn" onClick={() =>{this.ChangeInfo()}}>O</button>
                </div>
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