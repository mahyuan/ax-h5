import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Footer from '../../components/footer';
import {
    ActivityWrap,
} from './style';


class Activity extends PureComponent {
    render() {
        return (
            <ActivityWrap>
                <div>activity
                    <Footer current={this.props.match.path}></Footer>
                </div>
            </ActivityWrap>
        )
    }
}

const mapState = (state) => ({
    
})

const mapDispatch = (dispatch) => ({

})

export default connect(mapState, mapDispatch)(Activity);
