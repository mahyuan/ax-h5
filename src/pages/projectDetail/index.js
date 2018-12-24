import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {
    DetailConainter,
    DetailContent,
    DetailFooter
} from './style';
import Header from '../../components/header/index';
import { getDetailDataAction } from '../../store/actionCreators';
import { Link } from 'react-router-dom';

class ProjectDetail extends PureComponent {
    constructor(props) {
        super(props);
        this.pid = props.match.params.pid || '';
        this.renderImgs = this.renderImgs.bind(this);
    }

    componentDidMount() {
        this.props.getProjectInfo(this.pid);
    }
    renderImgs(imgs) {
        if (imgs instanceof Array && imgs.length) {
            return imgs.map((item, index) => {
                return (
                    <img key={index}
                        className='images'
                        src={item}
                        alt='project images'
                    />
                );
            });
        } else {
            return null;
        }
    }

    render() {
        const { info } = this.props;
        // match
        const details = (info && info.size > 0) ? info.toJS() : {};

        return (
            <DetailConainter>
                <Header>
                    {
                        <span show_back='show'>查看</span>
                    }
                </Header>
                <DetailContent>
                    <h3 className='projectName'>{details.name}</h3>
                    <p className='projectPrice'>{details.price}</p>
                    <div className='projectDetail'>
                        <span className='country'>国家：{details.country}</span>
                        <span className='people'>适合人群：{details.people}</span>
                        <span className='time'>时间：{details.time}</span>
                    </div>
                    <div className='more_info'>
                        <h3 className='projectInfoTitle'>项目介绍</h3>
                        {
                            this.renderImgs(details.more_info)
                        }
                    </div>
                </DetailContent>
                <DetailFooter>
                    <span className='footerPrice'>{details.price}</span>
                    <Link to={{
                        pathname: `/project/${this.pid}/consult`
                        // search: `?id=${this.pid}`
                    }} className='footerButton consult'>咨询</Link>
                    <Link to={{
                        pathname: `/project/${this.pid}/apply`
                        // search: `?id=${this.pid}`
                    }} className='footerButton apply'>报名</Link>
                </DetailFooter>
            </DetailConainter>
        );
    }
}

const mapState = (state) => ({
    info: state.get('details')
});

const mapDispatch = (dispatch) => ({
    getProjectInfo(pid) {
        const action = getDetailDataAction(pid);
        dispatch(action);
    }
});

export default connect(mapState, mapDispatch)(ProjectDetail);

