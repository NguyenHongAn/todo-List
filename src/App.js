import React from 'react';
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import TodoList from './Components/TodoList';
import './App.css';
import Header from './Components/Header';
import AddTodo from './Components/AddToDo'
import About from './Components/About';
import Axios from 'axios';
import SignIn from './Components/SignIn';
import SignUp from './Components/SignUp';


let log = console.log;
class App extends React.Component {

  constructor(props)
  {
    super(props);
    this.state = {
        todos: [],
      };
    this.serverURL = "http://localhost:8000";
    
        this.CompleteWork = this.CompleteWork.bind(this);
        this.RemoveWork = this.RemoveWork.bind(this);
        this.HandleNewWork = this.HandleNewWork.bind(this);
  }

  async componentDidMount()
  {
    try {
      const response = await Axios.get(`/todo-list`);
      let todoList = response.data;
      this.setState({
        todos: todoList,
      });
      
    } catch (error) {
      console.log(error);
    }
    
  }
  //toggle completed base on id of todoItem
  CompleteWork = async (todo) =>
    {
      let todos = this.state['todos'];
      todo.complete = !todo.complete;
      let response = await Axios.put(`/todo-list`, todo);
      log({put: response});
      if (response.status !== 200)
      {
        //hadle error
        log(response.statusText);
      }
      todos.map(eachTodo =>{
        if (eachTodo._id === todo._id)
        {
          return todo;
        }
        return eachTodo;
      });
      
      this.setState({todos: todos});
    }

    //handle remove todoItem base on id of todoItem
    async RemoveWork(id)
    {
        let todos = this.state['todos'];
        let response = await Axios.delete(`/todo-list/${id}`);
        if(response.status!== 200)
        {
          //hadle error 
          console.log(response.msg);

        }
        this.setState({todos: todos.filter(todo=>{
            return todo._id !== id;
        })});
    }

    async HandleNewWork(todo)
    {
      try{
        let newtodo = Object.assign({},todo);
        //newtodo["_id"] = uuidv4();
        //console.log(newtodo);
        let res = await Axios.post('/todo-list',newtodo);
        if(res.status !== 200)
        {
          console.log(res.msg);
        }
        newtodo = res.data;
        this.setState({
          todos: [...this.state.todos, newtodo],
        });

      }catch(error)
      {
        console.log(error);
      }
        
    }

    render()
    {
      //let history = useHistory();
      return (
        <div className="App container">
        <Router>
          <Switch>
            <Redirect exact from="/" to="user/signin"/>      
          <Route path="user/signin" component={SignIn}> 
            
          </Route>
          <Route path="user/signup" component={SignUp}>
            
          </Route>
          
          <Route exact path="/todo-list" render={(props) => (
            <React.Fragment>
              
                <Header></Header>
                <TodoList complete={this.CompleteWork} remove={this.RemoveWork} data={this.state}></TodoList>
                <AddTodo newtodo={this.HandleNewWork}></AddTodo>
              
            </React.Fragment>
          )}></Route>
          <Route path='/about' component={About}></Route>
          
        </Switch>
        </Router>
        </div>
      );
    }  
}

export default App;
