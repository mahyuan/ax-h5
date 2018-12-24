import Styled from 'styled-components';

export const ConsultWrap = Styled.div`
    position: relative;
    display: block;
    height: 100vh;
    border: 0.01rem solid #eee;
    box-sizing: border-box;
`;
export const MessageWrap = Styled.div`
    display: block;
    margin-top: 0.8rem;
    padding: 0.2rem;
`;
export const InsetContainer = Styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 2rem;
    border-top: 0.01rem solid #111;
    padding-top: 0.01rem;
    box-sizing: border-box;
    .textarea {
        display: block;
        width: 100%;
        height: 100%;
        padding: 0.15rem 0.1rem 0.6rem;
        box-sizing: border-box;
        font-size: 0.26rem;
        border: none;
        outline: none;
        background: #fff;
        color: #333;
    }
    .buttonContent {
        display: block;
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        text-align: center;
        height: 0.6rem;
        padding: auto 0.3rem;
        box-sizing: border-box;
        // border: 0.01rem solid red;
        .insertButton {
            display: inline-block;
            width: 0.8rem;
            height: 0.4rem;
            margin: 0.1rem 0.2rem;
            line-height: 0.4rem;
            font-size: 0.22rem;
            box-sizing: border-box;
            text-align: center;
            border: 0.01rem solid #aaa;
            border-radius: 0.1rem;
        }
    }
`;
