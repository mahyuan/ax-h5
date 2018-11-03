import Styled from 'styled-components';

export const HomeWrap = Styled.div`
    .projectWrap {
        display: block; 
        background-color: #fff;
    }
    .hotRecommended {
        display: block;
        width: 100%;
        // height: 2rem;
        background-color: #eee;
    }

`
export const ProjectInfoTitle = Styled.div`
    position: relative;
    display: inline-block;
    width: 100%;
    box-sizing: border-box;
    padding: 0.15rem 0.3rem 0.02rem;
    .projectTag {
        display: inline-block;
        line-height: 0.3rem;
        font-size: 0.26rem;
        font-weight: bold;
        color: #333;
        &.hot {
            color: red;
        }
        span {
            color: #333;
            font-weight: 400;
        }
    }
    .showMore {
        position: absolute;
        right: 0.3rem;
        top: 0.15rem;
        display: inline-block;
        width: 0.8rem;
        height: 0.34rem;
        font-size: 0.26rem;
        line-height: 0.34rem;
        color: #333;
        font-weight: bold;
        &:hover {
            cursor: pointer;
            // color: #f00;
        }
    }
`