import Styled from 'styled-components';

export const ProfileWrap = Styled.div`
    position: relative;
`;
export const ProfileContent = Styled.div`
    position: relative;
    display: block;
    padding: 0 0.2rem;
    margin-top: 0.8rem;
    .info_content{
        display: inline-block;
        height: 0.8rem;
        width: 100%;
        line-height: 0.8rem;
        box-sizing: border-box;
        border-bottom: 0.01rem solid #eee;
        .info_item {
            display: inline-block;
            width: 80%;
        }
        .change_button {
            display: inline-block;
            width: 20%;
            text-align: center;
        }
    }
`;

export const ChangePassward = Styled.div`
    position: relative;
    display: inline-block;
    width: 100%;
    margin-top: 0.5rem;
    padding: 0.2rem auto 0.2rem;
    box-sizing: border-box;
    text-align: center;
    .change_passwd_button {
        display: inline-block;
        width: 2rem;
        height: 0.5rem;
        margin: 0.2rem 0;
        text-align: center;
        box-sizing: border-box;
        line-height: 0.5rem;
        border: 0.01rem solid #999;
        border-radius: 0.1rem;
    }
`;

export const Logout = Styled.div`
    position: relative;
    display: inline-block;
    width: 100%;
    padding: 0.2rem auto;
    box-sizing: border-box;
    text-align: center;
    .logout_button {
        display: inline-block;
        width: 2rem;
        height: 0.5rem;
        line-height: 0.5rem;
        margin: 0.2rem 0;
        text-align: center;
        box-sizing: border-box;
        border: 0.01rem solid #999;
        border-radius: 0.1rem;
    }

`;

