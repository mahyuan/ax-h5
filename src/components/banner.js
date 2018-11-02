import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {
    BannerWrap
} from '../pages/home/style';

class Banner extends PureComponent {
    render() {
        return (
            <BannerWrap>banner</BannerWrap>
        )
    }
}
const mapState = (state) => ({
    
})

const mapDispatch = (dispatch) => ({
    // return 
})

export default connect(mapState, mapDispatch)(Banner);
