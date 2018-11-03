import Styled  from 'styled-components';

export const BannerWrap = Styled.div`
    position: relative;
    display: inline-block;
    width: 100%;
    color: red;
    font-size: 0.24rem;
    box-sizing: border-box;
    height: 3.24rem;
    overflow: hidden;
    .bannerItem {
        position: absolute;
        left: 0;
        top: 0;
        display: block;
        width: 100%;
        height: 100%;
        height: 3.24rem;
        box-sizing: border-box;
        transition: all 0.2s;
        opacity: 1;
        &.current {
            transform: translate(0, 0) translateZ(0);
            transition-duration: 300ms; 
            z-index: 99; 
        }
        &.next { 
            transform: translate(7.5rem, 0) translateZ(0);
            transition-duration: 0ms; 
            z-index: 99; 
        }
        &.hide {
            transform: translate(-7.5rem, 0) translateZ(0);
            transition-duration: 0ms; 
            z-index: 99; 
        }
        .bannerImg{
            display: block;
            width: 100%;
        }
    }

`
