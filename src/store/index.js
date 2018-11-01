import { createStore, compose, applyMiddleware } from 'redux';
import saga from 'redux-saga';
import reducer from './reducer';

const componseEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, componseEnhancers(
    applyMiddleware(saga)
))

export default store;
