//gets the info of DolarToday
import { FETCH_DOLARTODAY_DATA, FETCH_CRYPTO_CURRENCY_DATA } from './Types.jsx';


//dummy data for bitcoin and etherum
const defaultData = [
    {
        "id": "bitcoin",
        "name": "Bitcoin",
        "symbol": "BTC",
        "rank": "1",
        "price_usd": "573.137",
        "price_btc": "1.0",
        "24h_volume_usd": "72855700.0",
        "market_cap_usd": "9080883500.0",
        "available_supply": "15844176.0",
        "total_supply": "15844176.0",
        "percent_change_1h": "0.04",
        "percent_change_24h": "-0.3",
        "percent_change_7d": "-0.57",
        "last_updated": "1472762067"
    },
    {
        "id": "ethereum",
        "name": "Ethereum",
        "symbol": "ETH",
        "rank": "2",
        "price_usd": "12.1844",
        "price_btc": "0.021262",
        "24h_volume_usd": "24085900.0",
        "market_cap_usd": "1018098455.0",
        "available_supply": "83557537.0",
        "total_supply": "83557537.0",
        "percent_change_1h": "-0.58",
        "percent_change_24h": "6.34",
        "percent_change_7d": "8.59",
        "last_updated": "1472762062"
    }
]
//testing loading animation
//const defaultData=[]



export const dtData = () => {
    return ({
        type: FETCH_DOLARTODAY_DATA,
        payload: '160.541,72'
    });
}

export const cryptoCurrencyData = () => {
    return ({
        type: FETCH_CRYPTO_CURRENCY_DATA,
        payload: defaultData
    });
}