import { shallow } from 'enzyme';
import Progress from '../';

describe('=== Progress ===', () => {

    test('with prop \'mode\'', () => {
        const pg = shallow(<Progress mode="circle"/>);
        expect(pg.hasClass('cmr-progress-circle')).toBeTruthy();
    });

    test('with prop \'progress\'', () => {
        const pg = shallow(<Progress progress={50}/>);
        expect(pg.find('.cmr-progress-tip').at(0).text()).toBe('50%');
        expect(pg.find('.cmr-progress-bar-inner').at(0).prop('style').width).toBe('50%');
    });

    test('with prop \'status\'', () => {
        const pg = shallow(<Progress/>);
        expect(pg.hasClass('cmr-progress-processing')).toBeTruthy();
        pg.setProps({
            status: 'error'
        });
        expect(pg.hasClass('cmr-progress-error')).toBeTruthy();
    });

    test('with prop \'outside\'', () => {
        const pg = shallow(<Progress outside/>);
        expect(pg.hasClass('cmr-progress-outside')).toBeTruthy();
    });

    test('with prop \'template\'', () => {
        const fn = jest.fn();
        shallow(<Progress progress={75} template={fn}/>);
        expect(fn).toHaveBeenCalledWith(75, 'processing');
    });

    test('with prop \'width\'', () => {
        const pg = shallow(<Progress width={100}/>);
        expect(pg.prop('style').width).toBe(100);
    });

    test('with prop \'diameter\'', () => {
        const pg = shallow(<Progress mode="circle" diameter={200}/>);
        const style = pg.prop('style');
        expect(style.width).toBe(200);
        expect(style.height).toBe(200);
    });

});