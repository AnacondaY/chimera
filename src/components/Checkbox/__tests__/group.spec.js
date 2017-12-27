import { shallow, mount } from 'enzyme';
import Checkbox from '../';

describe('=== Checkbox Group ===', () => {

    test('with prop \'value\'', () => {
        const group = mount(
            <Checkbox.Group value={['1', '3']}>
                <Checkbox value="1">Assassination</Checkbox>
                <Checkbox value="2">Thug</Checkbox>
                <Checkbox value="3">Acuteness</Checkbox>
            </Checkbox.Group>
        );
        const checkboxs = group.find('.cmr-checkbox');
        expect(checkboxs.at(0).hasClass('cmr-checkbox-checked')).toBeTruthy();
        expect(checkboxs.at(2).hasClass('cmr-checkbox-checked')).toBeTruthy();
    });

    test('with callback \'onChange\'', () => {
        const callback = jest.fn();
        const group = mount(
            <Checkbox.Group onChange={callback}>
                <Checkbox value="1">Assassination</Checkbox>
                <Checkbox value="2">Thug</Checkbox>
                <Checkbox value="3">Acuteness</Checkbox>
            </Checkbox.Group>
        );
        group.childAt(0).find('input').simulate('change', { target: { checked: true } });
        expect(callback).toBeCalledWith(['1']);
    });
    
});