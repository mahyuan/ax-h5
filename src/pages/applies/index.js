import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Header from '../../components/header';
import ApplyItem from '../../components/applyItem';
import { getApplyList } from '../../store/actionCreators';
import {
    MyAppliedWrap,
    AppliedContent
} from './style';

class MyApplies extends PureComponent {
    componentDidMount() {
        this.props.initData();
    }

    render() {
        const { apply_list } = this.props;
        const list = (apply_list && apply_list.size > 0) ? apply_list.toJS() : [];
        return (
            <MyAppliedWrap>
                <Header>
                    {
                        <span show_back='show'>我的报名</span>
                    }
                </Header>
                <AppliedContent>
                    {
                        list.length > 0 ? (
                            list.map((apply, index) => {
                                return (
                                    <ApplyItem
                                        key={apply.id}
                                        apply={apply}
                                    />
                                );
                            })
                        ) : <p className='noApply'>你还没有报名哦</p>
                    }
                </AppliedContent>
            </MyAppliedWrap>
        );
    }
}

const mapState = (state) => ({
    apply_list: state.get('apply_list')
});

const mapDispatch = (dispatch) => ({
    initData() {
        const action = getApplyList();
        dispatch(action);
    }
});

export default connect(mapState, mapDispatch)(MyApplies);
