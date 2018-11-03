import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import {
    CommonHeader,
} from './style';

class Header extends PureComponent {
    render() {
        return (
            <CommonHeader>
                <span className="back">返回</span>
                {
                    this.props.children
                }
            </CommonHeader>
        )
    }
}

export default Header;
