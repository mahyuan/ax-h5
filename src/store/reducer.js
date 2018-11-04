import actionTypes from './actionTypes';
import { fromJS } from 'immutable';

const defaultState = fromJS({
    banner: [],
    company_profile: [],
    home_pro_List: [],
    list: [],
    details: {},
})

export default ( state = defaultState, action ) => {
    switch (action.type) {
        case actionTypes.INIT_HOME_PAGE:
            let { banner, company_profile, home_pro_List } = action.data;
            return state.merge({
                banner: fromJS(banner),
                company_profile: fromJS(company_profile),
                home_pro_List: fromJS(home_pro_List),
            })

        case actionTypes.INIT_PRO_LIST:
            return state.set("list", action.list);

        case actionTypes.INIT_PRO_DETAIL:            
            return state.set('details', action.details); 

        default:
            return state;
    }
}
