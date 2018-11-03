import Styled from 'styled-components';

export const DetailConainter = Styled.div`
    display: block;
    position: relative;
    color: #333;
    font-size: 0.24rem;
    padding-top: 0.85rem;
    overflow: hidden;
    .content {
        display: inline-block;
        width: 100%;
        height: 2rem;
    }
    .header_look {
        display: inline-block;
        width: 100%;
        height: 0.8rem;
        line-height: 0.8rem;
        font-size: 0.3rem;
        text-align: center;
    }
`
export const DetailContent = Styled.div`
    position: relative;
    display: block;
    .projectName {
        display: inline-block;
        width: 100%;
        line-height: 0.42rem;
        padding: 0.15rem 0.2rem 0.05rem;
        font-size: 0.3rem;
        font-weight: bold;
    }
    .projectPrice {
        display: inline-block;
        width: 100%;
        line-height: 0.42rem;
        padding: 0.1rem 0.2rem;
        font-size: 0.28rem;
        font-weight: bold;
        color: #f00;
    }
    .projectDetail {
        display: inline-block;
        padding: 0.1rem 0.2rem 0.2rem;
        overflow: hidden;
        line-height: 0.4rem;
        border-bottom: 0.01rem solid #ccc;
        .country, .people {
            display: inline-block;
            line-height: 0.36rem;
        }
        .time {
            display: inline-block;
            width: 100%;
        }
    }
    .more_info {
        position: relative;
        display: block;
        width: 100%;
        .projectInfoTitle {
            display: inline-block;
            height: 0.4rem;
            line-height: 0.4rem;
            font-size: 0.28rem;
            font-weight: bold;
            color: #222;
            padding: 0.15rem 0.2rem;
        }
        .images{
            display: block;
            width: calc(100% - 0.4rem);
            margin: 0 auto;
        }
    }
`
