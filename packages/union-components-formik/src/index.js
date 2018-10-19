import React from 'react';
import * as fromComponents from 'union-components';

const getDisplayName = Component =>
	Component.displayName || Component.name || 'Component';

const createAdapter = NextComponent => {
	const FormikAdapter = ({ field, form: { touched, errors }, ...rest }) => {
		const error =
			touched[field.name] && errors[field.name]
				? errors[field.name]
				: undefined;
		return <NextComponent error={error} {...rest} />;
	};

	FormikAdapter.displayName = `createAdapter(${getDisplayName(
		NextComponent
	)})`;

	return FormikAdapter;
};

export const TextField = createAdapter(fromComponents.TextField);
export const TextArea = createAdapter(fromComponents.TextArea);
