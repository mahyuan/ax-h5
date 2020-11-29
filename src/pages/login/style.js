import Styled from 'styled-components';

export const LoginWrap = Styled.div`
    position: relative;
    .login-content {
        width: 100%;
        margin-top: 50px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-content: center;
        align-items: center;
    }
    .row {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: .8rem;
        box-sizing: border-box;
        line-height: .8rem;
        .label, .input, .button {
            display: inline-block;
            width: 4rem;
            height: 0.5rem;
            line-height: 0.5rem;
        }
        .label {
            /* line-height: 0.8rem; */
        }
        .input {

        }
        .username {

        }
        .password {

        }
        .button {
            border: 1px solid red;
            background-color: #f00;
            border-radius: 0.3rem;
            height: 0.6rem;
            text-align: center;
            line-height: 0.6rem;
            color: #fff;
            margin-top: 0.2rem;
        }
    }
`;

