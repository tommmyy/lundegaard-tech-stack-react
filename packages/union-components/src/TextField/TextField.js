import React from 'react';
import PropTypes from 'prop-types';

const TextField = ({ error, label, id, name, ...other }) => (
	<div>
		{label && <label htmlFor={id || name}>{label}</label>}
		<input
			type="text" id={id || name} name={name}
			{...other}
		/>
		{error && <p>{error}</p>}
	</div>
);

TextField.propTypes = {
	error: PropTypes.node,
	id: PropTypes.string,
	label: PropTypes.node,
	name: PropTypes.string.isRequired,
};

export default TextField;
