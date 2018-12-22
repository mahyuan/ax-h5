import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import {
    ActivityItemWrap,
} from './style';

class ActivityItem extends PureComponent {
    render() {
        let { item } = this.props;
        let aid = item.id;

        return (
            <ActivityItemWrap>
                <div className="item_content">
                    <Link to={`/activity/${aid}`}>
                        <div className="activity_banner">
                            <img className="banner_image" src={item.banner} alt="activity banner" />
                        </div>
                    </Link>
                    <h3 className="item_title">{item.title}</h3>
                    <div className="date_wrap">
                        <span className="date_text">活动时间:</span>
                        <span className="date_content">{item.date}</span>
                    </div>
                    {
                        item.is_over ? <button className="activity_outtime">活动已结束</button> : ''
                    }
                </div>
            </ActivityItemWrap>
        )
    }
}

export default ActivityItem;
