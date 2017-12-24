import PropTypes from  '../../base/prop-types';

export const radioProps = {
    checked: PropTypes.bool,
    disabled: PropTypes.bool,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    onChange: PropTypes.func
};

export const radioDefaultProps = {
    checked: false,
    disabled: false,
    onChange(){}
};

export const groupProps = {
    defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    disabled: PropTypes.bool,
    onChange: PropTypes.func
};

export const groupDefaultProps = {
    
};