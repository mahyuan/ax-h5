import Styled from 'styled-components';

export const DetailConainter = Styled.div`
    display: block;
    position: relative;
    color: #333;
    font-size: 0.24rem;
    height: 2rem;
    .content {
        display: inline-block;
        width: 100%;
        height: 2rem;
    }
`
export const CommonHeader = Styled.div`
    display: block;
    height: 1rem;
    border-bottom: 0.01rem solid #ddd;
    .header {
        display: inline-block;
        width: 100%;
        height: 1rem;
        line-height: 1rem;
        font-size: 0.3rem;
        color: #333;
        text-align: center;
    }
`
export const DetailContent = Styled.div`
    position: relative;
    display: block;
    .content {
        display: inline-block;
        border-bottom: 0.01rem solid #ccc;
    }
    .more_info {
        position: relative;
        display: block;
        width: 100%;
        .images{
            display: block;
            width: 7.5rem;
        }
    }
`
