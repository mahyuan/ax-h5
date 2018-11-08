import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Header from '../../components/header';
// import { getPersonalData } from '../../store/actionCreators';
import {
    MyAppliedWrap,
    AppliedContent,
} from './style';

class Applies extends PureComponent {
    componentDidMount() {
    }
    
    render() {
        let { personal_info } = this.props;
        let explain = (personal_info && personal_info.size > 0) ? personal_info.toJS().points_explain : {};
        console.log('explain' , explain);
        
        return (
            <MyAppliedWrap>
                <Header>
                    {
                        <span show_back="show">我的报名</span>
                    }
                </Header>     
                <AppliedContent> 
  
                </AppliedContent>
            </MyAppliedWrap>
        )
    }

}

const mapState = (state) => ({
    personal_info: state.get('personal_info'),
})

const mapDispatch = (dispatch) => ({
    // getProfile(explain) {
    //     if(!(explain && explain.size > 0)) {
    //         let action = getPersonalData();
    //         dispatch(action);
    //         console.log('1');
            
    //     } else {
    //         console.log('2, MyApplied');
            
    //     }
    // }
})

export default connect(mapState, mapDispatch)(Applies);