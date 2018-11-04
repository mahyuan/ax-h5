import Styled from 'styled-components';

export const DetailFooter = Styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 0.8rem;
    background-color: #fff;
    border-top: 0.01rem solid #ddd;
    z-index: 199;
    padding: auto;
    overflow: hidden;
    // padding: 0.15rem 0.2rem;
    .footerContent {
        font-size: 0.26rem;
        display: flex;
        justify-content: space-between;
        flex-wrap: nowrap;
        width: 7rem;
        height: 0.6rem;
        margin: 0.1rem 0.25rem;
        .footerBotton {
            display: inline-block;
            width: 1.6rem;
            height: 0.6rem;
            border-radius: 0.1rem;
            box-sizing: border-box;
            text-align: center;
            line-height: 0.6rem;
            background-color: #fff;
            border: 0.01rem solid #333;
            text-decoration: none;
            color: #333;
            &.currentButton {
                background-color: #9fdada;
            }
        }
    }
`