import { mount, shallow } from 'enzyme';
import Steps from '../';

describe('=== Steps ===', () => {

    test('step render correctly', () => {
        const step = shallow(<Steps.Step title="title" description="description"/>);
        expect(step.find('.cmr-step-title').at(0).text()).toBe('title');
        expect(step.find('.cmr-step-description').at(0).text()).toBe('description');
    });

    test('steps render correctly', () => {
        const steps = mount(
            <Steps>
                <Steps.Step/>
                <Steps.Step/>
                <Steps.Step/>
            </Steps>
        );
        expect(steps.find('.cmr-step')).toHaveLength(3);
    });

    test('with prop \'mode\'', () => {
        const steps = shallow(<Steps mode="vertical"/>);
        expect(steps.hasClass('cmr-steps-vertical')).toBeTruthy();
    });

    test('with prop \'icon\'', () => {
        const step = mount(<Steps.Step icon="mail"/>);
        expect(step.find('.cmr-step-icon').childAt(0).hasClass('cmr-icon-mail')).toBeTruthy();
    });

    test('with prop \'status\'', () => {
        const steps = mount(
            <Steps currentIndex={1} status="success">
                <Steps.Step/>
                <Steps.Step/>
                <Steps.Step/>                
            </Steps>
        );
        expect(steps.childAt(0).hasClass('cmr-step-processing')).toBeTruthy();
        expect(steps.childAt(1).hasClass('cmr-step-success')).toBeTruthy();
    });

    test('controlled by others', () => {
        const steps = mount(
            <Steps status="success">
                <Steps.Step/>
                <Steps.Step/>
                <Steps.Step/>                
            </Steps>
        );
        steps.setProps({
            currentIndex: 1
        });
        expect(steps.childAt(0).hasClass('cmr-step-processing')).toBeTruthy();
        expect(steps.childAt(1).hasClass('cmr-step-success')).toBeTruthy();
    });

});