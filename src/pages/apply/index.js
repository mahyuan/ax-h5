import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { submitApply } from '../../store/actionCreators';
import Header from '../../components/header';
import {
    ApplyWrap,
    AppliedContent
} from './style';

class Apply extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            point: '',
            userName: '',
            school: '',
            mobile: '',
            message: ''
        };
        this.changeInputValue = this.changeInputValue.bind(this);
    }
    changeInputValue(name, $event) {
        let value = $event.target.value;
        if (name === 'mobile') {
            value = value.replace(/\D/g, '');
            value.length >= 11 && (value = value.substring(0, 11));
        }

        this.setState(() => ({
            [name]: value
        }));
    }
    render() {
        const { point, userName, school, mobile, message } = this.state;
        const { submitApplayHandle } = this.props;
        return (
            <ApplyWrap>
                <Header>
                    {
                        <span show_back='show'>报名</span>
                    }
                </Header>
                <AppliedContent>
                    {/* <h3>英国证券交易所</h3>
                    <p>40000</p> */}
                    <h3 className='project'>项目名称：<em>英国证券交易所</em></h3>
                    <p className='funds'>$40000</p>
                    <label className='labelInsert' htmlFor='point'>
                        <input name='point' onChange={($event) => this.changeInputValue('point', $event)} value={point} placeholder='使用积分' />
                    </label>
                    <label className='labelInsert' htmlFor='userName'>
                        <input name='userName' onChange={($event) => this.changeInputValue('userName', $event)} value={userName} placeholder='姓名' />
                    </label>
                    <label className='labelInsert' htmlFor='school'>
                        <input name='school' onChange={($event) => this.changeInputValue('school', $event)} value={school} placeholder='学校' />
                    </label>
                    <label className='labelInsert' htmlFor='mobile'>
                        <input type='number' name='mobile' onChange={($event) => this.changeInputValue('mobile', $event)} value={mobile} placeholder='联系方式' />
                    </label>
                    <label className='labelInsert' htmlFor='message'>
                        <input onChange={($event) => this.changeInputValue('message', $event)} value={message} rows='3' name='message' placeholder='留言' />
                    </label>
                    <button className='submitApply' onClick={($event) => submitApplayHandle(this.state, $event)}>报名</button>
                </AppliedContent>
            </ApplyWrap>
        );
    }
}

const mapState = (state) => ({

});

const mapDispatch = (dispatch) => ({
    submitApplayHandle(state, $event) {
        console.log('state', state);
        console.log('$evetn', $event);
        const action = submitApply(state);
        dispatch(action);
    }
});

export default connect(mapState, mapDispatch)(Apply);
