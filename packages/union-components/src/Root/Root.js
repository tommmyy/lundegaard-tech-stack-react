import React, { Fragment } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Tabs from '../Tabs';
import Tab from '../Tab';

// eslint-disable-next-line no-unused-expressions
const GlobalStyle = createGlobalStyle`
	body {
		font-family: Roboto;
	}

	p {
		margin-bottom: 8px;
	}
`;

const Themes = {
	GENERAL: {
		main: 'grey',
		primary: 'rgb(0, 119, 204)',
	},
};

const Root = () => (
	<ThemeProvider theme={Themes.GENERAL}>
		<Fragment>
			<Tabs>
				<Tab>Beep</Tab>
				<Tab active>Boop</Tab>
				<Tab>Bop</Tab>
			</Tabs>
			<GlobalStyle />
		</Fragment>
	</ThemeProvider>
);

export default Root;
