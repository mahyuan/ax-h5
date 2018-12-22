import Styled from 'styled-components';

export const InvitationWrap = Styled.div`
	position: relative;
	table, th, td {
		border: 1px solid black;
	}
	table {
		width: 100%;
		/* border-color: red; */
		border-collapse: collapse;
		tr {
			width: 100%;
			td {
				height: 0.5rem;
				line-height: 0.5rem;
				text-align: center;
			}
		}
	}
	.inviteButton {
		display: inline-block;
		margin: 0.2rem auto;
		width: 1.4rem;
		height: 0.5rem;
		margin-left: calc(50% - 0.7rem);
		line-height: 0.5rem;
		background-color: #f5f5f5;
		border: 0.01rem solid #777;
		border-radius: 0.04rem;
		box-sizing: border-box;
	}
`
export const InvitationTotal = Styled.div`
	margin-top: 0.8rem;
	padding: 0.2rem 0.15rem;
	box-sizing: content-box;
	.title {
		height: 0.6rem;
		line-height: 0.6rem;
		font-weight: bold;
	}
`
