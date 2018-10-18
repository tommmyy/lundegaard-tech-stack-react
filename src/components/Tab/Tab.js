import styled from 'styled-components';

const Tab = styled.a`
	margin-right: 16px;
	padding-top: 8px;
	padding-bottom: 8px;
	color: inherit;
	font-size: 14px;
	font-weight: 700;
	text-decoration: none;
	${props => props.active && 'border-bottom: 2px solid rgb(0, 119, 204)'};
	${props => props.active && 'border-color: rgb(0, 119, 204)'};
`;

export default Tab;
