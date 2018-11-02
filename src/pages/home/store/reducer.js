import { fromJS } from 'immutable';
import actionTypes from "./actionTypes";

const defaultState = fromJS({
    banner: [],
    company_profile: [],
    project_List: []
})

export default ( state = defaultState, action ) => {
    switch (action.type) {
        case actionTypes.INIT_HOME_PAGE:
            let { banner, tags, project_List } = action.data;
            return state.merge({
                banner: fromJS(banner),
                company_profile: fromJS(company_profile),
                project_List: fromJS(project_List),
            })
        default:
            return state;
    }
}

