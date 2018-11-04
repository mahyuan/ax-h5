import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Footer from '../../components/footer';
import { getActivityData } from '../../store/actionCreators';
import {
    ActivityWrap,
} from './style';


class Activity extends PureComponent {
    render() {
        return (
            <ActivityWrap>
                <div>activity
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
