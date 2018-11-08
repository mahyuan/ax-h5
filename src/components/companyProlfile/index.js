import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import {
    ProfileWrap,
    ProfileItem
} from './style';


class CompanyProlfile extends PureComponent {
    render() {
        let { company_profile } = this.props;
        let profileList = (profileList && profileList.size > 0) ? company_profile.toJS() : [];

        return (
            <ProfileWrap>
            {
                profileList.map((item, index) => {
                    return (
                        <ProfileItem key={index}>
                            <div className="profileTitle">
                                {item.title}
                            </div>
                            <div className="profileTextContent">
                                {
                                    this.getProfileTextItem(item.desc)
                                }
                            </div>
                        </ProfileItem>
                    )
                })
            }
            </ProfileWrap>
        )
    }

    getProfileTextItem(desc) {
        if( typeof desc === 'string' && desc.length > 0) {
            let textList = desc.split('\n');
            return (
                <Fragment>
                {
                    textList.map((item, index) => {
                       return <span key={index} className="textItem">{item}</span>
                    })
                }
                </Fragment>
            ) 
        }
    }
}

const mapState = (state) => ({
    company_profile:  state.get('company_profile')

})

const mapDispatch = (dispatch) => ({

})

export default connect( mapState, mapDispatch )( CompanyProlfile );
