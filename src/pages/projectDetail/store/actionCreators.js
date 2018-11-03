import actionTypes from './actionTypes';
import { fromJS } from 'immutable';

export const getDetailDataAction = (pid) => ({
    type: actionTypes.GET_DETAIL,
    pid
})

export const initDetailAction = (info) => ({
    type: actionTypes.INIT_DETAIL,
    info: fromJS(info)
})
