import { shallow, mount } from 'enzyme';
import Checkbox from '../';

describe('=== Checkbox ===', () => {

    test('with prop \'children\'', () => {
        const checkbox = shallow(<Checkbox>test</Checkbox>);
        expect(checkbox.find('.cmr-checkbox-text').at(0).text()).toBe('test');
    });

    test('with prop \'disabled\'', () => {
        const checkbox = shallow(<Checkbox disabled onChange={callback} />);
        const callback = jest.fn();
        expect(checkbox.hasClass('cmr-checkbox-disabled')).toBeTruthy();
        checkbox.simulate('change');
        expect(callback).not.toBeCalled();
    });

    test('with prop \'checked\'', () => {
        const checkbox = shallow(<Checkbox checked />);
        expect(checkbox.hasClass('cmr-checkbox-checked')).toBeTruthy();
    });

    test('with callback \'onChange\'', () => {
        const callback = jest.fn();
        const checkbox = shallow(<Checkbox onChange={callback} />);
        checkbox.find('input').simulate('change');
        expect(callback).toBeCalledWith(true); 
    });

});