import React from 'react';
import { shallow } from 'enzyme';
import TextAreaField from './TextAreaField';

describe('<TextAreaField />', () => {
	const requiredProps = {};

	it('shallow', () => {
		const wrapper = shallow(<TextAreaField {...requiredProps} />);
		expect(wrapper).toMatchSnapshot();
	});
});
