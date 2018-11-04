import React, { PureComponent }  from 'react';
import Header from '../../components/header';

class ActivityDetail extends PureComponent {
    render() {
        return (
            <div>
                <Header>
                    {
                        <span show_back="show">活动专区</span>
                    }
                </Header>
                ActivityDetail
            </div>
        )
    }
}

export default ActivityDetail;