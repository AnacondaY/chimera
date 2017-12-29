import { shallow, mount } from 'enzyme';
import { Col, Row } from '../';

describe('=== Row ===', () => {

    test('render correctly', () => {
        const grid = mount(
            <Row gap={8}>
                <Col/>
                <Col/>
                <Col/>
            </Row>
        );
        expect(grid.find('.cmr-col')).toHaveLength(3);
    });

    test('with prop \'gap\'', () => {
        const grid = shallow(
            <Row gap={8}>
                <Col />
                <Col />
                <Col />
            </Row>
        );
        const style = grid.childAt(0).prop('style');
        expect(style.paddingLeft).toBe(4);
        expect(style.paddingRight).toBe(4);
    });

    test('with prop \'className\'', () => {
        const row = shallow(
            <Row className="customize-class" />
        );
        expect(row.hasClass('customize-class')).toBeTruthy();
    });

    test('with prop \'style\'', () => {
        const row = shallow(<Row style={{width: 100}}/>);
        expect(row.prop('style').width).toBe(100);
    });

});