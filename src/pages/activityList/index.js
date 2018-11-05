import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import ActivityItem from '../../components/activityItem';
import Footer from '../../components/footer';
import { getActivityData } from '../../store/actionCreators';
import Header from '../../components/header';
import {
    ActivityWrap,
    ActivityContent,
} from './style';


class Activity extends PureComponent {
    render() {
        let { activ_list } = this.props;
        const list = activ_list.toJS();
        console.log('activ_list', list);
        
        return (
            <ActivityWrap>
                <Header>
                    { <span show_back='show'>活动专区</span>  }
                </Header>
                <ActivityContent>
                    {
                        list.map((item, index) => {
                            return <ActivityItem  key={item.id} item={item} />
                        })
                    }
                </ActivityContent>
                <div>
                    <Footer current={this.props.match.path}></Footer>
                </div>
            </ActivityWrap>
        )
    }
    componentWillMount() {
        this.props.fetList();
    }
}

const mapState = (state) => ({
    activ_list: state.get('activ_list'),
})

const mapDispatch = (dispatch) => ({
    fetList() {
        let action = getActivityData();
        dispatch(action);
    }
})

export default connect(mapState, mapDispatch)(Activity);
