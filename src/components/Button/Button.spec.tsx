import { mount, shallow } from 'enzyme';
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

	it('renders snapshot correctly', () => {
		const wrapper = shallow(<Button>Hello</Button>);
		expect(wrapper).toMatchSnapshot();
	});

	it('should mount component', () => {
		const wrapper = mount(
			<div>
				<Button>Hello</Button>
			</div>
		);

		expect(wrapper.children(Button).length).toEqual(1);
	});
});
