import React from 'react';
import PropTypes from 'prop-types';
import { TextField, TextAreaField } from 'union-components-formik';
import { Field, Formik } from 'formik';
import { noop } from 'ramda-extension';

const initialValues = {
	name: '',
	email: '',
	lang: '',
	message: '',
	terms: false,
};

const validate = (/* values */) => ({ name: 'Error!', message: 'Error!' });

const RegistrationForm = ({ onSubmit }) => (
	<Formik
		onSubmit={onSubmit}
		validate={validate}
		initialValues={initialValues}
	>
		{({ handleSubmit, handleReset, handleChange, errors, values }) => (
			<form onSubmit={handleSubmit}>
				<Field component={TextField} name="name" label="Name" />

				<Field component={TextField} name="email" label="Email" />

				<Field
					component={TextAreaField}
					name="message"
					label="Message"
				/>

				<div>
					<label htmlFor="lang">Favourite language:</label>
					<select
						id="lang"
						name="lang"
						value={values.lang}
						onChange={handleChange}
					>
						<option value="" />
						<option value="js">JavaScript</option>
						<option value="cljs">Java</option>
					</select>
					{errors.message && <p>{errors.message}</p>}
				</div>

				<div>
					<label>
						<input
							type="checkbox"
							name="terms"
							checked={values.terms}
							onChange={handleChange}
						/>
						Do you agree with our terms of conditions?
					</label>
				</div>

				<button type="submit">Submit</button>
				<button type="button" onClick={handleReset}>
					Reset
				</button>
			</form>
		)}
	</Formik>
);

RegistrationForm.propTypes = {
	onSubmit: PropTypes.func,
};

RegistrationForm.propTypes = {
	onSubmit: noop,
};

export default RegistrationForm;
