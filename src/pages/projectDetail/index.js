import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {
    DetailConainter,
    DetailContent,
    DetailFooter,
} from './style';
import Header from '../../components/header/index';
import { getDetailDataAction } from './store/actionCreators';

class ProjectDetail extends PureComponent {
    constructor(props) {
        super(props);
        this.pid = props.match.params.pid || '';
        this.renderImgs = this.renderImgs.bind(this);
    }
    renderImgs(imgs) {
        if(imgs instanceof Array && imgs.length ) {
            return imgs.map((item, index) => {
                return (
                    <img key={index} className="images" src={item} />
                )
            }) 
        } else {
            return null;
        }
    }
    render() {
        let { info } = this.props;
        let details = info && info.toJS();

        return (
            <DetailConainter>
                <Header>
                    {
                        <div className="header_look">查看</div>
                    }
                </Header>
                <DetailContent>
                    <h3 className="projectName">{details.name}</h3>
                    <p className="projectPrice">{details.price}</p>
                    <div className="projectDetail">
                        <span className="country">国家：{details.country}</span> 
                        <span className="people">适合人群：{details.people}</span>
                        <span className="time">时间：{details.time}</span>
                    </div>
                    <div className="more_info">
                        <h3 className="projectInfoTitle">项目介绍</h3>
                        {
                        this.renderImgs(details.more_info) 
                        }
                    </div>
                </DetailContent>
                <DetailFooter>
                    <span className="footerPrice">{details.price}</span>
                    <span className="footerButton consult">咨询</span>
                    <span className="footerButton apply">报名</span>
                </DetailFooter>
            </DetailConainter>
        )
    }
    componentDidMount() {
        this.props.getProjectInfo(this.pid);
    }
}

const mapState = (state) => ({
    info: state.getIn(['detail', 'info']),
})

const mapDispatch = (dispatch) => ({
    getProjectInfo(pid) {
        let action = getDetailDataAction(pid);
        dispatch(action);
    }
})

export default connect(mapState, mapDispatch)(ProjectDetail);





