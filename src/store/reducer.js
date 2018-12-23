import actionTypes from './actionTypes';
import { fromJS } from 'immutable';

const defaultState = fromJS({
    banner: [], // 首页banner
    company_profile: [], // 首页公司介绍
    home_pro_List: [], // 首页项目列表
    list: [], // 项目列表页数据
    details: {}, // 项目详情页数据
    activ_list: [], // 活动列表
    activity_details: {}, //活动详情页数据
	personal_info: {}, // 个人详情页数据
	apply_list: [], // 我的申请列表
	invitation: {}, // 我的邀请数据
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

        case actionTypes.INIT_ACTIVS_PAGE:
            return state.set('activ_list', action.activ_list);

        case actionTypes.INIT_ACTIVITY_DETAIL:
            return state.set('activity_details', action.activity_details);

        case actionTypes.INIT_PERSONAL_PAGE:
            return state.set('personal_info', action.personal_info);

		case actionTypes.INIT_MYAPPLY_PAGE:
			return state.set('apply_list', action.apply_list);

		case actionTypes.INIT_INVITE_PAGE:
			return state.set('invitation', action.invitation);

        default:
            return state;
    }
}
