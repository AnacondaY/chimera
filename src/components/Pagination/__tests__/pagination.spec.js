import { mount } from 'enzyme';
import Pagination from '../';

describe('=== Pagination ===', () => {

    test('pageCount is less than 9', () => {
        const page = mount(<Pagination totalRecords={50} pageSize={10} />);
        expect(page.find('.cmr-pagination-pager')).toHaveLength(7);
    });

    test('pageCount is greater than 9', () => {
        const page = mount(<Pagination totalRecords={500} pageSize={10} />);
        expect(page.find('.cmr-pagination-pager')).toHaveLength(9);
    });

    test('with prop \'mini\'', () => {
        const page = mount(<Pagination mini totalRecords={50}/>);
        expect(page.hasClass('cmr-pagination-mini')).toBeTruthy();
    });

    test('with prop \'layout\'', () => {
        const page = mount(<Pagination totalRecords={50} layout={['total', 'pages', 'jumper', 'regulator']} />);
        expect(page.childAt(0).hasClass('cmr-pagination-total')).toBeTruthy();
        expect(page.childAt(1).hasClass('cmr-pagination-list')).toBeTruthy();
        expect(page.childAt(2).hasClass('cmr-pagination-jumper')).toBeTruthy();
        expect(page.childAt(3).hasClass('cmr-pagination-regulator')).toBeTruthy();
    });

    test('with prop \'totalRender\'', () => {
        const page = mount(<Pagination totalRecords={100} layout={['total', 'pages']} totalRender={total => `${total}`}/>);
        expect(page.childAt(0).text()).toBe('5');
    });

    test('navigate correctly', () => {
        const page = mount(<Pagination totalRecords={100} />);
        const prev = page.childAt(0).childAt(0);
        const next = page.childAt(0).childAt(6);
        next.simulate('click');
        expect(page.find('.cmr-pagination-pager-active').text()).toBe('2');
        prev.simulate('click');
        expect(page.find('.cmr-pagination-pager-active').text()).toBe('1');
    });

    test('with callback \'onChange\'', () => {
        const callback = jest.fn();
        const page = mount(<Pagination onChange={callback} totalRecords={100}/>);
        page.childAt(0).childAt(3).simulate('click');
        expect(callback).toHaveBeenCalledWith(3);        
    });

});