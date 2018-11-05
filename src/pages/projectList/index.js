import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import Project from '../../components/project';
import Header from '../../components/header';
import {
    ProjectWrap,
} from './style';
import { getProjectListAction } from '../../store/actionCreators';

class ProjectList extends PureComponent {
    render() {
        let { list } = this.props;
        let proList = list.toJS();

        return (
            <ProjectWrap>
                <Header>
                    {
                        <span show_back='show'>优质项目</span>
                    }
                </Header>
                <Fragment>
                    {
                        proList.map((pro, index) => {
                            return (
                                <Project key={pro.id} target={pro} />
                            )
                        })
                    }
                </Fragment>
            </ProjectWrap>
        )
    }
    componentDidMount() {        
        this.props.initListPage();
    }
}

const mapState = (state) => ({
    list: state.get('list'),
})

const mapDispatch = (dispatch) => ({
    initListPage() {
        let action = getProjectListAction();
        dispatch(action);
    }
})

export default connect(mapState, mapDispatch)(ProjectList);
