import changeBGColorReducer from './changeColorReducer';
import changeTXColorReducer from './changeTXColorReducer';
import changeCodeColorReducer from './changeCodeColorReducer';
import changeUserState from './changeUserState';
import changeAdminState from './changeAdminState';
import { combineReducers } from 'redux';

const allReducer = combineReducers({
    BGcolor : changeBGColorReducer,
    TXcolor : changeTXColorReducer,
    codeBGcolor : changeCodeColorReducer,
    userstate : changeUserState,
    adminstate : changeAdminState,
});

export default allReducer