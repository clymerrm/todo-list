import React, { Component } from 'react';

import PropTypes from 'prop-types';

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";


export class AddTodo extends Component {
    state = {
        title: '',
        dueDate: new Date()
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title, this.state.dueDate);
        this.setState({ title: '', dueDate: new Date()});
    }

    onChange = (e) => this.setState({ title: e.target.value});

    handleChange = date => this.setState({ dueDate: date})

    render() {
        return (
            <form onSubmit={this.onSubmit} style={{display: 'grid', border: '5px solid #F4F4F4', padding: '5px', background: '#F4F4F4'}}>
                <label>
                    Task Name:
                </label>
                <input
                    type="text"
                    name="title"
                    style={{flex: '10', padding: '5px'}}
                    placeholder="Add Todo..."
                    value={this.state.title}
                    onChange={this.onChange}
                    required={true}
                    data-test-key="task-name-input"
                />
                <label>
                    Due Date:
                </label>
                <DatePicker
                    selected={this.state.dueDate}
                    onChange={this.handleChange}
                    required={true}
                    data-test-key="task-due-date"
                    id={'task-due-date'}
                />
                <input
                    type="submit"
                    value="Create Task"
                    className="btn"
                    style= {{flex: '1'}}
                    data-test-key="create-task-button"
                />
            </form>
        )
    }
}

// PropTypes
AddTodo.PropTypes = {
    addTodo: PropTypes.func.isRequired
}

export default AddTodo;
