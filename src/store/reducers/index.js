import { combineReducers } from 'redux';
import linkReducer from './link';
import dashboardReducer from './dashboard';
import { firebaseReducer } from 'react-redux-firebase';

const rootReducer = combineReducers({
    firebase: firebaseReducer,
    link: linkReducer,
    dashboard: dashboardReducer
});

export default rootReducer;