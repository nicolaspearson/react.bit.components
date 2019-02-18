import { mount, shallow } from 'enzyme';
import * as React from 'react';

import HtmlHead from './HtmlHead';

describe('HtmlHead component', () => {
	it('renders', () => {
		const wrapper = shallow(
			<div>
				<HtmlHead>
					<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
					<title>Hello</title>
					<meta name="Description" content="Hello" />
				</HtmlHead>
			</div>
		);
		expect(wrapper.exists()).toBe(true);
		expect(wrapper.find('HtmlHead').exists()).toBe(true);
		expect(wrapper.find('title').html()).toMatch(/Hello/);
	});

	it('renders snapshot correctly', () => {
		const wrapper = shallow(
			<HtmlHead>
				<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
				<title>Hello</title>
				<meta name="Description" content="Hello" />
			</HtmlHead>
		);
		expect(wrapper).toMatchSnapshot();
	});

	it('should mount component', () => {
		const wrapper = mount(
			<div>
				<HtmlHead>
					<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
					<title>Hello</title>
					<meta name="Description" content="Hello" />
				</HtmlHead>
			</div>
		);

		expect(wrapper.children(HtmlHead).length).toEqual(1);
	});
});
