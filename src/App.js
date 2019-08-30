// Importing Modules
import React, { Component } from 'react';
import axios from 'axios';

// Importing React-Router
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Importing Components
import Todos from './components/Todos';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
import TodoFilter from './components/TodoFilter'

import './App.css';

class App extends Component {
  state = {
    todos: []
  };

  componentDidMount() {
    this.returnAllTodos()
  };

  returnAllTodos() {
      axios.get('http://localhost:8080/todos?_sort=completed,id&order=asc,asc')
          .then(res => this.setState({ todos: res.data}));
  }

  markComplete = (id, completed) => {
    let futureCompleted;
    if (completed === false) {futureCompleted = true} else {futureCompleted = false}
    axios.patch(`http://localhost:8080/todos/${id}`, {completed: futureCompleted})
        .then(this.returnAllTodos())
  };

  delTodo = (id) => {
    axios.delete(`http://localhost:8080/todos/${id}`)
      .then(res => this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)]}));
  };

  addTodo = (title, date) => {
    axios.post('http://localhost:8080/todos/', {
      title: title,
      completed: false,
      dueDate: date,
    })
        .then(res => this.setState({
          todos: [...this.state.todos, res.data]
        }));
  };

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <br />
            <Route exact path="/" render={props => (
              <React.Fragment>
                <AddTodo addTodo={this.addTodo} />
                <TodoFilter />
                <Todos todos={this.state.todos} markComplete = {this.markComplete} delTodo={this.delTodo}/>
              </React.Fragment>
            )} />

            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
