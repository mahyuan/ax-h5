import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Header from '../../components/header';
import { getPersonalData } from '../../store/actionCreators';
import { InviteContent } from '../../components/InviteContent';
import {
    ExplainWrap,
    PointsRule,
    LevelRule,
    // InviteContent,
} from './style';

class PointExplain extends PureComponent {
    componentDidMount() {
        this.props.getProfile(this.props.personal_info);
    }

    render() {
        let { personal_info } = this.props;
        let explain = (personal_info && personal_info.size > 0) ? personal_info.toJS().points_explain : {};

        return (
            <ExplainWrap>
                <Header>
                    {
                        <span show_back="show">积分说明</span>
                    }
                </Header>
                <PointsRule>
                    <div className="points_rule_wrap">
                        {
                            explain.exchange_rule && explain.exchange_rule.map((rule, index) => {
                                return (
                                    <span key={index} className="points_rule_item">{rule}</span>
                                )
                            })
                        }
                    </div>
                </PointsRule>
                <LevelRule>
                    <h3 className="rule_title">等级规则</h3>
                    <table className="form_wrap" border="1" width="100%">
                        <thead>
                            <tr className="form_row">
                                <td className="form_row_item item">等级</td>
                                <td className="form_row_item item">人数</td>
                                <td className="form_row_item item3">积分</td>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            explain.level_rule && explain.level_rule.map((item, index) => {
                                return (
                                    <tr key={index} className="form_row">
                                        <td className="form_row_item item">{item.level}</td>
                                        <td className="form_row_item item">{item.person_number}</td>
                                        <td className="form_row_item item3">每报名一人得：{item.total_points}分</td>
                                    </tr>
                                )
                            })
                        }
                        </tbody>
                    </table>
                </LevelRule>
				<InviteContent />
                {/* <InviteContent>
					<Link to={`/invite`}>
						<button className="invite_button">立即邀请</button>
					</Link>
                </InviteContent> */}
            </ExplainWrap>
        )
    }

}

const mapState = (state) => ({
    personal_info: state.get('personal_info'),
})

const mapDispatch = (dispatch) => ({
    getProfile(explain) {
        if(!(explain && explain.size > 0)) {
            let action = getPersonalData();
            dispatch(action);
            console.log('1');

        } else {
            console.log('2, explain');

        }
    }
})

export default connect(mapState, mapDispatch)(PointExplain);
