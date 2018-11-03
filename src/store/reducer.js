import { combineReducers } from 'redux-immutable';
import { reducer as homeReducer } from '../pages/home/store';
import { reducer as projectReducer } from '../pages/projectList/store';
import { reducer as detailsReducer } from '../pages/projectDetail/store';

const reducer = combineReducers ({
    home: homeReducer,
    projects: projectReducer,
    detail: detailsReducer,
})

export default reducer;