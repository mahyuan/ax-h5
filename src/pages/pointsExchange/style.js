import Styled from 'styled-components';

export const ExchangeWrap = Styled.div`

`
export const TopContent = Styled.div`
    display: block;
    margin-top: 0.8rem;
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
    box-sizing: border-box;
    .exchange_content {
        display: inline-block;
        width: 100%;
        padding: 0.2rem 0.2rem;
        line-height: 0.8rem;
        border-top: 0.01rem solid #999;
        border-bottom: 0.01rem solid #999;
        box-sizing: border-box;
        .input_label {
            position: relative;
            display: inline-block;
            width: calc(100% - 1.6rem);
            .point_input {
                width: calc(100% - 2rem);
                height: 0.4rem;
                margin-left: 0.05rem;
                padding-left: 0.1rem;
                border: 0.01rem solid #999;
                border-radius: 0.07rem;
            }
        }
        .exchange_all_button {
            display: inline-block;
            width: 1.2rem;
            border: 0.01rem solid #ccc;
            background-color: #fff;
            border-radius: 0.06rem;
        }
    }
    .exchange_explain {
        display: block;
        padding: 0.2rem 0.2rem;
        box-sizing: border-box;
        .explan_title {
            display: inline-block;
            width: 100%;
            height: 0.5rem;
            line-height: 0.5rem;
        }
        .explan_item {
            display: inline-block;
            width: 100%;
            line-height: 0.5rem;
        }
    }
    .exchange_route {
        display: block;
        width: 100%;
        text-align: center;
        padding: 0.3rem 0.2rem;
        box-sizing: border-box;
        .exchange_qr {
            display: block;
            width: 3rem;
            margin: 0.2rem auto 0.3rem;
        }
        .exchange_button{
            display: inline-block;
            width: 3rem;
            height: 0.5rem;
            line-height: 0.5rem;
            margin: 0.2rem auto;
            border: 0.01rem solid #999;
            border-radius: 0.08rem;
            text-align: center;
            background-color: #fff;
            font-size: 0.28rem;
            font-weight: bold;
        }
    }
`

