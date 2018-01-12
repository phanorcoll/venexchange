//import { combineReducers, compose } from 'redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import {dolarToday} from './DolarToday.jsx';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    dt: dolarToday
}); 

export default rootReducer;