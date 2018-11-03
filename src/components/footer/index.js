import React, { PureComponent } from 'react';
import {
    DetailFooter,
} from './style';
class Footer extends PureComponent {
    render() {
        return (
            <DetailFooter>
                {
                    this.props.children
                }
            </DetailFooter>
        )
    }
}

export default Footer;