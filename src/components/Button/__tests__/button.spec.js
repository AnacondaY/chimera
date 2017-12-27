import Button from '../';
import { shallow, mount, render } from 'enzyme';

describe('=== Button ===', () => {

    test('default props', () => {
        const button = shallow(<Button>test</Button>);
        expect(button.hasClass('cmr-button-default')).toBeTruthy();
        expect(button.hasClass('cmr-button-middle')).toBeTruthy();
        expect(button.text()).toBe('test');
    });

    test('with prop \'type\'', () => {
        const button = shallow(<Button type="primary">test</Button>);
        expect(button.hasClass('cmr-button-primary')).toBeTruthy();
    });

    test('with prop \'icon\'', () => {
        const button = mount(<Button icon="mail">test</Button>);
        expect(button.childAt(0).hasClass('cmr-icon-mail')).toBeTruthy();
    });

    test('with prop \'loading\'', () => {
        const button = mount(<Button loading>test</Button>);
        expect(button.hasClass('cmr-button-loading')).toBeTruthy();
        expect(button.childAt(0).hasClass('cmr-icon-loading')).toBeTruthy();
    });

    test('with prop \'size\'', () => {
        const button = shallow(<Button size="small">small</Button>);
        expect(button.hasClass('cmr-button-small')).toBeTruthy();
    });

    test('with prop \'disabled\'', () => {
        const button = shallow(<Button disabled>disabled</Button>);
        expect(button.hasClass('cmr-button-disabled')).toBeTruthy();
    });

    test('with prop \'link\'', () => {
        const button = shallow(<Button link>link</Button>);
        expect(button.hasClass('cmr-button-link')).toBeTruthy();
    });

    test('with callback \'onClick\'', () => {
        const callback = jest.fn();
        const button = shallow(<Button onClick={callback}>callback</Button>);
        button.simulate('click');
        expect(callback).toHaveBeenCalledTimes(1);
    });

});