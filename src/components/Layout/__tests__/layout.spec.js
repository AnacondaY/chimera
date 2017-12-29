import { shallow, mount } from 'enzyme';
import Layout from '../';

describe('=== Layout ===', () => {

    const { Header, Sider, Content, Footer } = Layout;

    test('render correctly', () => {
        const layout = mount(
            <Layout>
                <Header>header</Header>
                <Content>content</Content>
                <Footer>footer</Footer>
            </Layout>
        );
        expect(layout.find('.cmr-layout-header').at(0).text()).toBe('header');
        expect(layout.find('.cmr-layout-content').at(0).text()).toBe('content');
        expect(layout.find('.cmr-layout-footer').at(0).text()).toBe('footer');
    });

    test('render with sider', () => {
        const layout = mount(
            <Layout>
                <Sider>xxx</Sider>
                <Content>yyy</Content>
            </Layout>
        );
        expect(layout.hasClass('cmr-layout-has-sider')).toBeTruthy();
        expect(layout.find('.cmr-layout-sider').at(0).text()).toBe('xxx');
    });

    test('layout with \'className\' and \'style\'', () => {
        const layout = shallow(<Layout className="customize-class" style={{width: 100}}/>);
        expect(layout.hasClass('customize-class')).toBeTruthy();
        expect(layout.prop('style').width).toBe(100);
    });

    test('header with \'className\' and \'style\'', () => {
        const header = shallow(<Header className="customize-class" style={{width: 100}}/>);
        expect(header.hasClass('customize-class')).toBeTruthy();
        expect(header.prop('style').width).toBe(100);
    });

    test('footer with \'className\' and \'style\'', () => {
        const footer = shallow(<Footer className="customize-class" style={{width: 100}}/>);
        expect(footer.hasClass('customize-class')).toBeTruthy();
        expect(footer.prop('style').width).toBe(100);
    });

    test('content with \'className\' and \'style\'', () => {
        const content = shallow(<Content className="customize-class" style={{width: 100}}/>);
        expect(content.hasClass('customize-class')).toBeTruthy();
        expect(content.prop('style').width).toBe(100);
    });

    test('sider with \'className\' and \'style\'', () => {
        const sider = shallow(<Sider className="customize-class" style={{height: 100}}/>);
        expect(sider.hasClass('customize-class')).toBeTruthy();
        expect(sider.prop('style').height).toBe(100);
    });

});