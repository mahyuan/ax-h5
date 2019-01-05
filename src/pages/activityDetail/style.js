import Styled from 'styled-components';

export const ActivityContainer = Styled.div`
    position: relative;
    display: block;
    box-sizing: border-box;
`;
export const Content = Styled.div`
    position: relative;
    display: block;
    margin-top: 0.8rem;
    padding: 0.2rem 0.2rem 0.3rem;
    box-sizing: border-box;
    .banner_content {
        display: block;
        width: 100%;
        .banner_image {
            display: block;
            width: 100%;
        }
    }
    .main {
        display: block;
        width: 100%;
        box-sizing: border-box;
        .image_content {
            display: block;
            width: 100%;
            img {
                display: block;
                width: 100%;
            }
        }
    }
	.desc_wrap {
		padding: 10px 0;
		line-height: 1.5;
		.item_title {
			display: inline-block;
			height: 0.5 rem;
			line-height: 0.5 rem;
			padding: 0.1 rem 0.1 rem;
			font-size: 0.26 rem;
			box-sizing: border-box;
			font-weight: bold;
		}
		.date_wrap {
			display: block;
			font-size: 0.22 rem;
			padding: 0.1 rem 0.1 rem 0.01 rem;
			.date_text {
				display: inline-block;
				width: 1.1 rem;
			}
			.date_content {
				height: 0.4 rem;
				line-height: 0.4 rem;
			}
		}
	}
`;
