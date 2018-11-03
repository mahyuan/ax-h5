import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {
    ProjectWrap
} from './style';

class Project extends PureComponent {
    constructor(props) {
        super(props);
        console.log('projcet component props', props);
        
    }
    
    render() {
        const { projectTarget } = this.props;
        console.log('projectTarget', projectTarget);
        
        return (
            <ProjectWrap>
            {
                {/* project.map((pro, index) => {
                    return (
                        <div></div>
                    )
                }) */}

            }
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
