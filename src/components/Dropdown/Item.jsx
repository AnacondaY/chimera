import React from 'react';
import PropTypes from '../../base/prop-types';

export default function Item({onClick, disabled, children, onItemClick}){
    const classList = ['cmr-dropdown-menu-item'];
    if(disabled){
        classList.push('cmr-dropdown-menu-item-disabled');
    }
    return (
        <li className={classList.join(' ')}
            onClick={onItemClick}
        >{children}</li>
    );
}

Item.propTypes = {
    disabled: PropTypes.bool,
    onClick: PropTypes.func
};

Item.defaultProps = {
    disabled: false
};