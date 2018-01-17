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

    /* const request = axios.get('https://apiv2.bitcoinaverage.com/indices/global/history/BTCUSD?period=daily&?format=json');
    return (dispatch) => {
        request.then(({ data }) => {
            let btPrice=[]
            _.map(data, (k, v) => {
                //btPrice.push([moment(v).format('DD/MM/YY'), k])
                btPrice.push([moment(k['time']).format("MMM Do"),k['average']])
            });
            //console.log(btPrice)
            dispatch({
                type: FETCH_BITCOIN_HISTORY_DATA,
                payload: btPrice
            })
        });
    } */

    let btPrice = [
        ['2018-01-17',10253.73,859.7379],
        ['2018-01-17',10304.90,858.8635],
    ]
    /*  _.map(bitcoinHistoryData, (k, v) => {
         btPrice.push([moment(k['time']).format("MMM Do"),k['average']])
     }); */

    return ({
        type: FETCH_BITCOIN_HISTORY_DATA,
        payload: btPrice
    });
}