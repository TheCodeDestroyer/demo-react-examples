import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import todoApp from './reducers'
import App from './components/App'
import './index.css';

let store = createStore(todoApp, {
    todos: [
        { id: 0, text: 'todo 1', completed: false },
        { id: 1, text: 'todo 2', completed: false },
    ]
});

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
