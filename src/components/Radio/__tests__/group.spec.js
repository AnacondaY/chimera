import { mount } from 'enzyme';
import Radio from '../';

describe('=== Radio Group ===', () => {

    test('render correctly', () => {
        const group = mount(
            <Radio.Group>
                <Radio value="1"/>
                <Radio value="2"/>
                <Radio value="3"/>
            </Radio.Group>
        );
        expect(group.find('.cmr-radio')).toHaveLength(3);
    });

    test('with prop \'value\'', () => {
        const group = mount(
            <Radio.Group value="2">
                <Radio value="1"/>
                <Radio value="2"/>
                <Radio value="3"/>
            </Radio.Group>
        );
        expect(group.state('model')).toBe('2');
        expect(group.childAt(1).hasClass('cmr-radio-checked')).toBeTruthy();
    });

    test('with prop \'disabled\'', () => {
        const group = mount(
            <Radio.Group disabled>
                <Radio value="1"/>
                <Radio value="2"/>
                <Radio value="3"/>
            </Radio.Group>
        );
        expect(group.find('.cmr-radio-disabled')).toHaveLength(3);
    });

    test('with callback \'onChange\'', () => {
        const callback = jest.fn();
        const group = mount(
            <Radio.Group onChange={callback}>
                <Radio value="1"/>
                <Radio value="2"/>
                <Radio value="3"/>
            </Radio.Group>
        );
        group.childAt(0).find('.cmr-radio-origin').at(0).simulate('change', { target: { checked: true } });
        expect(callback).toHaveBeenCalledTimes(1);
        expect(callback).toHaveBeenCalledWith('1');
    });

});