import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import rootReducer from './store/reducers';
import { compose } from 'redux';
import { stateChangeListener } from './config/fbConfig';

const composeStore = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    name: "marathon-pets"
}) || compose;

const store = createStore(rootReducer, composeStore(applyMiddleware(thunk)));

console.log('store', store, store.dispatch);

stateChangeListener(store);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
