import {TOGGLE_TODO, ADD_TODO} from '../actions/action';

const todo = (_todo = {}, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                id: action.id,
                text: action.text,
                completed: false
            };
        case TOGGLE_TODO:
            if (_todo.id !== action.id) {
                return _todo
            }

            return Object.assign({}, _todo, {
                completed: !_todo.completed
            });

        default:
            return _todo
    }
};

const todos = (_todos = [], action) => {
    switch (action.type) {
        case ADD_TODO:
            return [
                ..._todos,
                todo(undefined, action)
            ];
        case TOGGLE_TODO:
            return _todos.map(t =>
                todo(t, action)
            );
        default:
            return _todos
    }
};

export default todos
