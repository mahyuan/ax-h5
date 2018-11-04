import actionTypes from './actionTypes';
import { fromJS } from 'immutable';

export const getHomeDataAction = () => ({
    type: actionTypes.GET_HOME_DATA
})

export const initHomePageAction = (data) => ({
    type: actionTypes.INIT_HOME_PAGE,
    data
})

export const getProjectListAction = () => ({
    type: actionTypes.GET_PRO_LIST
})

export const initProjectListAction = (data) => ({
    type: actionTypes.INIT_PRO_LIST,
    list: fromJS(data),
})

export const getDetailDataAction = (pid) => ({
    type: actionTypes.GET_DETAIL,
    pid
})

export const initDetailAction = (details) => ({
    type: actionTypes.INIT_PRO_DETAIL,
    details: fromJS(details)
})
