import React, { PureComponent } from 'react';
import {
    ApplyItemWrap
} from './style';

class ApplyItem extends PureComponent {
    constructor(props) {
        super(props);
        this.formatDate = this.formatDate.bind(this);
    }
    formatDate(d) {
        if (typeof d === ('string' || 'number')) {
            const date = new Date(d);
            return `${date.getFullYear()}.${date.getMonth() + 1}.${date.getDate()}`;
        }
        return d;
    }
    render() {
        const { apply } = this.props;
        const formatDate = this.formatDate;
        // apply_time, id, message, mobile, point, price, project, school, user_name,
        return (
            <ApplyItemWrap>
                <div className='left'>
                    <h4>{apply.project}</h4>
                    <p>报名时间: {formatDate(apply.apply_time)}</p>
                </div>
                <div className='right'>
                    <p>金额: {apply.price}</p>
                    <p>兑换积分: {apply.point}</p>
                </div>
            </ApplyItemWrap>
        );
    }
}

export default ApplyItem;
