export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_COMPLETED = 'TOGGLE_COMPLETED';

let id = 0;

export const addTodo = todo => {
    return {
        type: ADD_TODO,
        payload: {
            value: todo,
            id: id++,
            completed: false
        }
    };
};

export const toggleComplete = id => {
    return {
        type: TOGGLE_COMPLETED,
        payload: id
    };
};