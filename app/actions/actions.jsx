//gets the info of DolarToday
import axios from 'axios';
import numeral from 'numeral';
import moment from 'moment';
import _ from 'lodash';
import { FETCH_DOLARTODAY_DATA, FETCH_CRYPTO_CURRENCY_DATA, FETCH_BITCOIN_HISTORY_DATA } from './Types.jsx';
import { dolartodayData, defaultData, bitcoinHistoryData } from '../data/dummyData.jsx';

export const dtData = () => {
    /* const request = axios.get('https://s3.amazonaws.com/dolartoday/data.json');
    return(dispatch)=>{
        request.then(({data})=>{
            dispatch({
                type: FETCH_DOLARTODAY_DATA,
                payload: data
            })
        });
    } */

    return ({
        type: FETCH_DOLARTODAY_DATA,
        payload: dolartodayData
    });
}

export const cryptoCurrencyData = () => {
    /* const request = axios.get('https://api.coinmarketcap.com/v1/ticker/?limit=2');
    return (dispatch) => {
        request.then(({ data }) => {
            dispatch({
                type: FETCH_CRYPTO_CURRENCY_DATA,
                payload: data
            })
        });
    } */
    return ({
        type: FETCH_CRYPTO_CURRENCY_DATA,
        payload: defaultData
    });
}

export const bitcoinHistory = () => {
    /* const request = axios.get('https://api.coindesk.com/v1/bpi/historical/close.json');
    return (dispatch) => {
        request.then(({ data }) => {
            let btPrice=[]
            _.map(data["bpi"], (k, v) => {
                btPrice.push([moment(v).format('DD/MM/YY'), k])
            });
            console.log(btPrice)
            dispatch({
                type: FETCH_BITCOIN_HISTORY_DATA,
                payload: btPrice
            })
        });
    } */

    let btPrice=[]
    _.map(bitcoinHistoryData["bpi"], (k, v) => {
        btPrice.push([moment(v).format('DD/MM/YY'), k])
    });

    return ({
        type: FETCH_BITCOIN_HISTORY_DATA,
        payload: btPrice
    });
}