import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs/react';
import TextField from './TextField';

storiesOf('TextField', module)
	.addDecorator(withKnobs)
	.add('in default', withInfo('Info for TextField')(() => <TextField />));
