import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Header from '../../components/header';
import { getPersonalData } from '../../store/actionCreators';
import { 
    ExchangeWrap,
    TopContent,
    ExchangeMain,
} from './style';


class PointsExchange extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: ''
        }
        this.selectedPoints = '';
        this.selectAllPointsHandle = this.selectAllPointsHandle.bind(this);
        this.pointInputChange = this.pointInputChange.bind(this);
    }

    componentDidMount() {
        this.props.getData();
    }

    render() {
        let { personal_info, exchangeHandle } = this.props;
        let { inputValue } = this.state;
        
        let info = ( personal_info && personal_info.size > 0 ) ? personal_info.toJS() : {};
        
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
                        <span className="integral">{info.points}</span>
                        <span className="integral_level">等级: {info.level}</span>
                    </div>
                </TopContent>
                <ExchangeMain>
                    <div className="exchange_content">
                        <label className="input_label" htmlFor="exchange">积分兑换:
                            <input value={ inputValue } onChange={ this.pointInputChange } className="point_input" placeholder="请输入兑换积分" name="exchange" />
                            {/* <i className="clear_all">X</i> */}
                        </label>
                        <button onClick={() => this.selectAllPointsHandle(info.points)} className="exchange_all_button">全部兑换</button>
                    </div>
                    <div className="exchange_explain">
                        <h3 className="explan_title">兑换说明</h3>
                        {
                            info.exchange_explain
                            ? info.exchange_explain.map((item, index) => {
                                return (
                                    <span key={index} className="explan_item">{item}</span>
                                )
                            })
                            : null
                        }
                    </div>
                    <div className="exchange_route">
                        <img className="exchange_qr" src={info.qr_url} alt="客服二维码" />
                        <button className="exchange_button" onClick={exchangeHandle}>兑换</button>
                    </div>
                </ExchangeMain>
            </ExchangeWrap>
        )
    }

    pointInputChange(e) {
        let newValue  = e.target.value;
        if(/\D/.test(newValue)) return console.log(`please input number , ${newValue}`);
        this.setState({
            inputValue: newValue
        });

        this.selectedPoints = this.state.inputValue;
        console.log('this.selectedPoints', this.selectedPoints);
    }

    selectAllPointsHandle(points) {
        if(points) {
            this.selectedPoints = points;
            this.setState((state) => ({
                inputValue: points
            }));
            console.log('this.selectedPoints', this.selectedPoints);
            
        }
    }
    
}

const mapState = (state) => ({
    personal_info: state.get('personal_info'),
})

const mapDispatch = (dispatch) => ({
    getData() {        
        if(!(this.personal_info && this.personal_info.size > 0)) {
            let action = getPersonalData();
            dispatch(action);
        }
    },
    exchangeHandle() {
        console.log('exchangeHandle event happened!');
        
    }
})

export default connect(mapState, mapDispatch)(PointsExchange);