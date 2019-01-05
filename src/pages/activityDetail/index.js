import React, { PureComponent }  from 'react';
import Header from '../../components/header';
import { connect } from 'react-redux';
import { getActivityDetailAction } from '../../store/actionCreators';
import {
    ActivityContainer,
    Content
} from './style';
import {
    formateDate
} from '../../utils/dateFormate';

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
        const dateString = formateDate(info.start_time) + '-' + formateDate(info.end_time);
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
                    <div className='text_content'>
                        <h3 className='item_title'>{info.title}</h3>
                        <div className='date_wrap'>
                            <span className='date_text'>活动时间: </span>
                            <span className='date_content'>{dateString}</span>
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
