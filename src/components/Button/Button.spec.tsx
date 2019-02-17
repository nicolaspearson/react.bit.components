import { shallow } from 'enzyme';
import * as React from 'react';

import Button from './Button';

describe('Button component', () => {
	it('renders', () => {
		const wrapper = shallow(
			<div>
				<Button>Hello</Button>
			</div>
		);
		expect(wrapper.exists()).toBe(true);
		expect(wrapper.find('Button').html()).toMatch(/Hello/);
	});
});
