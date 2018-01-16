import { FETCH_BITCOIN_HISTORY_DATA } from '../actions/Types.jsx';

export const bitcoinHistory = (state = [], action) => {
    switch (action.type) {
        case FETCH_BITCOIN_HISTORY_DATA:
            return action.payload
        default:
            return state;
    }
}