import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Header from '../../components/header';
import { getPersonalData } from '../../store/actionCreators';
import {
    ExplainWrap,
    PointsRule,
    LevelRule,
    InviteContent,
} from './style';

class PointExplain extends PureComponent {
    render() {
        let { personal_info } = this.props;
        let explain = (personal_info && personal_info.size > 0) ? personal_info.toJS().points_explain : {};
        console.log('explain' , explain);
        
        return (
            <ExplainWrap>
                <Header>
                    {
                        <span show_back="show">积分说明</span>
                    }
                </Header>     
                <PointsRule> 
                    <div>
                        {
                            explain.exchange_rule && explain.exchange_rule.map((rule, index) => {
                                return (
                                    <span key={index} className="exchange_item">{rule}</span>
                                )
                            })
                        }
                    </div>
                </PointsRule>
                <LevelRule>
                    <div className="form_wrap">
                        <div className="form_row">
                            <span className="form_row_item">等级</span>
                            <span className="form_row_item">人数</span>
                            <span className="form_row_item">积分</span>
                        </div>
                        {
                            explain.level_rule && explain.level_rule.map((item, index) => {
                                return (
                                    <div key={index} className="form_row">
                                        <span className="form_row_item">{item.level}</span>
                                        <span className="form_row_item">{item.person_number}</span>
                                        <span className="form_row_item">{item.total_points}</span>
                                    </div>
                                )
                            })
                        }
                    </div>
                </LevelRule>
                <InviteContent>

                </InviteContent>
            </ExplainWrap>
        )
    }
    componentDidMount() {
        console.log('this.props.explain', this.props.personal_info);
        
        this.props.getProfile(this.props.personal_info);
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