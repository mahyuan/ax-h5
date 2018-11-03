import { fromJS } from 'immutable';
import actionTypes from './actionTypes';

const defaultState = fromJS({
    detail: {}
})

export default (state = defaultState, action) => {
    switch (action.type) {
        // case actionTypes.GET_DETAIL:
        //     return state.set("detail", action.data)
        case actionTypes.INIT_DETAIL:
            return state.set('detail', action.detail);
        default:
            return state;
    }
}
