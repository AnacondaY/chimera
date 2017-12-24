import Badge from '../';

describe('===== Badge Unit Test =====', () => {
    
    test('badge with number less than maximum', () => {
        const badge = mount(<Badge number={20}/>);
        expect(badge.find('.cmr-badge-symbol').text()).toEqual('20');
    });

    test('badge with number greater than maximum', () => {
        const badge = mount(<Badge number={100}/>);
        expect(badge.find('.cmr-badge-symbol').text()).toEqual('99+');
    });

    test('badge with dot', () => {
        const badge = mount(<Badge dot numer={99}/>);
        expect(badge.find('.cmr-badge-symbol').text()).toEqual('');
    });

    test('badge maxTemplate', () => {
        const badge = mount(<Badge number={100} maxTemplate={(num, max) => '...'}/>);
        expect(badge.find('.cmr-badge-symbol').text()).toEqual('...');
    });

    test('badge with customized maximum', () => {
        const badge = mount(<Badge number={1000} maximum={999}/>);
        expect(badge.find('.cmr-badge-symbol').text()).toEqual('999+');
    });

    test('badge is rendered currently with showZero', () => {
        const badge1 = mount(<Badge number={0} showZero={false} />);
        const badge2 = mount(<Badge number={0} showZero={true} />);
        expect(badge1.find('.cmr-badge-symbol').length).toEqual(0);
        expect(badge2.find('.cmr-badge-symbol').text()).toEqual('0');
    });

    test('badge with different status', () => {
        const status = ['error', 'warning', 'info', 'success', 'primary', 'default'];
        status.forEach(s => {
            const badge = mount(<Badge type={s}/>);
            expect(badge.find(`.cmr-badge-${s}`).length).toEqual(1);
        });
    });

})