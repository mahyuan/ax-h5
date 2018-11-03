import { takeEvery, put } from 'redux-saga/effects';
import actionTypes from './actionTypes';
import axios from 'axios';
import { initProjectListAction } from './actionCreators';

function* fetchList() {
    try {
        let resp = yield axios.get('/api/get_projet-list');
        let action = initProjectListAction(resp.list);
        yield put(action);

    } catch (e) {
        console.log('get project lsit data failed', e);
        console.log('get list by require JSON file.......');
        let data = require('../../../assets/api/project_list.json');        
        data = data.list;
        let action = initProjectListAction(data);
        yield put(action);
    }
}

const projectListSagas = function* () {
    yield takeEvery(actionTypes.GET_PRO_LIST, fetchList)
}

export default projectListSagas;
