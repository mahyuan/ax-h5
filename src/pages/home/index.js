import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Banner from '../../components/banner';

class Home extends PureComponent {
    render() {
        const features = [];
        return (
            <div>
                <Banner></Banner>
                {
                    features
                }
                <span>hemo</span>
            </div>
        )
    }
}

const mapState = (state) => ({

})

const mapDispatch = (dispatch) => {
    return {

    }
}

export default connect(mapState, mapDispatch)(Home);
