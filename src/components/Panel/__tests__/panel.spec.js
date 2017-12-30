import { shallow } from 'enzyme';
import Panel from '../';

describe('=== Panel ===', () => {

    test('with prop \'title\'', () => {
        const panel = shallow(<Panel title="title"/>);
        expect(panel.find('.cmr-panel-title').at(0).text()).toBe('title');
    });

    test('with prop \'append\'', () => {
        const panel = shallow(<Panel append="x"/>);
        expect(panel.find('.cmr-panel-append').at(0).text()).toBe('x');
    });

    test('with prop \'footer\'', () => {
        const panel = shallow(<Panel footer="footer"/>);
        expect(panel.find('.cmr-panel-footer').at(0).text()).toBe('footer');
    });

    test('with prop \'showHeader\'', () => {
        const panel = shallow(<Panel showHeader={false}/>);
        expect(panel.find('.cmr-panel-header')).toHaveLength(0);
    });

    test('with prop \'full\'', () => {
        const panel = shallow(<Panel full/>);
        expect(panel.hasClass('cmr-panel-full')).toBeTruthy();
    });

});