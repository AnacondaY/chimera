import Toggle from '../../Toggle';
import wrapField from '../hoc/wrapField';
import enhanceControl from '../hoc/enhanceControl';

const EnhancedToggle = enhanceControl(Toggle);

export default wrapField(EnhancedToggle, 'ToggleField');