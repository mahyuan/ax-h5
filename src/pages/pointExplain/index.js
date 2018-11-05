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
                    dasfd 
                </PointsRule>
                <LevelRule>
                    
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