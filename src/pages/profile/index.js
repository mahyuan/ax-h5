import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Header from '../../components/header';
import { getPersonalData } from '../../store/actionCreators';
import {
    ProfileWrap,
    ProfileContent,
    ChangePassward,
    Logout,
} from './style';

class Profile extends PureComponent {
    render() {
        let { personal_info } = this.props;
        let profile = (personal_info && personal_info.size > 0) ? personal_info.toJS().person_profile : {};
        console.log('profile' , profile);
        
        return (
            profile.uid ? (
                <ProfileWrap>
                <Header>
                    {
                        <span show_back="show">个人信息</span>
                    }
                </Header>
                <ProfileContent>
                    <div className="info_content">
                        <span className="info_item">{profile.user_name}</span>
                        <span className="change_button">修改</span>
                    </div>
                    <div className="info_content">
                        <span className="info_item">{profile.mobile}</span>
                        <span className="change_button">修改</span>
                    </div>
                    <div className="info_content">
                        <span className="info_item">{profile.email}</span>
                        <span className="change_button">修改</span>
                    </div>
                    <div className="info_content">
                        <span className="info_item">{profile.school}</span>
                        <span className="change_button">修改</span>
                    </div>
                </ProfileContent>
                <ChangePassward>
                    <div className="change_passwd_button">修改密码</div>
                </ChangePassward>
                <Logout>
                    <div className="logout_button">退出登录</div>
                </Logout>
            </ProfileWrap>
            ) : null
        )
    }
    componentDidMount() {
        console.log('this.props.personal_info', this.props.personal_info);
        
        this.props.getProfile(this.props.personal_info);
    }
}

const mapState = (state) => ({
    personal_info: state.get('personal_info'),
})

const mapDispatch = (dispatch) => ({
    getProfile(profile) {
        if(!(profile && profile.size > 0)) {
            let action = getPersonalData();
            dispatch(action);
            console.log('1');
            
        } else {
            console.log('2, profile');
            
        }
    }
})

export default connect(mapState, mapDispatch)(Profile);