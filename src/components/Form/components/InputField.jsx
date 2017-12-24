import Input from '../../Input';
import wrapField from '../hoc/wrapField';
import enhanceControl from '../hoc/enhanceControl';

const EnhancedInput = enhanceControl(Input);

export default wrapField(EnhancedInput, 'InputField');