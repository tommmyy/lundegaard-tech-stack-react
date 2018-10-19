import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, boolean, text } from '@storybook/addon-knobs/react';

import Tab from '../Tab';
import Tabs from './Tabs';

storiesOf('Tabs', module)
	.addDecorator(withKnobs)
	.add(
		'with click listener',
		withInfo('Tabs with onClick handler.')(() => (
			<Tabs>
				<Tab>{text('tab text', 'Beep')}</Tab>
				<Tab
					active={boolean('tab active', true)}
					onClick={action('onClick')}
				>
					Boop
				</Tab>
				<Tab>Bop</Tab>
			</Tabs>
		))
	);
