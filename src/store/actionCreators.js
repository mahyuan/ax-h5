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

// 获取活动列表
export const getActivityListDataAction = () => ({
    type: actionTypes.GET_ACTIVS_DATA
})

// 初始化活动列表
export const initActivityListPageAction = (data) => ({
    type: actionTypes.INIT_ACTIVS_PAGE,
    activ_list: fromJS(data)
})

// 获取活动页详情
export const getActivityDetailAction = (aid) => ({
    type: actionTypes.GET_ACTIVITY_DETAIL,
    aid
})

// 初始化活动详情页数据
export const initActivityDetailAction = (data) => ({
    type: actionTypes.INIT_ACTIVITY_DETAIL,
    activity_details: fromJS(data)
})

export const getPersonalData = () => ({
    type: actionTypes.GET_PERSONAL_INFO
})

export const initPersonalPage = (data) => ({
    type: actionTypes.INIT_PERSONAL_PAGE,
    personal_info: fromJS(data)
})

export const submitApply = (data) => ({
	type: actionTypes.SUBMIT_APPLY,
	data: fromJS(data)
})
