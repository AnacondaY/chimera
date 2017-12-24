import Upload from '../../Upload';
import wrapField from '../hoc/wrapField';
import enhanceControl from '../hoc/enhanceControl';

const EnhancedUpload = enhanceControl(Upload);

export default wrapField(EnhancedUpload, 'UploadField');