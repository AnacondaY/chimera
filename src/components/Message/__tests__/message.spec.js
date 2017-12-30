import { ReactWrapper } from 'enzyme';
import message from '../';

jest.useFakeTimers();

describe('=== Message ===', () => {

    test('show correctly', () => {
        const destroy = message('title');
        expect(document.querySelector('.cmr-message')).not.toBeNull();
        destroy();
        expect(document.querySelector('.cmr-message')).toBe(null);
    });

    test('with prop \'title\'', () => {
        const destroy = message('title');
        expect(document.querySelector('.cmr-message-content').textContent).toBe('title');
        destroy();
    });

    test('with prop \'type\'', () => {
        const destroy = message({
            title: 'title',
            type: 'success'
        });
        const msg = new ReactWrapper(document.querySelector('.cmr-message'), true);
        expect(msg.hasClass('cmr-message-success')).toBeTruthy();
        destroy();
    });

    test('with prop \'duration\'', () => {
        const destroy = message({
            title: 'title',
            duration: 1000
        });
        expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1000);
        destroy();
    });

    test('with callback \'onClose\'', () => {
        const callback = jest.fn();
        const destroy = message({
            title: 'title',
            onClose: callback
        });
        destroy();
        expect(callback).toHaveBeenCalledTimes(1);
    });

    test('use simple api', () => {
        const destroy = message.success('title', 1000);
        const msg = new ReactWrapper(document.querySelector('.cmr-message'), true);
        expect(msg.hasClass('cmr-message-success')).toBeTruthy();
        expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1000);
        destroy();
    });

});