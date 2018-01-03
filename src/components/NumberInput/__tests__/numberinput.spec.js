import { shallow } from 'enzyme';
import NumberInput from '../';

describe('=== NumberInput ===', () => {

    test('with prop \'defaultValue\'', () => {
        const input = shallow(<NumberInput defaultValue={-1} />);
        expect(input.find('input').at(0).prop('value')).toBe(0);
    });

    test('with prop \'value\'', () => {
        const input = shallow(<NumberInput/>);
        input.setProps({
            value: 10
        });
        expect(input.state('value')).toBe(10);
    });

    test('with prop \'disabled\'', () => {
        const input = shallow(<NumberInput disabled/>);
        expect(input.hasClass('cmr-input-disabled')).toBeTruthy();
    });

    test('with prop \'step\'', () => {
        const input = shallow(<NumberInput step={2}/>);
        const plusBtn = input.find('.cmr-input-control-button').at(0);
        const minusBtn = input.find('.cmr-input-control-button').at(1);
        plusBtn.simulate('click');
        expect(input.state('value')).toBe(2);
        minusBtn.simulate('click');
        expect(input.state('value')).toBe(0);
    });

    test('with callback \'onChange\'', () => {
        const callback = jest.fn();
        const input = shallow(<NumberInput onChange={callback}/>);
        const plusBtn = input.find('.cmr-input-control-button').at(0);
        const minusBtn = input.find('.cmr-input-control-button').at(1);
        plusBtn.simulate('click');
        minusBtn.simulate('click');
        expect(callback).toHaveBeenCalledTimes(2);
        expect(callback).toHaveBeenLastCalledWith(0);
    });

});