import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Header from '../../components/header';
// import { InviteContent } from '../../components/InviteContent';
import { getInviteInfoAction } from '../../store/actionCreators';
import {
	InvitationWrap,
	InvitationTotal,
} from './style';

class Invitation extends PureComponent {
	componentDidMount() {
		this.props.getInviteData();
	}

    render() {
		let { invitation } = this.props;
		let inviteInfo = (invitation && invitation.size > 0) ? invitation.toJS() : {};
		console.log('inviteInfo', inviteInfo);
        return (
            <InvitationWrap>
                <Header>
                    {
                        <span show_back="show">邀请好友</span>
                    }
                </Header>
				<InvitationTotal>
					<h3 className="title">邀请汇总</h3>
					<table border="1" width="100%">
						<thead>
							<tr>
								<td>邀请记录(人)</td>
								<td>报名成功(人)</td>
								<td>获取积分</td>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>{inviteInfo.total}</td>
								<td>{inviteInfo.applyed}</td>
								<td>{inviteInfo.point_receive}</td>
							</tr>
						</tbody>
					</table>

					<h3 className="title">邀请记录</h3>
					<table border="1" width="100%">
						<thead>
							<tr>
								<td>注册日期</td>
								<td>注册手机号</td>
								<td>是否报名</td>
							</tr>
						</thead>
						<tbody>
						{
							(inviteInfo.record && inviteInfo.record.length > 0) ? (
								inviteInfo.record.map((record, index) => {
									return (
										<tr key={index}>
											<td>{record.record_date}</td>
											<td>{record.mobile}</td>
											<td>{record.is_applyed > 0 ? '是' : '否'}</td>
										</tr>
									)
								})
							) : null
						}
						</tbody>
					</table>
				</InvitationTotal>
				<button className="inviteButton">邀请好友</button>
            </InvitationWrap>
        )
    }
}
const mapState = (state) => ({
	invitation: state.get('invitation')
})

const mapDispatch = (dispatch) => ({
	getInviteData() {
		let action = getInviteInfoAction();
		dispatch(action);
	}
})

export default connect(mapState, mapDispatch)(Invitation);
