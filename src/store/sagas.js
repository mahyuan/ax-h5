import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';
import constants from './actionTypes';
import {
    initHomePageAction,
    initProjectListAction,
    initDetailAction,
    getActivityListDataAction,
    initActivityListPageAction,
    initActivityDetailAction,
    initPersonalPage,
} from './actionCreators';

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

function* fetchProList(action) {
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

function* fetchProDetail(action) {
    try {
        let pid = (action.pid).toString;
        let resp = yield axios.get(`/api/get_detail/${pid}`);
        resp = resp.data;
        let info = pid && resp.find(item => (item.id).toString() === pid);                
        yield put(initDetailAction(info));
    } catch (e) {
        console.log('get project lsit data failed', e);
        console.log('get detail by require JSON file.......');
        
        let data = require('../assets/api/project_list.json');
        let pid = (action.pid).toString(); 
        data = data.list;
        let info = pid && data.find(item => (item.id).toString() === pid);                
        yield put(initDetailAction(info));
    }
}

function* fetchActivityListData() {
    try {
        let resp = yield axios.get('/api/activity/list');
        resp = resp.data;
        yield put(getActivityListDataAction(resp));
    } catch (e) {
        console.log('get project lsit data failed', e);
        console.log('get detail by require JSON file.......');
        
        let data = require('../assets/api/activity_info.json');
        data = data.data;
        yield put(initActivityListPageAction(data));
    }
}

function* fetchActivityDetailData(action) {
    try {
        let aid = (action.aid).toString();
        let resp = yield axios.get(`/api/activity/detail${aid}`)
        resp = resp.data;
        let result = aid && resp.find(item => (item.id).toString() === aid);
        yield put(initActivityDetailAction(result));
    } catch (e) {
        console.log('get project lsit data failed', e);
        console.log('get detail by require JSON file.......');
        let resp = require('../assets/api/activity_info.json');
        resp = resp.data
        let aid = (action.aid).toString();        
        let result = aid && resp.find(item => (item.id).toString() === aid);
        yield put(initActivityDetailAction(result));
    }
}

function* fetchPersonData() {
    try {
        let resp = yield axios.get('/api/personal');
        resp = resp.data;
        yield put(initPersonalPage(resp));
    } catch (e) {
        console.log('get project lsit data failed', e);
        console.log('get detail by require JSON file.......');
        
        let data = require('../assets/api/persional.json');
        data = data.data;
        yield put(initPersonalPage(data));
    }
}

function* sagas() {
    yield takeEvery(constants.GET_HOME_DATA, getHomeData);
    yield takeEvery(constants.GET_PRO_LIST, fetchProList);
    yield takeEvery(constants.GET_DETAIL, fetchProDetail);
    yield takeEvery(constants.GET_ACTIVS_DATA, fetchActivityListData);
    yield takeEvery(constants.GET_PERSONAL_INFO, fetchPersonData);
    yield takeEvery(constants.GET_ACTIVITY_DETAIL, fetchActivityDetailData);
}

export default sagas;