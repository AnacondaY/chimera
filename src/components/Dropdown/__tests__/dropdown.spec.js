import { mount } from 'enzyme';
import Dropdown from '../';

describe('=== Dropdown ===', () => {

    jest.useFakeTimers();

    let dropdown;
    let trigger;
    const { Button, Menu, Item } = Dropdown;

    beforeEach(() => {
        const menu = (
            <Menu>
                <Item action="1">1</Item>
                <Item disabled action="2">2</Item>
                <Item divided/>
            </Menu>
        );
        dropdown = mount(
            <Dropdown menu={menu}>
                <a>trigger</a>
            </Dropdown>
        );
        trigger = dropdown.ref('trigger').childAt(0);
    });

    test('open by click correctly', () => {
        trigger.simulate('click');
        expect(dropdown.state('visible')).toBeTruthy();
        trigger.simulate('click');
        expect(dropdown.state('visible')).toBeFalsy();        
    });

    test('open by hover correctly', () => {
        dropdown.setProps({
            trigger: 'hover'
        });
        trigger.simulate('mouseenter');
        expect(dropdown.state('visible')).toBeTruthy();
        trigger.simulate('mouseleave');
        jest.runOnlyPendingTimers();
        expect(dropdown.state('visible')).toBeFalsy();
    });

    test('render menu correctly', () => {
        trigger.simulate('click');
        const menu = dropdown.ref('menu');
        expect(menu.children()).toHaveLength(3);
        expect(menu.childAt(0).hasClass('cmr-dropdown-menu-item')).toBeTruthy();
        expect(menu.childAt(1).hasClass('cmr-dropdown-menu-item-disabled')).toBeTruthy();
        expect(menu.childAt(2).hasClass('cmr-dropdown-menu-divider')).toBeTruthy();
    });

    test('with callback \'onVisibleChange\'', () => {
        const callback = jest.fn();
        dropdown.setProps({
            onVisibleChange: callback
        });
        trigger.simulate('click');
        expect(callback).toBeCalledWith(true);  
        trigger.simulate('click');
        expect(callback).toBeCalledWith(false);  
    });

    test('with callback \'onItemClick\'', () => {
        const callback = jest.fn();
        dropdown.setProps({
            onItemClick: callback
        });
        trigger.simulate('click');
        dropdown.ref('menu').childAt(0).simulate('click');
        expect(callback).toBeCalledWith('1');
    });

});