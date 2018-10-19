import React from 'react';
import PropTypes from 'prop-types';
import { Box, Text } from 'rebass';

const TextField = ({ error, label, id, name, ...other }) => (
	<Box mb={2}>
		{label && (
			<Box>
				<label htmlFor={id || name}>{label}</label>
			</Box>
		)}
		<Box>
			<input
				type="text" id={id || name} name={name}
				{...other}
			/>
		</Box>
		<Box>
			{error && (
				<Text fontSize={12} color="red">
					{error}
				</Text>
			)}
		</Box>
	</Box>
);

TextField.propTypes = {
	error: PropTypes.node,
	id: PropTypes.string,
	label: PropTypes.node,
	name: PropTypes.string.isRequired,
};

export default TextField;
