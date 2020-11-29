import React, { PureComponent}  from 'react'
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
// import Footer from '../../components/footer';
// import { getPersonalData } from '../../store/actionCreators';
import {
    LoginWrap
} from './style';

import { setToken  } from '../../utils/auth'

class Login extends PureComponent {
    constructor({props}) {
        super(props)
        this.submiting = true
    }
    componentDidMount() {
        // this.props.fetchPersonDeatil();
    }

    render() {
        return (
            <LoginWrap className="login-wrap">
                <div className="login-content">
                    <div className="row">
                        <span className="label" htmlFor="username">User Name</span>
                    </div>
                    <div className="row">
                        <input className="input username" type="text" />
                    </div>
                    <div className="row">
                        <span className="label" htmlFor="password">Password</span>
                    </div>
                    <div className="row">
                        <input className="input password" type="password" />
                    </div>
                    <div className="row">
                        <span onClick={() => this.handleButtonClick() } id="confirm"  className="button confim">确定</span>
                    </div>
                </div>
            </LoginWrap>
        )
    }
    handleButtonClick() {
        const btn = document.getElementById('confim')
        console.log('btn', btn)
    }
}

const mapState = (state) => ({
    // personal_info: state.get('personal_info')
});

const mapDispatch = (dispatch) => ({
    // fetchPersonDeatil() {
    //     const action = getPersonalData();
    //     dispatch(action);
    // },
    initData() {
        console.log('init data');
    }
});

export default connect(mapState, mapDispatch)(Login);
