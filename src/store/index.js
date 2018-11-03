import { createStore, compose, applyMiddleware } from 'redux';
import reducer from './reducer';
import createSagaMiddleware from 'redux-saga';
import homePageSaga from '../pages/home/store/sagas';
import projectListSaga from '../pages/projectList/store/sagas';

const sagaMiddleware = createSagaMiddleware();
const componseEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = componseEnhancers(applyMiddleware(sagaMiddleware));
const store = createStore(reducer, enhancer);

sagaMiddleware.run(homePageSaga);
sagaMiddleware.run(projectListSaga);

export default store;
