import { fromJS } from 'immutable';
import actionTypes from "./actionTypes";

const defaultState = {
    list: ['1', '2', '3']
}

export default ( state = defaultState, action ) => {
    switch (action.type) {
        case actionTypes.GET_HOME_DATA:
            return state.merge({
                action.data
            });
            
        default:
            return state;
    }
}

