import Radio from '../../Radio';
import wrapField from '../hoc/wrapField';
import enhanceControl from '../hoc/enhanceControl';

const EnhancedRadioGroup = enhanceControl(Radio.Group);
export default wrapField(EnhancedRadioGroup, 'RadioGroupField');