import React from 'react';
import PropTypes from '../../base/prop-types';
import './style/index.scss';

export default function Icon({type, className, style}){
    const classList = ['cmr-icon', `cmr-icon-${type}`];
    if(className){
        classList.push(className);
    }
    const props = {
        className: classList.join(' ')
    };
    if(style){
        props['style'] = style;
    }
    return <i {...props} />;
}

Icon.propTypes = {
    type: PropTypes.string.isRequired,
    className: PropTypes.string,
    style: PropTypes.object
};

