import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
import {
    CommonHeader
} from './style';
import { createBrowserHistory } from 'history';

class Header extends PureComponent {
    constructor(props) {
        super(props);
        this.history = createBrowserHistory();
    }

    render() {
        const goBack = () => {
            const show = this.props.children.props.show_back || null;
            if (show === 'show') {
                return (<span className='back' onClick={() => this.history.goBack()}>返回</span>);
            } else {
                return null;
            }
        };
        return (
            <CommonHeader>
                {goBack()}
                <Fragment>
                    {
                        this.props.children
                    }
                </Fragment>
            </CommonHeader>
        );
    }
}
const mapState = (state) => ({

});

const mapDispatch = (dispatch) => ({

});

export default connect(mapState, mapDispatch)(Header);
