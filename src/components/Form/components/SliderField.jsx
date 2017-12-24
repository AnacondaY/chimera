import Slider from '../../Slider';
import wrapField from '../hoc/wrapField';
import enhanceControl from '../hoc/enhanceControl';

const EnhancedSlider = enhanceControl(Slider);

export default wrapField(EnhancedSlider, 'SliderField');