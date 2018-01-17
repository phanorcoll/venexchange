import { FETCH_ETHEREUM_CURRENT_DATA } from '../actions/Types.jsx';

export const ethereumCurrentData = (state = {}, action) => {
    switch (action.type) {
        case FETCH_ETHEREUM_CURRENT_DATA:
            return action.payload
        default:
            return state;
    }
}