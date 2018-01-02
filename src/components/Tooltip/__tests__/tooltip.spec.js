import { mount } from 'enzyme';
import Tooltip from '../';

describe('=== Tooltip ===', () => {

    let tp;
    jest.useFakeTimers();

    afterEach(() => {
        document.body.removeChild(document.body.lastChild);
    });

    test('render correctly', () => {
        tp = mount(
            <Tooltip visible content="test">
                <a>hover me</a>
            </Tooltip>
        );
        expect(document.querySelector('.cmr-tooltip-content').textContent).toBe('test');
    });

    test('show correctly', () => {
        tp = mount(
            <Tooltip content="test">
                <a>hover me</a>
            </Tooltip>
        );
        tp.setProps({
            visible: true
        });
        expect(document.querySelectorAll('.cmr-tooltip')).toHaveLength(1);
    });

    test('with prop \'placement\'', () => {
        tp = mount(
            <Tooltip visible content="test" placement="bottom-center">
                <a>hover me</a>
            </Tooltip>
        );
        expect(document.querySelectorAll('.cmr-tooltip-bottom-center')).toHaveLength(1);
    });

    // test('click to trigger', () => {
    //     tp = mount(
    //         <Tooltip content="test" trigger="click">
    //             <a>hover me</a>
    //         </Tooltip>
    //     );
    //     tp.childAt(0).simulate('click');
    //     expect(document.querySelectorAll('.cmr-tooltip')).toHaveLength(1);
    // });

    test('with callback \'onVisibleChange\'', () => {
        const callback = jest.fn();
        tp = mount(
            <Tooltip content="test" onVisibleChange={callback}>
                <a>hover me</a>
            </Tooltip>
        );
        tp.setProps({
            visible: true
        });
        expect(callback).toHaveBeenCalledTimes(1);
        expect(callback).toHaveBeenCalledWith(true);
    });

});