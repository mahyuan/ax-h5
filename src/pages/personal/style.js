import Styled from 'styled-components';

export const PersionalWrap = Styled.div`
    position: reloative;
    display: block;
    box-sizing: border-box;
`
export const TopContent = Styled.div`
    display: block;
    padding: 0 auto 0.4rem;
    overflow: hidden;
    box-sizing: border-box;
    .top_wrap {
        display: inline-block;
        text-align: center;
        width: 100%;
        margin-top: 0.3rem;
        box-sizing: border-box;
        .total_integral {
            display: inline-block;
            width: 100%;
            height: 0.4rem;
            font-size: 0.24rem;
            font-weight: bold;
            line-height: 0.4rem;
            text-align: center;
            box-sizing: border-box;
        }
        .integral {
            display: inline-block;
            width: 100%;
            height: 0.6rem;
            line-height: 0.6rem;
            font-size: 0.36rem;
            font-weight: bold;
            text-align: center;
            box-sizing: border-box;
        }
        .integral_level {
            display: inline-block;
            width: 100%;
            height: 0.4rem;
            font-size: 0.26rem;
            font-weight: bold;
            line-height: 0.4rem;
            text-align: center;
            box-sizing: border-box;
        }
        .exchange_button {
            display: inline-block;
            margin: 0.2rem auto 0.4rem;
            width: 1.4rem;
            height: 0.5rem;
            line-height: 0.5rem;
            text-align: center;
            white-space: nowrap;
            background-color: #f5f5f5;
            border-radius: 0.1rem;
            border: 0.01rem solid #666;
            color: #333;
            font-size: 0.22rem;
            outline: none;
            cursor: pointer;
            box-sizing: border-box;
        }
    }
`

export const MainContent = Styled.div`
    display: block;
    box-sizing: border-box;
    border-top: 0.01rem solid #ccc;
    .item {
        display: inline-block;
        width: 100%;
        height: 0.8rem;
        line-height: 0.8rem;
        padding: 0 0.4rem;
        cursor: pointer;
        box-sizing: border-box;
        border-bottom: 0.01rem solid #ccc;
    }
`