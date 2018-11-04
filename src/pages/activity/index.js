import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import Footer from '../../components/footer';
import { getActivityData } from '../../store/actionCreators';
import Header from '../../components/header';
import {
    ActivityWrap,
} from './style';


class Activity extends PureComponent {
    render() {
        // <span>活动专区</span>
        let show_back = false;
        return (
            <ActivityWrap>
                <Header>
                    {                         
                        <span show_back='show'>活动专区</span>
                    }
                </Header>
                <div>
                    <Footer current={this.props.match.path}></Footer>
                </div>
            </ActivityWrap>
        )
    }
    componentWillMount() {
        this.props.fetList();
    }
}

const mapState = (state) => ({
    
})

const mapDispatch = (dispatch) => ({
    fetList() {
        let action = getActivityData();
        dispatch(action);
    }
})

export default connect(mapState, mapDispatch)(Activity);
