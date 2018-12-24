import Styled from 'styled-components';

export const ExplainWrap = Styled.div`
    position: relative;
    display: block;
    box-sizing: border-box;
`;
export const PointsRule = Styled.div`
    position: relative;
    display: block;
    width: 100%;
    box-sizing: border-box;
    margin-top: 0.8rem;
    padding: 0.3rem 0.2rem;
    .points_rule_wrap {
        position: relative;
        display: inline-block;
        width: 100%;
        box-sizing: border-box;
        line-height: 0.4rem;
        .points_rule_item {
            display: inline-block;
            width: 100%;
            box-sizing: border-box;
            height: 0.4rem;
            line-height: 0.4rem;
            padding: 0 0.2rem;
        }
    }
`;
export const LevelRule = Styled.div`
    position: relative;
    padding: 0.3rem 0.2rem;
    box-sizing: border-box;
    .rule_title {
        display: inline-block;
        width: 100%;
        height: 0.5rem;
        line-height: 0.5rem;
        font-size: 0.28rem;
        font-weight: bold;
    }
    .form_wrap {
        display: table;
        width: 100%;
        border: 0.01rem solid #f00;
        box-sizing: border-box;
        .form_row {
            box-sizing: border-box;
            .form_row_item {
                // display: inline-block;
                box-sizing: border-box;
                height: 0.8rem;
                line-height: 0.8rem;
                border: 0.01rem solid #ccc;
                padding: 0 0.1rem;
                text-align: center;
                .item {
                    width: 2.1rem;
                }
                .item3 {
                    width: 2.8rem;
                }
            }
        }
    }
`;
