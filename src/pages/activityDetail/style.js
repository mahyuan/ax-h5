import Styled from 'styled-components';

export const ActivityContainer = Styled.div`
    position: relative;
    display: block;
    box-sizing: border-box;
`
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
`
