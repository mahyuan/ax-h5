import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Footer from '../../components/footer';
import {
    getPersonalData,
} from '../../store/actionCreators';
import {
    PersionalWrap,
} from './style';

class Personal extends PureComponent {
    render() {
        return (
            <PersionalWrap>
                <div>
                    Personal
                </div>
                <Footer current={this.props.match.path}></Footer>
            </PersionalWrap>
        )
    }
    componentDidMount() {
        this.props.fetchPersonDeatil();
    }
}
const mapState = (state) => ({
    
})

const mapDispatch = (dispatch) => ({
    fetchPersonDeatil() {
        let action = getPersonalData();
        dispatch(action);
    }
})

export default connect(mapState, mapDispatch)(Personal);