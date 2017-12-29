import { shallow } from 'enzyme';
import Icon from '../';

describe('=== Icon ===', () => {

    test('with prop \'type\'', () => {
        const icon = shallow(<Icon type="mail"/>);
        expect(icon.hasClass('cmr-icon-mail')).toBeTruthy();
    });

    test('with prop \'className\'', () => {
        const icon = shallow(<Icon type="mail" className="customize-class"/>);
        expect(icon.hasClass('customize-class')).toBeTruthy();
    });

    test('with prop \'style\'', () => {
        const icon = shallow(<Icon type="mail" style={{ fontSize: 14 }}/>);
        expect(icon.prop('style').fontSize).toBe(14);
    });

});