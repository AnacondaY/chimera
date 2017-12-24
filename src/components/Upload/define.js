import PropTypes from '../../base/prop-types';

const noop = () => {};
export const propTypes = {
    name: PropTypes.string.isRequired,
    action: PropTypes.string.isRequired,
    maxCount: PropTypes.number,
    multiple: PropTypes.bool,
    draggable: PropTypes.bool,
    disabled: PropTypes.bool,
    withCredentials: PropTypes.bool,
    showUploadedList: PropTypes.bool,
    listMode: PropTypes.oneOf(['text-list', 'image-list', 'gallery']),
    accept: PropTypes.string,
    tagName: PropTypes.string,
    headers: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
    data: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
    defaultFiles: PropTypes.array,
    autoUpload: PropTypes.bool,
    beforeUpload: PropTypes.func,
    onSuccess: PropTypes.func,
    onError: PropTypes.func,
    onProgress: PropTypes.func,
    onPreview: PropTypes.func,
    onDragOver: PropTypes.func,
    onDragLeave: PropTypes.func,
    onDrop: PropTypes.func,
    onChange: PropTypes.func,
    onRemove: PropTypes.func
};

export const defaultProps = {
    name: 'file',
    multiple: false,
    disabled: false,
    draggable: false,
    withCredentials: true,
    showUploadedList: true,
    maxCount: 9,
    listMode: 'text-list',
    autoUpload:true,
    defaultFiles: [],
    tagName: 'span',
    onSuccess: noop,
    onError: noop,
    onProgress: noop,
    onPreview: noop,
    onDragOver: noop,
    onDragLeave: noop,
    onRemove: noop,
    onDrop: noop,
    onChange: noop
};

export const WrappedFile = {
    origin: PropTypes.instanceOf(File),
    status: PropTypes.oneOf(['waiting', 'processing', 'success', 'error']),
    progress: PropTypes.rangeOf([0, 100]),
    uuid: PropTypes.string,
    xhr: PropTypes.instanceOf(XMLHttpRequest),
    size: PropTypes.number,
    name: PropTypes.string
};

export const uploaderListProps = {
    fileList: PropTypes.array,
    mode: PropTypes.oneOf(['text-list', 'image-list', 'gallery'])
};

export const uploaderListDefaultProps = {
    fileList: []
};