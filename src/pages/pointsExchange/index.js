import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Header from '../../components/header';
import { 
    ExchangeWrap,
    TopContent,
    ExchangeMain,
} from './style';


class PointsExchange extends PureComponent {
    render() {
        return (
            <ExchangeWrap>
                <Header>
                    {
                        <span show_back="show">积分兑换</span>
                    }
                </Header>
                <TopContent>
                    <div className="top_wrap">
                        <h3 className="total_integral">总积分</h3>
                        {/* <span className="integral">{info.points}</span>
                        <span className="integral_level">等级: {info.level}</span> */}
                    </div>
                </TopContent>
                <ExchangeMain>
                    PointsExchange
                </ExchangeMain>
            </ExchangeWrap>
        )
    }

}

export default PointsExchange;