import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Project from '../../components/project';
import {
    ProjectWrap,
} from './style';
import { getProjectListAction } from './store/actionCreators';

class ProjectList extends PureComponent {
    render() {
        let { list } = this.props;
        let proList = list.toJS();

        return (
            <ProjectWrap>
            {
                proList.map((pro, index) => {
                    return (
                        <Project key={pro.id} target={pro} />
                        
                    )
                })
            }
            </ProjectWrap>
        )
    }
    componentDidMount() {        
        this.props.initListPage();
    }
}

const mapState = (state) => ({
    list: state.getIn(['projects', 'list']),
})

const mapDispatch = (dispatch) => ({
    initListPage() {
        let action = getProjectListAction();
        dispatch(action);
    }
})

export default connect(mapState, mapDispatch)(ProjectList);
