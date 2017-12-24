import NumberInput from '../../NumberInput';
import wrapField from '../hoc/wrapField';
import enhanceControl from '../hoc/enhanceControl';

const EnhancedNumberInput = enhanceControl(NumberInput);

export default wrapField(EnhancedNumberInput, 'NumberInputField');