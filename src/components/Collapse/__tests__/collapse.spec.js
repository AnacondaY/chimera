import { shallow, mount } from 'enzyme';
import Collapse from '../';

describe('=== Collapse ===', () => {

    test('with prop \'simple\'', () => {
        const collapse = shallow(<Collapse simple />);
        expect(collapse.hasClass('cmr-collapse-simple')).toBeTruthy();
    });

    test('with prop \'defaultActiveIndex\'', () => {
        const collapse = mount(
            <Collapse defaultActiveIndex={1}>
                <Collapse.Item>1</Collapse.Item>
                <Collapse.Item>2</Collapse.Item>
                <Collapse.Item>3</Collapse.Item>
            </Collapse>  
        );
        expect(collapse.find('.cmr-collapse-item').at(1).hasClass('cmr-collapse-item-active')).toBeTruthy();
    });

    test('with prop \'disabled\'', () => {
        const callback = jest.fn();
        const collapse = mount(
            <Collapse onChange={callback}>
                <Collapse.Item disabled>1</Collapse.Item>
                <Collapse.Item>2</Collapse.Item>
                <Collapse.Item>3</Collapse.Item>
            </Collapse>   
        );
        expect(collapse.childAt(0).hasClass('cmr-collapse-item-disabled')).toBeTruthy();
        collapse.childAt(0).childAt(0).simulate('click');
        expect(callback).not.toBeCalled();
    });

    test('with callback \'onChange\'', () => {
        const callback = jest.fn();
        const collapse = mount(
            <Collapse onChange={callback}>
                <Collapse.Item>1</Collapse.Item>
                <Collapse.Item>2</Collapse.Item>
                <Collapse.Item>3</Collapse.Item>
            </Collapse>  
        );
        collapse.childAt(0).childAt(0).simulate('click');
        expect(callback).toBeCalledWith(0, true);
    });

});