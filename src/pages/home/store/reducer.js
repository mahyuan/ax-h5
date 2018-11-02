import { fromJS } from 'immutable';
import actionTypes from "./actionTypes";

const defaultState = fromJS({
    banner: [],
    tags: [],
    project_List: []
})

export default ( state = defaultState, action ) => {
    switch (action.type) {
        case actionTypes.INIT_HOME_PAGE:
            let { banner, tags, project_List } = action.data;
            return state.merge({
                banner: fromJS(banner),
                tags: fromJS(tags),
                project_List: fromJS(project_List),
            })
        default:
            return state;
    }
}

