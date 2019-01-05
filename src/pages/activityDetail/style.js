import Styled from 'styled-components';

export const ActivityContainer = Styled.div`
    position: relative;
    display: block;
    box-sizing: border-box;
`;
export const Content = Styled.div`
    position: relative;
    display: block;
    margin-top: 0.8rem;
    padding: 0.2rem 0.2rem 0.3rem;
    box-sizing: border-box;
    .banner_content {
        display: block;
        width: 100%;
        .banner_image {
            display: block;
            width: 100%;
        }
    }
    .main {
        display: block;
        width: 100%;
        box-sizing: border-box;
        .image_content {
            display: block;
            width: 100%;
            img {
                display: block;
                width: 100%;
            }
        }
    }
    .text_content {
    border: 0.01 rem solid #999;
        border-top: none;
        padding-bottom: 0.1rem;
        .item_title {
            display: inline-block;
            height: 0.4rem;
            line-height: 0.4rem;
            margin-top: 0.1rem;
            padding: 0 0.1rem;
            font-size: 0.26rem;
            box-sizing: border-box;
            font-weight: bold;
        }
        .date_wrap {
            display: block;
            font-size: 0.22rem;
            padding: 0 0.1rem;
            span {
                display: inline-block;
                height: 0.4rem;
                line-height: 0.4rem;
            }
            .date_text {
                width: 1.1rem;
            }
            .date_content {
                width: fit-content;
            }
        }
    }
`;
