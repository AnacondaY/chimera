import React from 'react';
import PropTypes from '../../base/prop-types';

export default function Item({onClick, disabled, children, onItemClick, action, divided}){
    const classList = ['cmr-dropdown-menu-item'];
    if(disabled){
        classList.push('cmr-dropdown-menu-item-disabled');
    }
    return !divided ? (
        <li className={classList.join(' ')}
            onClick={() => onItemClick(action)}
            >{children}</li>
        ) :
        <li className="cmr-dropdown-menu-divider"/>; 
}

Item.propTypes = {
    disabled: PropTypes.bool,
    onClick: PropTypes.func
};

Item.defaultProps = {
    disabled: false
};