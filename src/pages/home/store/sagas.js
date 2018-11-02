import { takeEvery, put } from 'redux-saga/effects';
import actionTypes from './actionTypes';
import axios from "axios";
import { initHomePageAction } from './actionCreators';

function* getHomeData() {
    try {
        const resp = yield axios.get('/api/home_data');
        console.log('resp', resp);
        const action = initHomePageAction(resp.data);
        yield put (action);
    } catch (e) {
        console.log('request failed:', e);
        console.log('get data by require JSON file.......');
        let homePageData = require('../../../assets/api/home_data.json');        
        const action = initHomePageAction(homePageData.data);
        yield put (action);
    }
}

function* homePageSaga() {
    yield takeEvery(actionTypes.GET_HOME_DATA, getHomeData)
}

export default homePageSaga;
