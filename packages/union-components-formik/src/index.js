import React from 'react';
import * as fromComponents from 'union-components';

// export const TextField = createAdapter(fromComponents.TextField);

export const TextField = ({ field, form: { touched, errors }, ...rest }) => {
	return (
		<fromComponents.TextField
			error={touched[field.name] && errors[field.name]}
			{...field}
			{...rest}
		/>
	);
};
