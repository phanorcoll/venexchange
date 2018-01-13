//import { combineReducers, compose } from 'redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { dolarToday } from './DolarToday.jsx';
import { cryptoData } from './CryptoCurrency.jsx';

const rootReducer = combineReducers({
    dt: dolarToday,
    cryptoCurrency: cryptoData
});

export default rootReducer;