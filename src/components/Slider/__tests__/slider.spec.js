import { shallow, mount } from 'enzyme';
import Slider from '../';

describe('=== Slider ===', () => {

    test('with prop \'defaultValue\'', () => {
        const slider = shallow(<Slider defaultValue={25}/>);
        expect(slider.state('value')).toBe(25);
    });

    test('with prop \'value\'', () => {
        const slider = shallow(<Slider value={50}/>);
        expect(slider.state('value')).toBe(50);
    });

    test('with prop \'disabled\'', () => {
        const slider = shallow(<Slider disabled/>);
        expect(slider.hasClass('cmr-slider-disabled')).toBeTruthy();
    });

    test('with prop \'mode\'', () => {
        const slider = shallow(<Slider/>);
        expect(slider.hasClass('cmr-slider-horizontal')).toBeTruthy();
        slider.setProps({
            mode: 'vertical'
        });
        expect(slider.hasClass('cmr-slider-vertical')).toBeTruthy();
    });

    test('with prop \'tooltipTemplate\'', () => {
        const fn = jest.fn();
        const slider = shallow(<Slider defaultValue={75} tooltipTemplate={fn}/>);
        slider.find('.cmr-slider-chunk').at(0).simulate('mouseenter');
        expect(fn).toHaveBeenCalledWith(75);
    });

});