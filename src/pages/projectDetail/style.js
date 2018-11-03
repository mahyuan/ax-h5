import Styled from 'styled-components';

export const DetailConainter = Styled.div`
    position: relative;
    display: block;
    padding-top: 0.85rem;
    color: #333;
    font-size: 0.24rem;
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
    
    .footerPrice {
        display: inline-block;
        width: 2rem;
        text-align: left;
        height: 100%;
        line-height: .8rem;
        font-size: 0.28rem;
        color: #222;
    }
    .footerButton {
        display: inline-block;
        height: 0.5rem;
        width: 1.4rem;
        margin: 0.15rem 0.4rem;
        line-height: 0.5rem;
        background-color: #fff;
        border: 0.01rem solid #444;
        border-radius: 0.03rem;
        color: #444;
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
export const DetailFooter = Styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    display: inline-block;
    width: 100%;
    height: 0.8rem;
    padding: 0.15rem 0.2rem;
    background-color: #fff;
    border-top: 0.01rem solid #ddd;
    font-size: 0.26rem;
    z-index: 199;
    .footerPrice {
        display: inline-block;
        width: 2rem;
        text-align: left;
        height: 100%;
        line-height: .8rem;
        font-size: 0.28rem;
        color: #222;
    }
    .footerButton {
        display: inline-block;
        height: 0.5rem;
        width: 1.4rem;
        margin: 0.15rem 0.4rem;
        line-height: 0.5rem;
        background-color: #fff;
        border: 0.01rem solid #444;
        border-radius: 0.03rem;
        color: #444;
        text-align: center;
    }
    .apply {

    }
    .consult {

    }
`