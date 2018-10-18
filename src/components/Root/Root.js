import React from 'react';
import { injectGlobal } from 'styled-components';
import Tabs from '../Tabs';
import Tab from '../Tab';

// eslint-disable-next-line no-unused-expressions
injectGlobal`
	body {
		font-family: Roboto;
	}

	p {
		margin-bottom: 8px;
	}
`;

const Root = () => (
	<Tabs>
		<Tab>Beep</Tab>
		<Tab active>Boop</Tab>
		<Tab>Bop</Tab>
	</Tabs>
);

export default Root;
