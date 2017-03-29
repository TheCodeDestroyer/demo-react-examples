import { combineReducers } from 'redux'
import todoReducers from './todoReducers'
import visibilityFilterReducers from './visibilityFilterReducers'

const todoApp = combineReducers({
    todoReducers,
    visibilityFilterReducers
});

export default todoApp
