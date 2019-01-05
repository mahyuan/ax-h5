import React, { PureComponent }  from 'react';
import Header from '../../components/header';
import { connect } from 'react-redux';
import { getActivityDetailAction } from '../../store/actionCreators';
import {
    ActivityContainer,
    Content
} from './style';

class ActivityDetail extends PureComponent {
    constructor(props) {
        super(props);
        this.aid = props.match.params.aid || '';
    }

    componentDidMount() {
        this.props.getActivityDateHandle(this.aid);
    }

    render() {
        const { details } = this.props;
        const info = (details && details.size > 0) ? details.toJS() : {};
        // banner: "https://hbimg-other.b0.upaiyun.com/img/promotion/5eac12a6ec260ede4f2046e6cf44304aae60f3aa1bf6c"
        // date: "2018.10.10-2018.11.01"
        // end_time: "2019-01-05T11:05:05.099Z"
        // id: 1
        // is_online: false
        // is_over: false
        // more_info: []
        // start_time: "2019-01-05T11:05:05.099Z"
        // title: "海外留学新姿势"
        // _id: "5c30
        return (
            <ActivityContainer>
                <Header>
                    {
                        <span show_back='show'>活动专区</span>
                    }
                </Header>
                <Content>
                    <div className='banner_content'>
                        <img className='banner_image' src={info.banner} alt='banner images' />
                    </div>
                    <div className='desc_wrap'>
                        <h3 className='item_title'>{info.title}</h3>
                        <div className='date_wrap' >
                            <p className='date_text' > 活动时间: </p>
                            <p className='date_content' > {info.start_time + '-' + info.end_time}</p>
                            <p>{info.desc}</p>
                        </div>
                    </div>
                    <div className='main'>
                        {
                            info.more_info ? info.more_info.map((item, index) => {
                                return (
                                    <div key={index} className='image_content'>
                                        <img src={item} alt='more desc' />
                                    </div>
                                );
                            }) : null
                        }
                    </div>
                </Content>
            </ActivityContainer>
        );
    }
}

const mapState = (state) => ({
    details: state.get('activity_details')
});

const mapDispatch = (dispatch) => ({
    getActivityDateHandle(aid) {
        const action = getActivityDetailAction(aid);
        dispatch(action);
    }
});

export default connect(mapState, mapDispatch)(ActivityDetail);
