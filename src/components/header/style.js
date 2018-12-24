import Styled from 'styled-components';

export const CommonHeader = Styled.div`
    position: fixed;
    top: 0;
    left: 0;
    background-color: #fff;
    display: block;
    width: 100%;
    height: 0.8rem;
    border-bottom: 0.01rem solid #ddd;
    z-index: 199;
    .back {
        position: absolute;
        left: 0;
        top: 0;
        display: inline-block;
        width: 1.2rem;
        height: 100%;
        padding-left: 0.2rem;
        font-size: 0.26rem;
        line-height: 0.8rem;
        text-align: left;
    }
    span {
        display: inline-block;
        width: 100%;
        height: 0.8rem;
        line-height: 0.8rem;
        font-size: 0.3rem;
        text-align: center;
    }
`;
