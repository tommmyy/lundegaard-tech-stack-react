import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text } from '@storybook/addon-knobs/react';
import TextAreaField from './TextAreaField';

storiesOf('TextAreaField', module)
	.addDecorator(withKnobs)
	.add(
		'in default',
		withInfo('Info for TextAreaField')(() => (
			<TextAreaField
				name="message"
				onChange={action('onChange')}
				value={text('value', '')}
			/>
		))
	);
