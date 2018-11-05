import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
    ProjectWrap
} from './style';

class Project extends PureComponent {
    render() {
        let { target }  = this.props;
        
        if(!target) return null;
        return (
            <ProjectWrap>
                <div className="imgContent">
                    <img src={target.img} alt={target.name} />
                </div>
                <div className="textContent">
                    <h3 className="overview">项目介绍</h3>
                    <p className="detail">{target.desc}</p>
                    <Link to={`/project/${target.id}`} className="toDetail">查看</Link>
                </div>
            </ProjectWrap>
        )
    }
}

const mapState = (state) => ({
    
})

const mapDispatch = (dispath) => ({

})

export default connect(mapState, mapDispatch)(Project);
