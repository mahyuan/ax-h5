import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import { getHomeDataAction } from '../../store/actionCreators';
import Banner from '../../components/banner';
import CompanyProlfile from '../../components/companyProlfile';
import Project from '../../components/project';
import Footer from '../../components/footer';

import { Link } from 'react-router-dom';
import { 
    HomeWrap,
    ProjectInfoTitle,
} from './style';

class Home extends PureComponent {
    componentDidMount() {
        this.props.getInit();
    }
    
    render() {        
        const { home_pro_List } = this.props;
        let proList = (home_pro_List && home_pro_List.size > 0) ? home_pro_List.toJS() : [];
        // proList.length = 2;
        return (
            <HomeWrap>
                <Banner />
                <CompanyProlfile />
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
                                                <Link to="/projects" className="showMore">更多</Link> : ''
                                            }
                                        </ProjectInfoTitle>
                                        <Project key={item.id} target={item}>{item.desc}</Project>
                                    </Fragment>
                                )
                            })
                        }
                    </div>
                </div>
                <Footer current={this.props.match.path}></Footer>
            </HomeWrap>
        )
    }
    
}

const mapState = (state) => ({
    home_pro_List: state.get('home_pro_List')
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
