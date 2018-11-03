import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import { getHomeDataAction } from './store/actionCreators';
import Banner from '../../components/banner/index';
import Profile from '../../components/profile/index';
import Project from '../../components/project/index';

import { 
    HomeWrap
} from './style';

class Home extends PureComponent {
    render() {
        // debugger
        const { project_List } = this.props;
        let proList = project_List.toJS();
        let s = this.hotRecommendList(proList)
        console.log('s', s);
        
        return (
            <HomeWrap>
                <Banner />
                <Profile />
                <div className="projectWrap">
                    <div className="hotRecommended">
                        {/* {
                            this.hotRecommendList(proList)
                        } */}
                    </div>
                </div>
            </HomeWrap>
        )
    }
    componentDidMount() {
        this.props.getInit();
    }
    hotRecommendList(list) {
        let hotTarget = list.filter(item => item.tag == 'hot');
        // console.log('hotTarget--------', hotTarget);
        
        if (hotTarget instanceof Array && hotTarget.length ) {
            return hotTarget.map((target, index) => {
                return (
                    <Project key={index} /> 
                    )
            })   
        }
        
    }
}

const mapState = (state) => ({
    project_List: state.getIn(['home', 'project_List'])
})

const mapDispatch = (dispatch) => {
    return {
        getInit() {
            let action = getHomeDataAction();
            dispatch(action);

        }
    }
}

export default connect(mapState, mapDispatch)(Home);
