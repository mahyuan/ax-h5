import actionTypes from './actionTypes';
import { fromJS } from 'immutable';

export const getHomeDataAction = (data) => ({
    type: actionTypes.GET_HOME_DATA,
    data: fromJS(data)
})

export const  getOthers = (g) => ({
    // type: actionTypes.
})

export const initHomePageAction = (data) => ({
    data
})