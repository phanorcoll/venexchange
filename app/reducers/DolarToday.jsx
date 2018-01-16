import { FETCH_DOLARTODAY_DATA } from '../actions/Types.jsx';

export const dolarToday = (state = {}, action) => {
    switch (action.type) {
        case FETCH_DOLARTODAY_DATA:
            return action.payload
        default:
            return state;
    }
}