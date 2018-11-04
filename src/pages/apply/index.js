import React, { PureComponent } from 'react';
import Header from '../../components/header';
import {
    ApplyWrap,
    ApplyContainer,
} from './style';


class Apply extends PureComponent {
    render() {
        return (
            <ApplyWrap>
                <Header>
                    {
                        <span show_back='show'>报名</span>
                    }
                </Header>
                <ApplyContainer>
                    <h3>英国证券交易所</h3>
                    <p>40000</p>
                </ApplyContainer>
            </ApplyWrap>
        )
    }
}

export default Apply;