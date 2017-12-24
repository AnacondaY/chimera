import Select from '../';
const { Option, Group: OptionGroup } = Select;

describe('=====<Select>Unit</Select>=====', () => {
    describe('rendering by default', () => {
        let component = null;
        let shallowedWrapper = null;
        let mountedWrapper = null;
        beforeEach(() => {
            component = (
                <Select>
                    <Option value="1" label="option1"></Option>
                    <Option value="2" label="option2"></Option>
                    <Option value="3" label="option3"></Option>
                </Select>
            );
            shallowedWrapper = shallow(component);
            mountedWrapper = mount(component);
        });

        test('should component rendered correctly', () => {
            expect(shallowedWrapper.instance() instanceof Select).toBe(true);
        });

        test('should component has cmr-select class', () => {
            expect(shallowedWrapper.find('.cmr-select').length).toBe(1);
        });

        test('should inner options rendered', () => {
            expect(mountedWrapper.find('.cmr-select-option').length).toBe(3);
        });

        test('should select triggered by click', () => {
            
        });

    });
})