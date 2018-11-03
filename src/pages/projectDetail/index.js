import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {
    DetailConainter,
    DetailContent,
    CommonHeader,
} from './style';
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
                <CommonHeader>
                    <div className="header">查看</div>
                </CommonHeader>
                <DetailContent>
                    <h3>{details.name}</h3>
                    <p>{details.price}</p>
                    <div className="content">
                        <span>{details.country}</span> 
                        <span>{details.people}</span>
                        <span>{details.time}</span>
                    </div>
                    <div className="more_info">
                        {
                        this.renderImgs(details.more_info) 
                        }
                    </div>
                </DetailContent>
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





