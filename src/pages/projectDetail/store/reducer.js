import { fromJS } from 'immutable';
import actionTypes from './actionTypes';

const defaultState = fromJS({
    info: {}
})

export default (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.INIT_DETAIL:
            return state.set('info', action.info);
        default:
            return state;
    }
}
