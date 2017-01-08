import {createStore,applyMiddleware} from 'redux';
import reducers from './reducers'
import createLogger from 'redux-logger'
import middlewareDemo from './middlewareDemo'
import thunk from 'redux-thunk'


let store = createStore(reducers,applyMiddleware(createLogger,thunk));

export default store