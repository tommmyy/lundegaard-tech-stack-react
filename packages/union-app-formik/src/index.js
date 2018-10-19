import '@babel/polyfill';
import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import Root from './components/Root';

const rerender = Component =>
	render(
		// eslint-disable-next-line import/no-unresolved
		<AppContainer
			errorReporter={__DEV__ ? require('redbox-react').default : null}
		>
			<Component />
		</AppContainer>,
		document.getElementById('root')
	);

rerender(Root);

if (module.hot) {
	module.hot.accept(['./components/Root'], () => {
		const NextRoot = require('./components/Root').default;
		rerender(NextRoot);
	});
}
