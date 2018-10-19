import React, { Fragment } from 'react';

import { createGlobalStyle, ThemeProvider } from 'styled-components';

import { themes } from 'union-components';
import RegistrationForm from '../RegistrationForm';

const GlobalStyles = createGlobalStyle`body {
	font-family: Roboto;
}`;

const Root = () => (
	<ThemeProvider theme={themes.main}>
		<Fragment>
			<RegistrationForm onSubmit={x => console.log(x)} />
			<GlobalStyles />
		</Fragment>
	</ThemeProvider>
);

export default Root;
