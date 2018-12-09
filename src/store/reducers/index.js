import { combineReducers } from 'redux';
import linkReducer from './link';
import dashboardReducer from './dashboard';

const rootReducer = combineReducers({
    link: linkReducer,
    dashboard: dashboardReducer
});

export default rootReducer;