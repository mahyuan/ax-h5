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
            currentKey: 0
        };
        this.toSlide = true;
    }

    componentDidMount() {
        this.setSlider();
    }

    componentWillUnmount() {
        this.toSlide = false;
    }

    setSlider() {
        const timer = setInterval(() => {
            if (this.toSlide) {
                let key = this.state.currentKey;
                const count = this.props.count;

                if (count < 1) return;
                if (key < count) key++;
                if (key === count) key = 0;

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
        const key = this.state.currentKey;
        if (index === key) {
            clazz = 'current';
        } else if (index === key + 1) {
            clazz = 'next';
        } else {
            clazz = 'hide';
        }
        return `bannerItem ${clazz}`;
    }

    render() {
        const { banner, count } = this.props;
        const list = (banner && banner.size > 0) ? banner.toJS() : [];
        return (
            list.length > 0 ? (
                <BannerWrap>
                    {
                        list.map((item, index) => {
                            return (
                                <a className={this.setClass(index, count)} key={item._id} href={item.jump_url} >
                                    <img className='bannerImg' src={item.img_url} alt='banner images' />
                                </a>
                            );
                        })
                    }
                </BannerWrap>
            ) : (
                <a className='bannerItem' href='/' >
                    <img className='bannerImg' src='#' alt='banner images' />
                </a>
            )
        );
    }
}
const mapState = (state) => ({
    banner: state.get('banner'),
    count: state.get('banner') && state.get('banner').size
});

const mapDispatch = (dispatch) => ({

});

export default connect(mapState, mapDispatch)(Banner);
