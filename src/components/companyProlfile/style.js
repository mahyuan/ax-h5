import Styled from 'styled-components';

export const ProfileWrap = Styled.div`
    position: relative;
    display: inline-block;
    width: 100%;
    text-align: center;
    padding: 0.2rem 0.3rem;
    box-sizing: border-box;
    // border: 0.01rem dotted red;
`;
export const ProfileItem = Styled.div`
    display: inline-block;
    width: 2rem;
    padding: 0.2rem 0.03rem 0.1rem;
    .profileTitle {
        display: inline-block;
        width: 0.8rem;
        height: 0.8rem;
        line-height: 0.8rem;
        font-size: 0.3rem;
        text-align: center;
        border-radius: 50%;
        color: #333;
        border: 0.01rem solid #333;
    }
    .profileTextContent {
        display: inline-block;
        text-align: center;
        margin: 0.2rem 0;
        .textItem {
            display: inline-block;
            width: 100%;
            text-align: center;
            font-size: 0.28rem;
            line-height: 0.36rem;
        }
    }


`;
