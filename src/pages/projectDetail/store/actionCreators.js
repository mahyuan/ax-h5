import actionTypes from './actionTypes';
import { fromJS } from 'immutable';

export const getDetailDataAction = () => ({
    type: actionTypes.GET_DETAIL
})

export const initDetailAction = (detail) => ({
    type: actionTypes.INIT_DETAIL,
    detail: fromJS(detail)
})
