import Styled from 'styled-components';

export const ExchangeWrap = Styled.div`

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
    }
`

export const ExchangeMain = Styled.div`
    dosplay: block;
    margin-top: 0.8rem;
    padding: 0.2rem 0.2rem;
`
