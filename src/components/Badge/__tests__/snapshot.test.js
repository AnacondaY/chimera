import Badge from '../';

describe('===== Badge Snapshot Test =====', () => {
    
    test('renders corrently', () => {
        const badge = create(
            <Badge number={24} />
        ).toJSON();
        expect(badge).toMatchSnapshot();
    });

    test('renders corrently with number greater than maximun', () => {
        const badge = create(
            <Badge number={100} />
        ).toJSON();
        expect(badge).toMatchSnapshot();
    });

});