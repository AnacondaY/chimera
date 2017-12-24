import DatePicker from '../../DatePicker';
import wrapField from '../hoc/wrapField';
import enhanceControl from '../hoc/enhanceControl';

const EnhancedDatePicker = enhanceControl(DatePicker);

export default wrapField(EnhancedDatePicker, 'DatePickerField');