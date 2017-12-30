import { mount } from 'enzyme';
import Select from '../';

describe('=== Select ===', () => {

    jest.useFakeTimers();

    test('render correctly', () => {
        const select = mount(
            <Select>
                <Select.Option value="1" label="1"/>
                <Select.Option value="2" label="2"/>
                <Select.Option value="3" label="3"/>
            </Select>
        );
        expect(select.find('.cmr-select-option')).toHaveLength(3);
    });

    test('show correctly', () => {
        const select = mount(
            <Select>
                <Select.Option value="1" label="1"/>
                <Select.Option value="2" label="2"/>
                <Select.Option value="3" label="3"/>
            </Select>
        );
        select.find('.cmr-select-input').at(0).simulate('click');
        expect(select.state('opened')).toBeTruthy();
        select.find('.cmr-select-option').at(0).simulate('click');
        expect(select.state('opened')).toBeFalsy();
    });

    test('with prop \'defaultValue\'', () => {
        const select = mount(
            <Select defaultValue="2">
                <Select.Option value="1" label="1"/>
                <Select.Option value="2" label="2"/>
                <Select.Option value="3" label="3"/>
            </Select>
        );
        expect(select.find('.cmr-select-input').at(0).prop('value')).toBe('2');
    });

    test('with prop \'value\'', () => {
        const select = mount(
            <Select value="2">
                <Select.Option value="1" label="1"/>
                <Select.Option value="2" label="2"/>
                <Select.Option value="3" label="3"/>
            </Select>
        );
        expect(select.state('value')).toBe('2');
    });

    test('with prop \'multiple\'', () => {
        const select = mount(
            <Select defaultValue={['2']} multiple>
                <Select.Option value="1" label="1"/>
                <Select.Option value="2" label="2"/>
                <Select.Option value="3" label="3"/>
            </Select>
        );
        select.find('.cmr-select-box').at(0).simulate('click');
        select.find('.cmr-select-option').at(2).simulate('click');
        expect(select.find('.cmr-select-value')).toHaveLength(2);
        expect(select.state('opened')).toBeTruthy();
    });

    test('with disabled option', () => {
        const select = mount(
            <Select>
                <Select.Option disabled value="1" label="1"/>
                <Select.Option value="2" label="2"/>
                <Select.Option value="3" label="3"/>
            </Select>
        );
        const firstOption = select.find('.cmr-select-option').at(0);
        expect(firstOption.hasClass('cmr-select-option-disabled')).toBeTruthy();
        firstOption.simulate('click');
        expect(select.state('value')).toBeNull();
    });

    test('with callback \'onChange\'', () => {
        const callback = jest.fn();
        const select = mount(
            <Select onChange={callback}>
                <Select.Option value="1" label="1"/>
                <Select.Option value="2" label="2"/>
                <Select.Option value="3" label="3"/>
            </Select>
        );
        select.find('.cmr-select-option').at(0).simulate('click');
        expect(callback).toHaveBeenCalledTimes(1);
        expect(callback).toHaveBeenCalledWith('1');
    });

    // test('with callback \'onSearch\'', () => {
    //     const callback = jest.fn();
    //     const select = mount(
    //         <Select filterable onSearch={callback}>
    //             <Select.Option value="1" label="1"/>
    //             <Select.Option value="2" label="2"/>
    //             <Select.Option value="3" label="3"/>
    //         </Select>
    //     );
    //     select.find('.cmr-select-input').at(0).simulate('change', { target: { value: '123' } });
    //     jest.runOnlyPendingTimers();
    //     expect(callback).toHaveBeenCalledTimes(1);
    // });

});