import Styled from 'styled-components';

export const MyAppliedWrap = Styled.div`
    position: relative;
    display: block;
    box-sizing: border-box;
	margin-top: 0.8rem;
`
export const AppliedContent = Styled.div`
    position: relative;
    display: block;
    box-sizing: border-box;
	/* padding: 0.2rem 0.4rem; */
	margin: 0.2rem 0.4rem;
	.project {
		line-height: 0.7rem;
	}
	.funds {
		text-align: center;
		line-height: 0.6rem;
	}
	.labelInsert {
		display: block;
		/* width: 100%; */
		padding: 0.2rem 0;
		box-sizing: border-box;
		border-bottom: 0.01rem solid #f5f5f5;
		input, textarea {
			width: 100%;
			padding: 0 0.15rem;
			line-height: 0.5rem;
			box-sizing: border-box;
			border: 0.01rem solid #999;
			border-radius: 0.06rem;
			&::focus {
				/* border: 0.01rem solid #333;; */
			}
			&::placeholder {
				color: #ccc;
			}
		}
	}
	.submitApply {
		display: block;
		width: 1.2rem;
		line-height: 0.4rem;
		margin: 0.2rem auto;
		text-align: center;
		background: #f5f5f5;
		border-radius: 0.06rem;
		border: 0.01rem solid #333;
	}
`
