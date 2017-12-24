// import React from 'react';
// import { render } from 'enzyme';
import Select from '../';
const { Option, Group: OptionGroup } = Select;

describe('=====<Select>Snapshot</Select>=====', () => {
    test('Default props', () => {
        const wrapper = render(
            <Select>
                <Option value="1" label="option1"></Option>
                <Option value="2" label="option2"></Option>
                <Option value="3" label="option3"></Option>
            </Select>
        );
        expect(wrapper).toMatchSnapshot();
        
    });

    test('Disabled select', () => {
        const wrapper = render(
            <Select disabled={true}>
                <Option value="1" label="option1"></Option>
                <Option value="2" label="option2"></Option>
                <Option value="3" label="option3"></Option>
            </Select>
        );
        expect(wrapper).toMatchSnapshot();
    });
});
``