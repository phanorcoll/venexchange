//gets the info of DolarToday
import axios from 'axios';
import { FETCH_DOLARTODAY_DATA, FETCH_CRYPTO_CURRENCY_DATA } from './Types.jsx';
import { dolartodayData, defaultData } from '../data/dummyData.jsx';
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