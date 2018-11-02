import actionTypes from './actionTypes';
import { fromJS } from 'immutable';

export const getHomeDataAction = () => ({
    type: actionTypes.GET_HOME_DATA
})

export const initHomePageAction = (data) => ({
    type: actionTypes.INIT_HOME_PAGE,
    data
})
