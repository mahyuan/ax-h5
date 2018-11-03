import { fromJS } from 'immutable';
import actionTypes from './actionTypes';

export const getProjectListAction = () => ({
    type: actionTypes.GET_PRO_LIST
})

export const initProjectListAction = (list) => ({
    type: actionTypes.INIT_PRO_LIST,
    list: fromJS(list),
})
