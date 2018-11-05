import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Header from '../../components/header';
import {
    ProfileWrap,
    ProfileContent,
} from './style';

class Profile extends PureComponent {
    render() {
        return (
            <ProfileWrap>
                <Header>
                    {
                        <span show_back="show">个人信息</span>
                    }
                </Header>
                <ProfileContent>

                    ProfileWrap
                </ProfileContent>
            </ProfileWrap>
        )
    }
}

export default connect()(Profile);