// Importing Modules
import React, { Component } from 'react';
import axios from 'axios';

// Importing React-Router
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Importing Components
import Todos from './components/Todos';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';

import './App.css';
import Select from "react-select";

const filterOptions = [
    { value: 'all', label: 'All Todos'},
    { value: 'completed', label: 'Completed Todos'},
    { value: 'open', label: 'Open Todos'}
];

class App extends Component {
  state = {
    todos: [],
    selectedOption: ''
  };

  componentDidMount() {
    this.returnTodos()
  };

  componentDidUpdate(prevProps: Readonly<P>, prevState: Readonly<S>, snapshot: SS): void {
      if(prevState.selectedOption !== this.state.selectedOption) {
          this.returnTodos()
      }
  }

  returnTodos() {
      let filter;
      if (this.state.selectedOption.value === 'open') {
          filter = '&completed=false'
      } else if (this.state.selectedOption.value === 'completed') {
          filter = '&completed=true'
      } else{
          filter = ''
      }
      axios.get('http://0.0.0.0:8080/todos?_sort=completed,id&_order=asc,desc' + filter )
          .then(res => this.setState({todos: res.data}));
  }

  markComplete = (id, completed) => {
    let futureCompleted;
    if (completed === false) {futureCompleted = true} else {futureCompleted = false}
    axios.patch(`http://0.0.0.0:8080/todos/${id}`, {completed: futureCompleted})
        .then(this.returnTodos())
  };

  delTodo = (id) => {
    axios.delete(`http://0.0.0.0:8080/todos/${id}`)
      .then(res => this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)]}));
  };

  addTodo = (title, date) => {
    axios.post('http://0.0.0.0:8080/todos/', {
      title: title,
      completed: false,
      dueDate: date,
    })
        .then(res => {
                this.setState({todos: [...this.state.todos, res.data]});
                this.returnTodos();
            }
        );
  };

  filterTodos = selectedOption => {
    this.setState({ selectedOption });
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
                  <Select
                      defaultValue={{value: 'all', label: 'All Todos'}}
                      onChange={this.filterTodos}
                      options={filterOptions}
                      data-test-key="todo-filter"
                      id="todo-filter"
                  />
                <Todos todos={this.state.todos} markComplete = {this.markComplete} delTodo={this.delTodo}/>
              </React.Fragment>
            )} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
