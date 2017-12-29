import { shallow } from 'enzyme';
import Input from '../';

describe('=== Input ===', () => {

    test('with prop \'size\'', () => {
        const input = shallow(<Input size="small"/>);
        expect(input.hasClass('cmr-input-small')).toBeTruthy();
    });

    test('with prop \'defaultValue\'', () => {
        const input = shallow(<Input defaultValue="test"/>);
        expect(input.find('input').prop('value')).toBe('test');
    });

    test('with prop \'disabled\'', () => {
        const input = shallow(<Input disabled/>);
        expect(input.find('input').prop('disabled')).toBeTruthy();
        expect(input.hasClass('cmr-input-disabled')).toBeTruthy();
    });

    test('with prop \'textarea\'', () => {
        const input = shallow(<Input textarea/>);
        expect(input.childAt(0).type()).toBe('textarea');
    });

    test('with prop \'icon\'', () => {
        const input = shallow(<Input iconBefore="mail" iconAfter="mail"/>);
        expect(input.hasClass('cmr-input-icon')).toBeTruthy();
        expect(input.find('.cmr-input-icon-before')).toHaveLength(1);
        expect(input.find('.cmr-input-icon-after')).toHaveLength(1);
    });

    test('with prop \'addon\'', () => {
        const input = shallow(<Input addonBefore="test" addonAfter="test"/>);
        expect(input.hasClass('cmr-input-addon')).toBeTruthy();
        expect(input.find('.cmr-input-addon-before')).toHaveLength(1);
        expect(input.find('.cmr-input-addon-after')).toHaveLength(1);
    });

    test('with prop \'value\'', () => {
        const input = shallow(<Input />);
        input.setProps({ value: 'xxx' });
        expect(input.state('value')).toBe('xxx');
    });

    test('with prop \'cleanable\'', () => {
        const input = shallow(<Input cleanable/>);
        input.setProps({ 
            value: 123
        });
        expect(input.find('.cmr-input-icon-clean')).toHaveLength(1);
    });

    test('with callback \'onFocus\'', () => {
        const callback = jest.fn();
        const input = shallow(<Input onFocus={callback} />);
        input.childAt(0).simulate('focus');
        expect(callback).toHaveBeenCalledTimes(1);
    });

    test('with callback \'onBlur\'', () => {
        const callback = jest.fn();
        const input = shallow(<Input onBlur={callback}/>);
        input.childAt(0).simulate('blur');
        expect(callback).toHaveBeenCalledTimes(1);
    });

    test('with callback \'onClick\'', () => {
        const callback = jest.fn();
        const input = shallow(<Input onClick={callback}/>);
        input.childAt(0).simulate('click');
        expect(callback).toHaveBeenCalledTimes(1);
    });

    test('with callback \'onChange\'', () => {
        const callback = jest.fn();
        const input = shallow(<Input onChange={callback}/>);
        input.childAt(0).simulate('change', { target: { value: 123 } });
        expect(callback).toHaveBeenCalledTimes(1);
    });

});