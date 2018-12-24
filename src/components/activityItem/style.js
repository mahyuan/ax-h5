import Styled from 'styled-components';

export const ActivityItemWrap = Styled.div`
    position: relative;
    display: block;
    box-sizing: border-box;
    padding: 0.2rem 0.2rem;
    .item_content {
        position: relative;
        display: block;
        border: 0.01rem solid #999;
        .activity_banner {
            position: relative;
            display: block;
            width: 100%;
            box-sizing: border-box;
            .banner_image {
                display: block;
                box-sizing: border-box;
                width: 100%;
            }
        }
        .item_title {
            display: inline-block;
            height: 0.5rem;
            line-height: 0.5rem;
            padding: 0.1rem 0.1rem;
            font-size: 0.26rem;
            box-sizing: border-box;
            font-weight: bold;
        }
        .date_wrap {
            display: block;
            font-size: 0.22rem;
            padding: 0.1rem 0.1rem 0.01rem;
            .date_text {
                display: inline-block;
                width: 1.1rem;
            }
            .date_content {
                height: 0.4rem;
                line-height: 0.4rem;
            }
        }
        .activity_outtime {
            display: inline-block;
            width: 2rem;
            height: 0.5rem;
            line-height: 0.5rem;
            margin: 0.1rem 0.1rem 0.2rem;
            font-size: 0.24rem;
            border: 0.01rem solid #666;
            border-radius: 0.1rem;
            background-color: #f5f5f5;
            text-align: center;
            outline: none;
            white-space: nowrap;
        }
    }
`;

