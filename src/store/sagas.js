import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';
import  homeActionTypes from '../pages/home/store/actionTypes';
import  projectListActionTypes  from '../pages/projectList/store/actionTypes';
import  detailActionTypes  from '../pages/projectDetail/store/actionTypes';

import { initHomePageAction } from '../pages/home/store/actionCreators';
import { initProjectListAction } from '../pages/projectList/store/actionCreators';
import { initDetailAction } from '../pages/projectDetail/store/actionCreators';

const constants = Object.assign({}, homeActionTypes, projectListActionTypes, detailActionTypes);



function* getHomeData() {
    try {
        const resp = yield axios.get('/api/home_data');
        console.log('resp', resp);
        const action = initHomePageAction(resp.data);
        yield put (action);
    } catch (e) {
        console.log('request failed:', e);
        console.log('get data by require JSON file.......');
        let homePageData = require('../assets/api/home_data.json');
        const action = initHomePageAction(homePageData.data);
        yield put (action);
    }
}

function* fetchList() {
    try {
        let resp = yield axios.get('/api/get_projet_list');
        let action = initProjectListAction(resp.list);
        yield put(action);

    } catch (e) {
        console.log('get project lsit data failed', e);
        console.log('get list by require JSON file.......');
        let data = require('../assets/api/project_list.json'); 
        data = data.list;
        let action = initProjectListAction(data);
        yield put(action);
    }
}

function* fetchDetail() {
    try {
        let pro_id = this.query.id;
        let resp = yield axios.get(`/api/get_detail/${pro_id}`);
        resp = resp.data;
    } catch (e) {
        console.log('get project lsit data failed', e);
        console.log('get detail by require JSON file.......');
        let data = require('../assets/api/project_list.json'); 
        data = data.list;
        let action = initDetailAction(data);
        yield put(action);
    }
}

function* sagas() {
    yield takeEvery(constants.GET_HOME_DATA, getHomeData);
    yield takeEvery(constants.GET_PRO_LIST, fetchList);
    yield takeEvery(constants.GET_DETAIL, fetchDetail);
}

export default sagas;