import React from 'react';
import { connect } from 'react-redux';

import { toggleComplete } from './Action';

const TodoList = props => {
    if (!props.todos.length) {
        return <h2>You have nothing here!</h2>;
    } else {
        return (
            <ul>
                {props.todos.map(todo => {
                    return (
                        <li 
                            key={todo.id}
                            onClick={() => {props.toggleComplete(todo.id)}}>
                                {todo.value}
                        </li>
                    )
                })}
            </ul>
        );
    };
};

const mapStateToProps = state => {
    return {
        todos: state.todos
    }
}

export default connect(mapStateToProps, { toggleComplete })(TodoList);