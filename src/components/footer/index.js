import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
    DetailFooter,
} from './style';

class Footer extends PureComponent {
    render() {
        this.setClass();
        let { current } = this.props;
        
        return (
            <DetailFooter>
                <div className="footerContent">
                    <Link to="/" className={this.setClass(current, '/')}>发现</Link>
                    <Link to="/activitives" className={this.setClass(current, '/activitives')}>活动</Link>
                    <Link to="/personal" className={this.setClass(current, '/personal')}>我的</Link>
                </div>
            </DetailFooter>
        )
    }
    setClass(path, str) {        
        let clazz = "footerBotton";
        if(path === str) {
            clazz = clazz  + ' currentButton'
        }
        return clazz;
    }
}

const mapState = (state) => ({

})

const mapDispatch = (dispatch) => ({

})

export default connect(mapState, mapDispatch)(Footer);