import Select from '../../Select';
import wrapField from '../hoc/wrapField';
import enhanceField from '../hoc/fieldEnhancer';
import enhanceControl from '../hoc/enhanceControl';

const EnhancedSelect = enhanceControl(Select);

export default wrapField(EnhancedSelect, 'SelectField');