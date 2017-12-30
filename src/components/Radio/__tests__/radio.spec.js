import { shallow } from 'enzyme';
import Radio from '../';

describe('=== Radio ===', () => {

    test('with prop \'checked\'', () => {
        const radio = shallow(<Radio checked/>);
        expect(radio.hasClass('cmr-radio-checked')).toBeTruthy();
    });

    test('with prop \'children\'', () => {
        const radio = shallow(<Radio>test</Radio>);
        expect(radio.text()).toBe('test');
    });

    test('with prop \'disabled\'', () => {
        const radio = shallow(<Radio disabled/>);
        expect(radio.hasClass('cmr-radio-disabled')).toBeTruthy();
    });

    test('use radio button', () => {
        const radio = shallow(<Radio.Button>test</Radio.Button>);
        expect(radio.hasClass('cmr-radio-button')).toBeTruthy();
    });

});