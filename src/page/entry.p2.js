/*
* Entry入口文件
* By LiKuan
* */

import React from 'react';
import ReactDOM from 'react-dom';
import '../comm-scss/short.scss';
import App from './p2/App';
import './p2/one.scss';
import stores from './p2/store.js'
import {createStore,combineReducers,applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import promise from 'redux-promise';

let store = createStore(combineReducers(stores), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(promise));
ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));
