import React from 'react';
import PropTypes from 'prop-types';
import { cx } from 'ramda-extension';
import './Tabs.css';

const Tabs = ({ children, className }) => <nav className={cx('tabs', className)}>{children}</nav>;

Tabs.propTypes = {
	active: PropTypes.bool,
	children: PropTypes.node,
	className: PropTypes.string,
	href: PropTypes.string,
};

export default Tabs;
