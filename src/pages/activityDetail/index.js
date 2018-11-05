import React, { PureComponent }  from 'react';
import Header from '../../components/header';
import { connect } from 'react-redux';
import { getActivityDetailAction } from '../../store/actionCreators';
import {
    ActivityContainer,
    Content,
} from './style';

class ActivityDetail extends PureComponent {
    constructor(props) {
        super(props);
        this.aid = props.match.params.aid || '';
        console.log('props', props);
    }

    render() {
        let { details } = this.props;
        let info = details.toJS() || {};

        return (
            <ActivityContainer>
                <Header>
                    {
                        <span show_back="show">活动专区</span>
                    }
                </Header>
                <Content>
                    <div className="banner_content">
                        <img className="banner_image" src={info.banner} alt="banner images" />
                    </div>
                    <div className="main">
                        {
                            info.more_info ? info.more_info.map((item, index) => {
                                return (
                                    <div key={index} className="image_content">
                                        <img src={item} alt="more desc" />
                                    </div>
                                )
                            }) : null
                        }
                    </div>
                </Content>
            </ActivityContainer>
        )
    }

    componentDidMount() {
        this.props.getActivityDateHandle(this.aid);
        console.log('aid', this.aid); 
    }

}

const mapState = (state) => ({
    details: state.get('activity_details'),
})

const mapDispatch = (dispatch) => ({
    getActivityDateHandle(aid) {
        let action = getActivityDetailAction(aid);
        dispatch(action);
    }
})

export default connect(mapState, mapDispatch)(ActivityDetail);