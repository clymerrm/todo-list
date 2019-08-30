import React, { Component } from 'react';

import PropTypes from 'prop-types';

import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import {SingleDatePicker} from 'react-dates';


export class AddTodo extends Component {
    state = {
        title: '',
        dueDate: null,
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title, this.state.dueDate);
        this.setState({ title: '', dueDate: null});
    }

    onChange = (e) => this.setState({ title: e.target.value, dueDate: e.target.date });

    render() {
        return (
            <form onSubmit={this.onSubmit} style={{display: 'flex'}}>
                <input
                    type="text"
                    name="title"
                    style={{flex: '10', padding: '5px'}}
                    placeholder="Add Todo..."
                    value={this.state.title}
                    onChange={this.onChange}
                    required={true}
                />
                <SingleDatePicker
                    placeholder="Due Date"
                    date={this.state.dueDate} // momentPropTypes.momentObj or null
                    onDateChange={dueDate => this.setState({ dueDate })} // PropTypes.func.isRequired
                    focused={this.state.focused} // PropTypes.bool
                    onFocusChange={({ focused }) => this.setState({ focused })} // PropTypes.func.isRequired
                    hideKeyboardShortcutsPanel={true}
                    numberOfMonths={1}
                    required={true}
                />
                <input
                    type="submit"
                    value="Create Task"
                    className="btn"
                    style= {{flex: '1'}}
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
