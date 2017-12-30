import { ReactWrapper } from 'enzyme';
import notification from '../';
import message from '../../Message/presets';

jest.useFakeTimers();

describe('=== Notification ===', () => {

    test('open correctly', () => {
        const destroy = notification({
            title: 'title',
            content: 'content'
        });
        expect(document.querySelector('.cmr-notification')).not.toBeNull();
        destroy();
        expect(document.querySelector('.cmr-notification')).toBeNull();
    });

    test('render correctly', () => {
        const destroy = notification('title', 'content');
        expect(document.querySelector('.cmr-notice-title').textContent).toBe('title');
        expect(document.querySelector('.cmr-notice-content').textContent).toBe('content');
        destroy();
    });

    test('with prop \'type\'', () => {
        const destroy = notification({
            type: 'success'
        });
        expect(document.querySelector('.cmr-notice-success')).not.toBeNull();
        destroy();
    });

    test('with prop \'duration\'', () => {
        const destroy = message({
            duration: 1000
        });
        expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1000);
        destroy();
    });

    test('with callback \'onClose\'', () => {
        const callback = jest.fn();
        const destroy = message({
            onClose: callback
        });
        destroy();
        expect(callback).toHaveBeenCalledTimes(1);
    });

    test('use simple api', () => {
        const destroy = notification.success('title', 'content', 1000);
        expect(document.querySelector('.cmr-notice-title').textContent).toBe('title');
        expect(document.querySelector('.cmr-notice-content').textContent).toBe('content');
        destroy();
    });

});