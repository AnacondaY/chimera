import Form from './Form';
import { Schema } from 'validate-promisify';
import Field from './Field';
import enhanceForm from './hoc/formEnhancer';
import enhanceField from './hoc/fieldEnhancer';
import enhanceControl from './hoc/enhanceControl';
import wrapField from './hoc/wrapField';

import { default as CheckboxGroupField } from './components/CheckboxGroupField';
import { default as RadioGroupField } from './components/RadioGroupField';
import { default as SelectField } from './components/SelectField';
import { default as DatePickerField } from './components/DatePickerField';
import { default as InputField } from './components/InputField';
import { default as ToggleField } from './components/ToggleField';
import { default as SliderField } from './components/SliderField';
import { default as NumberInputField } from './components/NumberInputField';
import { default as UploadField } from './components/UploadField';

Form.Schema = Schema;
Form.Field = Field;
Form.enhanceForm = enhanceForm;
Form.enhanceField = enhanceField;
Form.enhanceControl = enhanceControl;
Form.wrapField = wrapField;
Form.CheckboxGroupField = CheckboxGroupField;
Form.RadioGroupField = RadioGroupField;
Form.SelectField = SelectField;
Form.DatePickerField = DatePickerField;
Form.InputField = InputField;
Form.ToggleField = ToggleField;
Form.SliderField = SliderField;
Form.NumberInputField = NumberInputField;
Form.UploadField = UploadField;

export default Form;