import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import Project from '../../components/project';
import Header from '../../components/header';
import {
    ProjectWrap
} from './style';
import { getProjectListAction } from '../../store/actionCreators';

class ProjectList extends PureComponent {
    componentDidMount() {
        this.props.initListPage();
    }
    render() {
        const { list } = this.props;
        const proList = (list && list.size > 0) ? list.toJS() : [];

        if (proList.length > 0) {
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
                                );
                            })
                        }
                    </Fragment>
                </ProjectWrap>
            );
        } else {
            return null;
        }
    }
}

const mapState = (state) => ({
    list: state.get('list')
});

const mapDispatch = (dispatch) => ({
    initListPage() {
        const action = getProjectListAction();
        dispatch(action);
    }
});

export default connect(mapState, mapDispatch)(ProjectList);
