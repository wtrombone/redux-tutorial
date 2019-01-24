import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { combineReducers, createStore } from 'redux';

function productsReducer(state = [], action) {
    return state;
}

function userReducer(state = '', action) {
    switch (action.type) {
        case 'updateUser':
            return action.payload;
        default:
        return state;
    }    
}

const allReducers = combineReducers({
    products: productsReducer,
    user: userReducer
});

const store = createStore(
    allReducers, {
        products: [{ name: 'iPhone' }],
        user: 'Michael'
    },
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

console.log(store.getState())

const updateUserAction = {
    type: 'updateUser',
    payload: {
        user: 'John'
    }
};

store.dispatch(updateUserAction)

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
