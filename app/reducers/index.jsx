//import { combineReducers, compose } from 'redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { dolarToday } from './DolarToday.jsx';
import { bitcoinHistory } from './BitCoinHistory.jsx';
import { bitcoinCurrencyData } from './BitcoinCurrencyData.jsx';
import { ethereumCurrentData } from './EthereumCurrentData.jsx';

const rootReducer = combineReducers({
    dt: dolarToday,
    bitcoinHistory: bitcoinHistory,
    bitcoinCurrentData: bitcoinCurrencyData,
    ethereumCurrentData: ethereumCurrentData
});

export default rootReducer;