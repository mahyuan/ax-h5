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

function* fetchList(action) {
    try {
        let resp = yield axios.get('/api/get_projet_list');
        yield put(initProjectListAction(resp.list));

    } catch (e) {
        console.log('get project lsit data failed', e);
        console.log('get list by require JSON file.......');
        let data = require('../assets/api/project_list.json'); 
        data = data.list;
        yield put(initProjectListAction(data));
    }
}

function* fetchDetail(action) {
    try {
        let pid = action.pid;
        let resp = yield axios.get(`/api/get_detail/${pid}`);
        resp = resp.data;
        yield put(initDetailAction(resp));
    } catch (e) {
        console.log('get project lsit data failed', e);
        console.log('get detail by require JSON file.......');
        
        let data = require('../assets/api/project_list.json');
        let pid = action.pid;        
        data = data.list;
        let info = pid && data.find(item => item.id == pid);        
        yield put(initDetailAction(info));
    }
}

function* sagas() {
    yield takeEvery(constants.GET_HOME_DATA, getHomeData);
    yield takeEvery(constants.GET_PRO_LIST, fetchList);
    yield takeEvery(constants.GET_DETAIL, fetchDetail);
}

export default sagas;