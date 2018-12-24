import actionTypes from './actionTypes';
import { fromJS } from 'immutable';

/**
 * 获取首页数据
 * @param {*}
 */
export const getHomeDataAction = () => ({
    type: actionTypes.GET_HOME_DATA
})

/**
 * 初始化首页
 * @param {Objcet} data
 */
export const initHomePageAction = (data) => ({
    type: actionTypes.INIT_HOME_PAGE,
    data
})

/**
 * 获取活动类别数据
 * @param {*}
 */
export const getProjectListAction = () => ({
	type: actionTypes.GET_PRO_LIST
})

/**
 * 初始化活动列表
 * @param {Array} data
 */
export const initProjectListAction = (data) => ({
    type: actionTypes.INIT_PRO_LIST,
    list: fromJS(data),
})

/**
 * 获取详情页数据
 * @param {String | Number} pid 活动Id
 */
export const getDetailDataAction = (pid) => ({
    type: actionTypes.GET_DETAIL,
    pid
})

/**
 * 初始化项目详情页面
 * @param {Object} details
 */
export const initDetailAction = (details) => ({
    type: actionTypes.INIT_PRO_DETAIL,
    details: fromJS(details)
})

/**
 * 获取活动列表
 * @param {*}
 */
export const getActivityListDataAction = () => ({
    type: actionTypes.GET_ACTIVS_DATA
})

/**
 * 初始化活动列表
 * @param {Array} data
 */
export const initActivityListPageAction = (data) => ({
    type: actionTypes.INIT_ACTIVS_PAGE,
    activ_list: fromJS(data)
})

/**
 * 获取活动页详情
 * @param {String | Number} aid
 */
export const getActivityDetailAction = (aid) => ({
    type: actionTypes.GET_ACTIVITY_DETAIL,
    aid
})

/**
 * 初始化活动详情页数据
 * @param {Object} data
 */
export const initActivityDetailAction = (data) => ({
    type: actionTypes.INIT_ACTIVITY_DETAIL,
    activity_details: fromJS(data)
})

/**
 * 获取我的页面的数据
 * @param {*}
 */
export const getPersonalData = () => ({
    type: actionTypes.GET_PERSONAL_INFO
})

/**
 * 初始化我的页面
 * @param {Object} data
 */
export const initPersonalPage = (data) => ({
    type: actionTypes.INIT_PERSONAL_PAGE,
    personal_info: fromJS(data)
})

/**
 * 提交我的报名
 * @param {object} data
 */
export const submitApply = (data) => ({
	type: actionTypes.SUBMIT_APPLY,
	data: fromJS(data)
})

/**
 * 请求获取我的报名数据
 * @param {*}
 */
export const getApplyList = () => ({
	type: actionTypes.GET_MYAPPLY_INFO
})

/**
 * 初始化我的报名列表
 * @param {Array} data
 */
export const initMyApplyPage = (data) => ({
	type: actionTypes.INIT_MYAPPLY_PAGE,
	apply_list: fromJS(data)
})

/**
 * 获取邀请数据
 * @param {*}
 */
export const getInviteInfoAction = () => ({
	type: actionTypes.GET_INVITE_DATA
})

/**
 * 初始化我的邀请页面
 * @param {Object} data
 */
export const initInvitePage = (data) => ({
	type: actionTypes.INIT_INVITE_PAGE,
	invitation: fromJS(data)
})
