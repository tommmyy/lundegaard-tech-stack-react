import React from 'react';
import './Tab.css';

const Tab = ({ children, href, active }) => (
	<a
		href={href}
		className={`tab ${active ? 'active' : ''}`}
	>
		{children}
	</a>
);

export default Tab;
