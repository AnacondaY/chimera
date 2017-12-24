import React from 'react';
import Button from '../Button';
import Icon from '../Icon';
import PropTypes from '../../base/prop-types';

export default function DropdownButton({children, type, size, onClick, onMouseEnter, onMouseLeave}){
    return (
        <Button.Group>
            <Button size={size} type={type}>{children}</Button>
            <Button 
                type={type} 
                size={size}
                className="cmr-dropdown-button"
                onClick={onClick}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                style={{padding: 0}}
            >
                <Icon type="caret-down"/>
            </Button>
        </Button.Group>
    );
}

const noop = () => {};

DropdownButton.propTypes = {
    type: PropTypes.oneOf(['success', 'primary', 'error', 'warning', 'info', 'default']),
    size: PropTypes.oneOf(['large', 'middle', 'small']),
    onClick: PropTypes.func,
    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func
};

DropdownButton.defaultProps = {
    type: 'primary',
    size: 'middle',
    onClick: noop,
    onMouseLeave: noop,
    onMouseEnter: noop
};

DropdownButton.__DROPDOWN_BUTTON__ = true;