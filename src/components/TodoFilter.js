import React, { Component } from 'react';
import Select from 'react-select';


const filterOptions = [
    { value: 'all', label: 'All Todos'},
    { value: 'completed', label: 'Completed Todos'},
    { value: 'open', label: 'Open Todos'},
];
const sortOptions = [
    { value: 'dueDateSoonest', label: 'By Due Date - Soonest First'},
    { value: 'dueDateReverse', label: 'By Due Date - '}
]

export class TodoFilter extends Component {

    state = {
        selectedOption: '',
    };

    handleChange = selectedOption => {
        this.setState({ selectedOption });
        console.log(`Option selected:`, selectedOption);
    };
    render() {
        return (
            <Select
                defaultValue={{value: 'all', label: 'All Todos'}}
                onChange={this.handleChange}
                options={filterOptions}
            />
        );
    }
}

export default TodoFilter;
