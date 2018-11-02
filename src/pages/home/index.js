import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Banner from '../../components/banner/index';
import { getHomeDataAction } from './store/actionCreators';

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
    componentDidMount() {
        this.props.getInit();
    }
}

const mapState = (state) => ({

})

const mapDispatch = (dispatch) => {
    return {
        getInit() {
            let action = getHomeDataAction();
            dispatch(action);

        }
    }
}

export default connect(mapState, mapDispatch)(Home);
