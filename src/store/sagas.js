import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';
import constants from './actionTypes';
import {
    initHomePageAction,
    initProjectListAction,
    initDetailAction,
    initActivityListPageAction,
    initActivityDetailAction,
    initPersonalPage,
} from './actionCreators';
let site = require('../config/site.json');
site = site.api;
const app = `${site.protocol}://${site.domain}:${site.port}`;

function* getHomeData() {
    try {
        let resp = yield axios.get(`${app}/api/home_data`, /*{
            withCredentials: true
        }*/ );

        resp = resp.data;

        const action = initHomePageAction(resp.data);
        yield put (action);
    } catch (e) {
        console.log('request failed:', e);
        console.log('get data by require JSON file.......');
        // let homePageData = require('../../server/mook/home_data.json');
        // const action = initHomePageAction(homePageData.data);
        // yield put (action);
    }
}

function* fetchProList(action) {
    try {
        let resp = yield axios.get(`${app}/api/get_projet_list`);
        resp = resp.data;
        yield put(initProjectListAction(resp.list));
    } catch (e) {
        console.log('get project lsit data failed', e);
        console.log('get list by require JSON file.......');
        // let data = require('../../server/mook/project_list.json');
        // data = data.list;
        // yield put(initProjectListAction(data));
    }
}

function* fetchProDetail(action) {
    try {
        let pid = action.pid;

        let resp = yield axios.get(`${app}/api/get_detail/${pid}`);
        resp = resp.data;
        console.log('resp',resp);
        let info = pid && resp.list.find(item => (item.id).toString() === pid);
        yield put(initDetailAction(info));
    } catch (e) {
        console.log('get project lsit data failed', e);
        console.log('get detail by require JSON file.......');

        // let data = require('../../server/mook/project_list.json');
        // let pid = (action.pid).toString();
        // data = data.list;
        // let info = pid && data.find(item => (item.id).toString() === pid);
        // yield put(initDetailAction(info));
    }
}

function* fetchActivityListData() {
    try {
        let resp = yield axios.get(`${app}/api/activity/list`);
        resp = resp.data;
        yield put(initActivityListPageAction(resp.data));
    } catch (e) {
        console.log('get project lsit data failed', e);
        console.log('get detail by require JSON file.......');

        // let data = require('../../server/mook/activity_info.json');
        // data = data.data;
        // yield put(initActivityListPageAction(data));
    }
}

function* fetchActivityDetailData(action) {
    try {
        let aid = action.aid;
        let resp = yield axios.get(`${app}/api/activity/detail/${aid}`);
        resp = resp.data;

        let result = aid && resp.data.find(item => (item.id).toString() === aid);
        yield put(initActivityDetailAction(result));
    } catch (e) {
        console.log('get project lsit data failed', e);
        console.log('get detail by require JSON file.......');
        // let resp = require('../../server/mook/activity_info.json');
        // resp = resp.data
        // let aid = (action.aid).toString();
        // let result = aid && resp.find(item => (item.id).toString() === aid);
        // yield put(initActivityDetailAction(result));
    }
}

function* fetchPersonData() {
    try {
        let resp = yield axios.get(`${app}/api/personal`);
        resp = resp.data;
        yield put(initPersonalPage(resp.data));
    } catch (e) {
        console.log('get project lsit data failed', e);
        console.log('get detail by require JSON file.......');

        // let data = require('../../server/mook/persional.json');
        // data = data.data;
        // yield put(initPersonalPage(data));
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
