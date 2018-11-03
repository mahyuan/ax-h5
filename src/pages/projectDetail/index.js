import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {
    DetailConainter,
} from './style';
import { getDetailDataAction } from './store/actionCreators';

class ProjectDetail extends PureComponent {
    render() {
        let msg = 'sdfsdsdf';
        console.log('ProjectDetail render');
        return (
            <DetailConainter>
                <div className="content">
                    Detail page
                    {msg}
                </div>
            </DetailConainter>
        )
    }
    componentDidMount() {
        this.props.getData();
    }
   
}

const mapState = (state) => ({

})

const mapDispatch = (dispatch) => ({
    getData() {
        let action = getDetailDataAction();
        dispatch(action);
    }
})

export default connect(mapState, mapDispatch)(ProjectDetail);





