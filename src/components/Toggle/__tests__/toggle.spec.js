import { shallow } from 'enzyme';
import Toggle from '../';

describe('=== Toggle ===', () => {

    test('with prop \'defaultChecked\'', () => {
        const tg = shallow(<Toggle defaultChecked />);
        expect(tg.hasClass('cmr-toggle-on')).toBeTruthy();
    });

    test('with prop \'disabled\'', () => {
        const tg = shallow(<Toggle disabled/>);
        expect(tg.hasClass('cmr-toggle-disabled')).toBeTruthy();
    });

    test('with prop \'checked\'', () => {
        const tg = shallow(<Toggle/>);
        tg.setProps({
            checked: true
        });
        expect(tg.state('isOn')).toBeTruthy();
    });
    
    test('with prop \'onText\'', () => {
        const tg = shallow(<Toggle onText="on"/>);
        expect(tg.find('.cmr-toggle-text-on').at(0).text()).toBe('on');
    });

    test('with prop \'offText\'', () => {
        const tg = shallow(<Toggle defaultChecked offText="off"/>);
        expect(tg.find('.cmr-toggle-text-off').at(0).text()).toBe('off');
    });

    test('with callback \'onChange\'', () => {
        const callback = jest.fn();
        const tg = shallow(<Toggle onChange={callback}/>);
        tg.find('input').at(0).simulate('change', { target: { checked: true } });
        expect(callback).toHaveBeenCalledTimes(1);
        expect(callback).toHaveBeenCalledWith(true);
    });

});