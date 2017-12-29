import { mount, shallow } from 'enzyme';
import Loading from '../Loading';

describe('=== Loading ===', () => {

    let loading;

    test('show correctly', () => {
        const loading = shallow(<Loading loading cmrLocale={{text: 'loading'}}/>);
        expect(loading.find('.cmr-loading-wrapper')).toHaveLength(1); 
    });

    test('with prop \'text\'', () => {
        const loading = shallow(<Loading loading text="123"/>);
        expect(loading.find('.cmr-loading-text').at(0).text()).toBe('123');
    });

    test('with prop \'full\'', () => {
        const loading = mount(<Loading loading full text="123"/>);
        expect(document.querySelector('.cmr-loading')).not.toBeNull();
        loading.unmount();
    });

});