import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import { withKnobs, text } from '@storybook/addon-knobs/react';
import TextField from './TextField';

storiesOf('TextField', module)
	.addDecorator(withKnobs)
	.add(
		'in default',
		withInfo('TextField is form element.')(() => (
			<TextField name="message" onChange={action('onChange')} value={text('value', '')} />
		))
	)
	.add(
		'with error',
		withInfo('Has error')(() => (
			<TextField error="Error message" value={text('value', '')} onChange={action('onChange')} />
		))
	);
