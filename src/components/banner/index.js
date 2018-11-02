import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {
    BannerWrap
} from './style';

class Banner extends PureComponent {
    render() {
        let { banner } = this.props;
        return (
            <BannerWrap>banner</BannerWrap>
        )
    }
}
const mapState = (state) => ({
    banner: state.getIn(['home', 'banner'])
})

const mapDispatch = (dispatch) => ({
    
})

export default connect(mapState, mapDispatch)(Banner);
