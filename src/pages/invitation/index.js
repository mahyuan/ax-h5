import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Header from '../../components/header';
import {
    InvitationWrap,
} from './style';

class Invitation extends PureComponent {
    render() {
        return (
            <InvitationWrap>
                <Header>
                    {
                        <span show_back="show">邀请好友</span>
                    }
                </Header>
                Invitation
            </InvitationWrap>
        )
    }
}

export default connect()(Invitation);
