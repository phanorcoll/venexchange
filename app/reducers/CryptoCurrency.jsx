import { FETCH_CRYPTO_CURRENCY_DATA } from '../actions/Types.jsx';

export const cryptoData = (state = [], action) => {
    switch (action.type) {
        case FETCH_CRYPTO_CURRENCY_DATA:
            return action.payload
        default:
            return state;
    }
}