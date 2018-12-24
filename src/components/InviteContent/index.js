import React from 'react';
import { Link } from 'react-router-dom';
import { InviteWrap } from './style';

export const InviteContent = () => {
    return (
        <InviteWrap>
            <Link to={`/invite`}>
                <button className='invite_button'>立即邀请</button>
            </Link>
        </InviteWrap>
    );
};

