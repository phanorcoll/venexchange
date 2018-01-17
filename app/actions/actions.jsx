//gets the info of DolarToday
import axios from 'axios';
import numeral from 'numeral';
import moment from 'moment';
import _ from 'lodash';
import { FETCH_DOLARTODAY_DATA, FETCH_BITCOIN_HISTORY_DATA, FETCH_BITCOIN_CURRENT_DATA, FETCH_ETHEREUM_CURRENT_DATA } from './Types.jsx';
import { dolartodayData, bitcoinHistoryData, bitcoinData, ethereumData } from '../data/dummyData.jsx';

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


//Gets the current info for bitcoin
export const bitcoinCurrentData = () => {
    return ({
        type: FETCH_BITCOIN_CURRENT_DATA,
        payload: bitcoinData
    });
}

//Gets the current info for Ethereum
export const ethereumCurrentData = () => {
    /* const request = axios.get('https://apiv2.bitcoinaverage.com/indices/global/ticker/ETHUSD');
    return(dispatch)=>{
        request.then(({data})=>{
            dispatch({
                type: FETCH_ETHEREUM_CURRENT_DATA,
                payload: data
            })
        });
    } */
    return ({
        type: FETCH_ETHEREUM_CURRENT_DATA,
        payload: ethereumData
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

    let btPrice = [
        ['2017-12-15', 17601.9438, 85452.54],
        ['2017-12-16', 12629.8138, 20542.87],
        ['2017-12-17', 24785.40, 13619.0288]
    ]
    /*  _.map(bitcoinHistoryData["bpi"], (k, v) => {
         btPrice.push([moment(v).format('DD/MM/YY'), k])
     }); */

    return ({
        type: FETCH_BITCOIN_HISTORY_DATA,
        payload: btPrice
    });
}