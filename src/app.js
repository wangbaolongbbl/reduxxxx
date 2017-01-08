import {createStore} from 'redux';
import React, {Component, PropTypes} from 'react'
import ReactDOM, {render} from 'react-dom'
import {Provider, connect} from 'react-redux'
import Counter from './components/Counter'
import store from './redux/store'
import RootApp from './containers/RootApp'


let root = document.getElementById('app');
render(
    <Provider store={store}>
        <RootApp/>
    </Provider>
    , root)





