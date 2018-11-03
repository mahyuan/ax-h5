import { combineReducers } from 'redux-immutable';
import { reducer as homeReducer } from '../pages/home/store';
import { reducer as projectReducer } from '../pages/projectList/store';

const reducer = combineReducers ({
    home: homeReducer,
    projects: projectReducer,
})

export default reducer;