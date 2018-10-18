import styled from 'styled-components';
import Relative from '../Relative';

const Tabs = styled(Relative)`
	box-sizing: border-box;
	display: flex;
	border-bottom: 1px solid ${props => props.theme.main};
	border-color: ${props => props.theme.main};
`;

export default Tabs;
