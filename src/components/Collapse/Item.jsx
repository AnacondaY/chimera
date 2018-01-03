import React from 'react';
import BaseComponent from '../../base/BaseComponent';
import PropTypes from '../../base/prop-types';
import Animate from '../_Animate';
import Icon from '../Icon';

export default function Item({index, active, onClick, className, style, children, header, disabled}){
    const classList = ['cmr-collapse-item', className];
    if(active){
        classList.push('cmr-collapse-item-active');
    }
    if(disabled){
        classList.push('cmr-collapse-item-disabled');
    }
    return (
        <div className={classList.join(' ')} style={style}>
            <div onClick={() => {
                if(disabled) return;
                onClick(index);
            }} className="cmr-collapse-item-header">
                <span className="cmr-collapse-item-icon">
                    <Icon type="arrow-right"/>                
                </span>
                {header}
            </div>
            <Animate active={active} initial={false} effect="collapse">
                <div className="cmr-collapse-item-content">{children}</div>
            </Animate>
        </div>
    );
}

Item.propTypes = {
    index: PropTypes.number,
    active: PropTypes.bool,
    disabled: PropTypes.bool,
    className: PropTypes.string,
    style: PropTypes.object,
    header: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    onClick: PropTypes.func
};

Item.defaultProps = {
    active: false,
    disabled: false
};