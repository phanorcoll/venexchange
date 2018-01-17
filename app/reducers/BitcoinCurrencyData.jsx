import { FETCH_BITCOIN_CURRENT_DATA } from '../actions/Types.jsx';

export const bitcoinCurrencyData = (state = {}, action) => {
    switch (action.type) {
        case FETCH_BITCOIN_CURRENT_DATA:
            return action.payload
        default:
            return state;
    }
}