import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Footer from '../../components/footer';
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
}
const mapState = (state) => ({
    
})

const mapDispatch = (dispatch) => ({

})

export default connect(mapState, mapDispatch)(Personal);