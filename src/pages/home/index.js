import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import { getHomeDataAction } from './store/actionCreators';
import Banner from '../../components/banner';
import Profile from '../../components/profile';
import Project from '../../components/project';
import Footer from '../../components/footer';

import { Link } from 'react-router-dom';
import { 
    HomeWrap,
    ProjectInfoTitle,
} from './style';

class Home extends PureComponent {
    render() {
        const { project_List } = this.props;
        let proList = project_List.toJS();
        // proList.length = 2;
        return (
            <HomeWrap>
                <Banner />
                <Profile />
                <div className="projectWrap">
                    <div className="hotRecommended">
                        {
                            proList.map((item, index) => {
                                return (
                                    <Fragment key={index}>
                                        <ProjectInfoTitle>
                                            <div className={`projectTag ${item.type==="recommend" ? "hot" : ""}`}>{item.tag} |<span>【{item.name}】</span></div>
                                            {
                                                item.type === "quality" ?
                                                <Link to="/list" className="showMore">更多</Link> : ''
                                            }
                                        </ProjectInfoTitle>
                                        <Project key={item.id} target={item}>{item.desc}</Project>
                                    </Fragment>
                                )
                            })
                        }
                    </div>
                </div>
                <Footer>
                    {
                        <div>
                            <span>发现</span>
                            <span>活动</span>
                            <span>我的</span>
                        </div>
                    }
                </Footer>
            </HomeWrap>
        )
    }
    componentDidMount() {
        this.props.getInit();
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
