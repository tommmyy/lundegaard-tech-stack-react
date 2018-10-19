import React from 'react';
import { shallow } from 'enzyme';
import TextField from './TextField';

describe('<TextField />', () => {
	const requiredProps = { name: 'name' };
	it('shallow', () => {
		const wrapper = shallow(<TextField {...requiredProps} />);
		expect(wrapper.find('div.content').props()).toMatchSnapshot();
	});
});
