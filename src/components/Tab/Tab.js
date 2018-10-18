import styled, { css } from 'styled-components';

const Tab = styled.a`
	margin-right: 16px;
	padding-top: 8px;
	padding-bottom: 8px;
	color: inherit;
	font-size: 14px;
	font-weight: 700;
	text-decoration: none;
	${props => props.active && css`
    	border-bottom: 2px solid ${props.theme.primary};
    	border-color: rgb(0, 119, 204);
  	`}
	:hover {
		color: red;
	}
`;

export default Tab;
