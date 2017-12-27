import { mount, shallow } from 'enzyme';
import Badge from '../';

describe('=== Badge ===', () => {

    test('with prop \'number\' less than threshold', () => {
        const badge = shallow(<Badge number={9}/>);
        expect(badge.find('.cmr-badge-symbol').text()).toBe('9');
    });

    test('with prop \'number\' greaterThan threshold', () => {
        const badge = shallow(<Badge number={100}/>);
        expect(badge.find('.cmr-badge-symbol').text()).toBe('99+');
    });

    test('with prop \'type\'', () => {
        const badge = shallow(<Badge type="primary"/>);
        expect(badge.hasClass('cmr-badge-primary')).toBeTruthy(); 
    });

    test('with prop \'dot\'', () => {
        const badge = shallow(<Badge dot />);
        const symbolNode = badge.find('.cmr-badge-symbol');
        expect(symbolNode.text()).toBe('');
        expect(symbolNode.hasClass('cmr-badge-symbol-dot')).toBeTruthy();
    });

    test('with prop \'blink\'', () => {
        const badge = shallow(<Badge dot blink/>);
        expect(badge.find('.cmr-badge-symbol').hasClass('cmr-badge-symbol-blink')).toBeTruthy();
    });

    test('with prop \'showZero\'', () => {
        const badge = shallow(<Badge number={0} showZero />);
        expect(badge.find('.cmr-badge-symbol').text()).toBe('0');
    });

    test('with prop \'maxTemplate\'', () => {
        const badge = shallow(<Badge number={100} maxTemplate="..."/>);
        expect(badge.find('.cmr-badge-symbol').text()).toBe('...');
    });

});