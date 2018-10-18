import React from 'react';
import Tabs from '../Tabs';
import Tab from '../Tab';
import './Root.css';

const Root = () => (
	<Tabs>
		<Tab>Beep</Tab>
		<Tab active>Boop</Tab>
		<Tab>Bop</Tab>
	</Tabs>
);

export default Root;
