import actionType from './actionTypes';
import { fromJS } from 'immutable';
const defaultState = fromJS({
    "list": []
})

export default (state = defaultState, action ) => {
    switch (action.type) {
        case actionType.INIT_PRO_LIST:
        console.log('reducer', action);
        
            return state.set("list", action.list)    
        default:
            return state;
    }
}