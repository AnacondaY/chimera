import { shallow, mount } from 'enzyme';
import Breadcrumb from '../';

describe('=== Breadcrumb ===', () => {

    test('render by prop \'routes\'', () => {
        const routes = [{
            label: 'page1',
            href: '/'
        }, {
            label: 'page2',
            href: '/page2/'
        }, {
            label: 'active page',
        }];
        const breadcrumb = mount(<Breadcrumb routes={routes} />);
        const items = breadcrumb.find('.cmr-breadcrumb-item');
        expect(items.length).toBe(3);
        expect(items.at(0).childAt(0).prop('href')).toBe('/');
        expect(items.at(2).childAt(0).text()).toBe('active page');
    });

    test('render by jsx', () => {
        const breadcrumb = mount(
            <Breadcrumb>
                <Breadcrumb.Item href="/">page1</Breadcrumb.Item>
                <Breadcrumb.Item href="/page2">page2</Breadcrumb.Item>
                <Breadcrumb.Item>active page</Breadcrumb.Item>
            </Breadcrumb>
        )
        const items = breadcrumb.find('.cmr-breadcrumb-item');
        expect(items.length).toBe(3);
        expect(items.at(0).childAt(0).prop('href')).toBe('/');
        expect(items.at(2).childAt(0).text()).toBe('active page');
    });

    test('with prop \'separator\'', () => {
        const breadcrumb = mount(
            <Breadcrumb separator="|">
                <Breadcrumb.Item href="/">page1</Breadcrumb.Item>
                <Breadcrumb.Item href="/page2">page2</Breadcrumb.Item>
                <Breadcrumb.Item>active page</Breadcrumb.Item>
            </Breadcrumb>
        );
        expect(breadcrumb.childAt(0).childAt(1).text()).toBe('|');
    });

});