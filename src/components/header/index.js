import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
    CommonHeader,
} from './style';
import { createBrowserHistory } from 'history';

class Header extends PureComponent {
    constructor(props) {
        super(props);
        this.history = createBrowserHistory();  
    }
    render() {
        return (
            <CommonHeader>
                <span className="back" onClick={() => this.history.goBack()}>返回</span>
                {
                    this.props.children
                }
            </CommonHeader>
        )
    }
}
const mapState = (state) => ({

})

const mapDispatch = (dispatch) => ({

})

export default connect(mapState, mapDispatch)(Header);
