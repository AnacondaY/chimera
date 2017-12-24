import Checkbox from '../../Checkbox';
import wrapField from '../hoc/wrapField';
import enhanceControl from '../hoc/enhanceControl';

const EnhancedCheckboxGroup = enhanceControl(Checkbox.Group);
export default wrapField(EnhancedCheckboxGroup, 'CheckboxGroupField');