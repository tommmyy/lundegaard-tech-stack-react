import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text } from '@storybook/addon-knobs/react';
import { action } from '@storybook/addon-actions';
import TextField from './TextField';

storiesOf('TextField', module)
	.addDecorator(withKnobs)
	.add(
		'in default',
		withInfo('TextField')(() => (
			<TextField
				value={text('value', '')}
				onChange={action('onChange')}
			/>
		))
	)
	.add(
		'with error',
		withInfo('Has error')(() => (
			<TextField
				error="Error message"
				value={text('value', '')}
				onChange={action('onChange')}
			/>
		))
	);
