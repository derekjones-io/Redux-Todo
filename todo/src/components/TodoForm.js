import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addTodo } from './Action';

class TodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todo: ''
        }
    };

    inputHandler = e => {
        this.setState({
            todo: e.target.value
        })
    };

    changeHandler = () => {
        this.props.addTodo(this.state.input)
        this.setState({
            todo: ''
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={e => {e.preventDefault()}}>
                    <input 
                        type="text"
                        placeholder="Enter new Todo here"
                        name="todo"
                        onChange={this.inputHandler}
                        value={this.state.todo}
                    />
                    <button
                        onClick={() => this.changeHandler()}
                        type="submit">Add Todo
                    </button>
                </form>
            </div>
        );
    };
};

const mapStateToProps = state => {
    return {};
};

export default connect(mapStateToProps, { addTodo })(TodoForm);