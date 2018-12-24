import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import ActivityItem from '../../components/activityItem';
import Footer from '../../components/footer';
import { getActivityListDataAction } from '../../store/actionCreators';
import Header from '../../components/header';
import {
    ActivityWrap,
    ActivityContent
} from './style';

class Activity extends PureComponent {
    componentDidMount() {
        this.props.fetList();
    }

    render() {
        const { activ_list } = this.props;
        const list =  (activ_list && activ_list.size > 0) ? activ_list.toJS() : [];
        return (
            <ActivityWrap>
                <Header>
                    {<span show_back='show'>活动专区</span>}
                </Header>
                <ActivityContent>
                    {
                        list.map((item, index) => {
                            return <ActivityItem key={item.id} item={item} />;
                        })
                    }
                </ActivityContent>
                <div>
                    <Footer current={this.props.match.path}></Footer>
                </div>
            </ActivityWrap>
        );
    }
}

const mapState = (state) => ({
    activ_list: state.get('activ_list')
});

const mapDispatch = (dispatch) => ({
    fetList() {
        const action = getActivityListDataAction();
        dispatch(action);
    }
});

export default connect(mapState, mapDispatch)(Activity);
