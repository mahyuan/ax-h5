import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
    ProjectWrap
} from './style';

class Project extends PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        let { target }  = this.props;        
        return (
            <ProjectWrap>
                <div className="imgContent">
                    <img src={target.img} alt={target.name} />
                </div>
                <div className="textContent">
                    <h3 className="overview">项目介绍</h3>
                    <p className="detail">{target.desc}</p>
                    <Link to={`/detail/${target.id}`} className="toDetail">查看</Link>
                </div>
            </ProjectWrap>
        )
    }
}

const mapState = (state) => ({
    // project_List: state.getIn(['home', 'project_List'])
})

const mapDispatch = (dispath) => ({

})

export default connect(mapState, mapDispatch)(Project);
