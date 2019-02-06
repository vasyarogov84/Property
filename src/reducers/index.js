import { combineReducers } from 'redux';
import currentHouse from './houseReducer';

const rootReducers = combineReducers({
    currentHouse: currentHouse
});

export default rootReducers;