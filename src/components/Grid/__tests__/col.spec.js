import { shallow } from 'enzyme';
import { Col } from '../';

describe('=== Col ===', () => {

    test('with prop \'span\'', () => {
        const col = shallow(<Col span={8}>xxx</Col>);
        expect(col.hasClass('cmr-col-8')).toBeTruthy();
        expect(col.text()).toBe('xxx');
    });

    test('with prop \'offset\'', () => {
        const col = shallow(<Col offset={8}/>);
        expect(col.hasClass('cmr-col-offset-8')).toBeTruthy();
    });

    test('with prop \'pull\'', () => {
        const col = shallow(<Col pull={8}/>);
        expect(col.hasClass('cmr-col-pull-8')).toBeTruthy();
    });

    test('with prop \'push\'', () => {
        const col = shallow(<Col push={8}/>);
        expect(col.hasClass('cmr-col-push-8')).toBeTruthy();
    });

    test('with responsive prop in number', () => {
        const col = shallow(<Col xs={8} sm={8} md={8} lg={8} />);
        expect(col.hasClass('cmr-col-xs-8')).toBeTruthy();
        expect(col.hasClass('cmr-col-sm-8')).toBeTruthy();
        expect(col.hasClass('cmr-col-md-8')).toBeTruthy();
        expect(col.hasClass('cmr-col-lg-8')).toBeTruthy();
    });

    test('with responsive prop in object', () => {
        const col = shallow(
            <Col xs={{
                span: 8,
                offset: 8,
                pull:8,
                push: 8
            }}/>
        );
        expect(col.hasClass('cmr-col-xs-8 cmr-col-xs-offset-8 cmr-col-xs-pull-8 cmr-col-xs-push-8')).toBeTruthy();
    });

    test('with prop \'className\'', () => {
        const col = shallow(<Col className="customize-class"/>);
        expect(col.hasClass('customize-class')).toBeTruthy();
    });

    test('with prop \'style\'', () => {
        const col = shallow(<Col style={{width: 100}}/>);
        expect(col.prop('style').width).toBe(100);
    });

});