import { FETCH_DOLARTODAY_DATA } from '../actions/Types.jsx';

export const dolarToday = (state = '0.00', action) => {
    switch (action.type) {
        case FETCH_DOLARTODAY_DATA:
            return action.payload
        default:
            return state;
    }
}