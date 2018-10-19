import React from 'react';
import PropTypes from 'prop-types';

const TextAreaField = ({ error, label, id, name, ...other }) => (
	<div>
		{label && <label htmlFor={id || name}>{label}</label>}
		<textarea
			type="text" id={id || name} name={name}
			{...other}
		/>
		{error && <p>{error}</p>}
	</div>
);

TextAreaField.propTypes = {
	error: PropTypes.node,
	id: PropTypes.string,
	label: PropTypes.node,
	name: PropTypes.string.isRequired,
};

export default TextAreaField;
