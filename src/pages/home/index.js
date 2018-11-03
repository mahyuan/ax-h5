import React, { PureComponent } from 'react';
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
        const features = [];
        return (
            <HomeWrap>
                <Banner></Banner>
                {/* <Profile></Profile>
                <div className="projectWrap">
                    <p>热门推荐</p>
                    <Project></Project>
                    <p>优质项目</p>
                    <Project></Project>
                </div> */}
            </HomeWrap>
        )
    }
    componentDidMount() {
        this.props.getInit();
    }
}

const mapState = (state) => ({
    
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
