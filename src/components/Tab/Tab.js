import React from 'react';
import PropTypes from 'prop-types';
import { cx } from 'ramda-extension';
import './Tab.css';

const Tab = ({ children, className, href, active }) => (
	<a
		href={href}
		className={cx(className, {
			tab: true,
			'tab--active': active,
		})}
	>
		{children}
	</a>
);

Tab.propTypes = {
	active: PropTypes.bool,
	children: PropTypes.node,
	className: PropTypes.string,
	href: PropTypes.string,
};

export default Tab;
