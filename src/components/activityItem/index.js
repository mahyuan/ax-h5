import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import {
    ActivityItemWrap
} from './style';

class ActivityItem extends PureComponent {
    render() {
        const { item } = this.props;
        const aid = item._id;

        return (
            <ActivityItemWrap>
                <div className='item_content'>
                    <Link to={`/activity/${aid}`}>
                        <div className='activity_banner'>
                            <img className='banner_image' src={item.banner} alt='activity banner' />
                        </div>
                    </Link>
                    <h3 className='item_title'>{item.title}</h3>
                    <div className='date_wrap'>
                        <span className='date_text'>活动时间:</span>
                        <span className='date_content'>{item.start_time + '-' + item.end_time}</span>
                    </div>
                    {
                        item.is_over ? <button className='activity_outtime'>活动已结束</button> : ''
                    }
                </div>
            </ActivityItemWrap>
        );
    }
}

export default ActivityItem;
