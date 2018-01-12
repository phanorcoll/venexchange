//gets the info of DolarToday
import { FETCH_DOLARTODAY_DATA } from './Types.jsx';
export const dtData = () => {
    return ({
        type: FETCH_DOLARTODAY_DATA,
        payload: '160.541,72'
    });
}