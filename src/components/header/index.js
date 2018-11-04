import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
    CommonHeader,
} from './style';

class Header extends PureComponent {
    constructor(props) {
        super(props);
        console.log('props', props.history);
        
    }
    render() {
        let { back } = this.props;
        return (
            <CommonHeader>
                <span className="back" onClick={back}>返回</span>
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
    back() {
        // return location.history.back() || null;
    }
})

export default connect(mapState, mapDispatch)(Header);
