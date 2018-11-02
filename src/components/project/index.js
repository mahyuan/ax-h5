import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {
    ProjectWrap
} from './style';

class Project extends PureComponent {
    render() {
        return (
            <ProjectWrap>
                ProjectWrap
            </ProjectWrap>
        )
    }
}

export default connect(null, null)(Project);
