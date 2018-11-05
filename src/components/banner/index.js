import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {
    BannerWrap
} from './style';
import { setInterval } from 'timers';

class Banner extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            currentKey: 0,
            count: 0,
        }
        this.toSlide = true;
    }
    render() {
        let { banner } = this.props;
        let list = banner.toJS();
        this.setState((state) => ({
            count: list.length
        }));
        
        return (
            <BannerWrap>
                {
                    list.map((item, index) => {
                        return (
                            <a className={ this.setClass(index, list.length) } key={item.id} href={item.jump_url} >
                                <img className="bannerImg" src={item.img_url} alt="banner images" />
                            </a>
                        )
                    })
                }
            </BannerWrap>
        )
    }
    componentDidMount() {
        this.setSlider();
    }
    componentWillUnmount() {
        this.toSlide = false;
    }
    setSlider() {
        let timer = setInterval(() => {
            if(this.toSlide) {
                let key = this.state.currentKey;
                let count = this.state.count;
                
                if(count < 1) return;
                if(key < count) key++;
                if(key === count) key = 0;
                
                this.setState((state) => ({
                    currentKey: key
                }));
            } else {
                clearInterval(timer);
                this.toSlide = false;
            }
        }, 3000);

    }
    setClass(index, count) {
        let clazz = '';
        let key = this.state.currentKey;
        if(index === key) {
            clazz = 'current';
        } else if(index === key + 1) {
            clazz = 'next';
        } else {
            clazz = 'hide';
        }
        return `bannerItem ${clazz}`;
    }
}
const mapState = (state) => ({
    banner: state.get('banner')
})

const mapDispatch = (dispatch) => ({
    
})

export default connect(mapState, mapDispatch)(Banner);
