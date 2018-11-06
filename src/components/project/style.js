import Styled from 'styled-components';

export const ProjectWrap = Styled.div`
    display: flex;
    justify-content: flex-start;
    margin: 0.15rem 0.3rem;
    padding: 0.15rem;
    box-sizing: border-box;
    border: 0.01rem solid #333;
    .imgContent {
        display: flex;
        width: 2rem;
        height: 2rem;
        margin-right: 0.3rem;
        // margin-left: 0.2rem;
        // border: 0.01rem dashed red;
        img{
            height: 100%;
            display: block;
        }
    }
    .textContent {
        position: relative;
        display: flex;
        flex-grow: 1;
        flex-wrap: wrap;
        align-items: flex-start;
        padding: 0.3rem 0.02rem;
        color: #333;
        // border: 0.01rem dashed blue;
        .overview {
            display: inline-block;
            width: 100%;
            height: 0.4rem;
            font-size: 0.26rem;
            line-height: 0.2rem;
            font-weight: bold;
            text-align: left;
        }
        .detail {
            display: inline-block;
            width: 100%;
            font-size: 0.24rem;
            line-height: 0.3rem;
            text-align: left;
            // padding-right: 1rem;
        }
        .toDetail {
            position: absolute;
            right: 0.12rem;
            top: 0.2rem;
            display: inline-block;
            width: 0.8rem;
            height: 0.4rem;
            font-size: 0.26rem;
            text-align: center;
            border-radius: 0.1rem;
            background-color: #88c7e6;
            line-height: 0.4rem;
            color: #fff;
            border: 0.01rem solid #333;
        }
    }

`
