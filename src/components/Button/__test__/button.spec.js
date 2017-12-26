import Button from '../';

describe('=== Button ===', () => {

    test('default props', () => {
        const button = shallow(<Button>test</Button>);
        expect(button.hasClass('cmr-button-default')).toBeTruthy();
        expect(button.text()).toBe('test');
    });

    test('with prop type', () => {
        const button = shallow(<Button type="primary">test</Button>);
        expect(button.hasClass('cmr-button-primary')).toBeTruthy();
    });

    test('with prop icon', () => {
        const button = shallow(<Button icon="mail">test</Button>);
        expect(button.childAt(0).hasClass('cmr-icon-mail')).toBeTruthy();
    });

});