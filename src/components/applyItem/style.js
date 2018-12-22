import Styled from 'styled-components';

export const ApplyItemWrap = Styled.div`
	display: flex;
	justify-content: flex-start;
	box-sizing: border-box;
	margin: 0.15rem 0.2rem;
	padding: 0 0.4rem;
	line-height: 0.5rem;
	border: 0.01rem solid #333;
	text-align: left;
	.left {
		display: inline-block;
		width: 60%;
		margin: 0.15rem 0;
		h4 {
			font-weight: bold;
		}
	}
	.right {
		display: inline-block;
		width: 40%;
		margin: 0.15rem 0;
	}
`
