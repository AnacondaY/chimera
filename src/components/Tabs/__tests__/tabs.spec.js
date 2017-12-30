import { shallow, mount } from 'enzyme';
import Tabs from '../';

describe('=== Tabs ===', () => {

    test('render correctly', () => {
        const tabs = mount(
            <Tabs>
                <Tabs.Pane label="tab1">tab1</Tabs.Pane>
                <Tabs.Pane label="tab2">tab2</Tabs.Pane>
                <Tabs.Pane label="tab3">tab3</Tabs.Pane>
            </Tabs>
        );
        expect(tabs.find('.cmr-tabs-pane')).toHaveLength(3);
        expect(tabs.find('.cmr-tabs-nav-item')).toHaveLength(3);
    });

    test('navigate correctly', () => {
        const tabs = mount(
            <Tabs>
                <Tabs.Pane label="tab1">tab1</Tabs.Pane>
                <Tabs.Pane label="tab2">tab2</Tabs.Pane>
                <Tabs.Pane label="tab3">tab3</Tabs.Pane>
            </Tabs>
        );
        tabs.find('.cmr-tabs-nav-item').at(2).simulate('click');
        expect(tabs.find('.cmr-tabs-nav-item').at(2).hasClass('cmr-tabs-nav-item-active')).toBeTruthy();
        expect(tabs.find('.cmr-tabs-pane').at(2).hasClass('cmr-tabs-pane-active')).toBeTruthy();
    });

    test('with prop \'mode\'', () => {
        const tabs = shallow(<Tabs mode="vertical" />);
        expect(tabs.hasClass('cmr-tabs-vertical')).toBeTruthy();
    });

    test('with prop \'type\'', () => {
        const tabs = shallow(<Tabs type="card"/>);
        expect(tabs.hasClass('cmr-tabs-card')).toBeTruthy();
    });

    test('pane with prop \'disabled\'', () => {
        const tabs = mount(
            <Tabs defaultActiveIndex={2}>
                <Tabs.Pane label="tab1" disabled>tab1</Tabs.Pane>
                <Tabs.Pane label="tab2">tab2</Tabs.Pane>
                <Tabs.Pane label="tab3">tab3</Tabs.Pane>
            </Tabs>
        );
        const disabledItem = tabs.find('.cmr-tabs-nav-item').at(0);
        expect(disabledItem.hasClass('cmr-tabs-nav-item-disabled')).toBeTruthy();
        disabledItem.simulate('click');
        expect(tabs.state('activeIndex')).toBe(2);
    });

    test('pane with prop \'closable\'', () => {
        const tabs = mount(
            <Tabs closable>
                <Tabs.Pane label="tab1">tab1</Tabs.Pane>
                <Tabs.Pane label="tab2">tab2</Tabs.Pane>
                <Tabs.Pane label="tab3">tab3</Tabs.Pane>
            </Tabs>
        );
        expect(tabs.find('.cmr-tabs-nav-item-closable')).toHaveLength(3);
    });

    test('with callback \'onChange\'', () => {
        const callback = jest.fn();
        const tabs = mount(
            <Tabs onChange={callback}>
                <Tabs.Pane label="tab1">tab1</Tabs.Pane>
                <Tabs.Pane label="tab2">tab2</Tabs.Pane>
                <Tabs.Pane label="tab3">tab3</Tabs.Pane>
            </Tabs>
        );
        tabs.find('.cmr-tabs-nav-item').at(2).simulate('click');
        expect(callback).toHaveBeenCalledTimes(1);
        expect(callback).toHaveBeenCalledWith(2, 0);
    });

    test('with callback \'onRemove\'', () => {
        const callback = jest.fn();
        const tabs = mount(
            <Tabs closable onRemove={callback}>
                <Tabs.Pane label="tab1">tab1</Tabs.Pane>
                <Tabs.Pane label="tab2">tab2</Tabs.Pane>
                <Tabs.Pane label="tab3">tab3</Tabs.Pane>
            </Tabs>
        );
        tabs.find('.cmr-tabs-nav-close').at(0).simulate('click');
        expect(tabs.find('.cmr-tabs-nav-item')).toHaveLength(2);
        expect(callback).toHaveBeenCalledTimes(1);
        expect(callback).toHaveBeenCalledWith(0, 0);
    });

});