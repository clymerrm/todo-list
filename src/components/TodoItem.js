import React, {Component} from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

export class TodoItem extends Component {
    getStyle = () => {
        return {
            background: '#F4F4F4',
            padding: '10px 10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none',
        }
    };

    render() {
        const {id, title, completed, dueDate} = this.props.todo;
        let testKey;

        if (completed === true) {
            testKey = 'completed-task-element'
        } else {
            testKey = 'task-element'
        }

        return (
            <div
                style={this.getStyle()}
                id={this.props.todo.id}
                data-test-key={testKey}
                data-test-attribute={this.props.todo.title}
            >
                <button onClick={this.props.delTodo.bind(this, id)}
                        style={{float: 'right', height: '60px'}}
                        data-test-key="delete"
                        id={"delete"}
                >
                    <i
                        className="fa fa-trash-o fa-3x"
                        aria-hidden="true"
                        style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>

                    </i>
                </button>
                <p>
                    <input
                        type="checkbox"
                        onChange={this.props.markComplete.bind(this, id, completed)}
                        checked={completed ? 'checked' : ''}
                        data-test-key='task-completed-checkbox'
                        data-test-attribute={completed}
                    />
                    {' '}
                    <span data-test-key={'task-name'}>{title}</span>
                    <br/>
                    <b>Due Date:</b>
                    <span data-test-key='task-due-date'>
                        {moment(dueDate).format('YYYY-MM-DD')}
                    </span>
                </p>
            </div>
        )
    }
}

// PropTypes
TodoItem.PropTypes = {
    todos: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
}


export default TodoItem;
