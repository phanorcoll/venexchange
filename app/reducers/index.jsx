//import { combineReducers, compose } from 'redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { dolarToday } from './DolarToday.jsx';
import { cryptoData } from './CryptoCurrency.jsx';
import { bitcoinHistory } from './BitCoinHistory.jsx';

const rootReducer = combineReducers({
    dt: dolarToday,
    cryptoCurrency: cryptoData,
    bitcoinHistory: bitcoinHistory
});

export default rootReducer;