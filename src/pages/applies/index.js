import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Header from '../../components/header';
import { getPersonalData } from '../../store/actionCreators';
import {
    MyAppliedWrap,
    AppliedContent,
} from './style';

class MyApplies extends PureComponent {
	// constructor(props) {
	// 	super(props);
	// 	this.state = {
	// 		point: '',
	// 		userName: '',
	// 		school: '',
	// 		mobile: '',
	// 		message: ''
	// 	}
	// 	this.changeInputValue = this.changeInputValue.bind(this)
	// }
    componentDidMount() {
    }

    render() {
		// let { point, userName, school, mobile, message } = this.state;
		// const { submitApplayHandle } = this.props;
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
	// personal_info: state.get('personal_info'),
})

const mapDispatch = (dispatch) => ({

})

export default connect(mapState, mapDispatch)(MyApplies);
