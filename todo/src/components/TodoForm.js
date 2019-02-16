import React from 'react';

import TodoList from './TodoList';

const TodoForm = () => {
    return (
        <div>
            <form onSubmit={() => {}}>
                <input 
                    type="text"
                    placeholder="Enter new Todo here"
                />
                <button
                    type="submit">Add Todo
                </button>
            </form>

            <div>
                <TodoList />
            </div>
        </div>
    );
};

export default TodoForm;