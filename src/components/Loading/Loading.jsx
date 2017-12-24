import React from 'react';
import PropTypes from '../../base/prop-types';
import BaseComponent from '../../base/BaseComponent';
import Spin from './Spin';
import Popover from '../_Popover';

export default function Loading(props: Object){

    const { loading, text, full, size, cmrLocale, container, children } = props;
    const wrapper = (
        <div className="cmr-loading-wrapper">
            <div className="cmr-loading-icon">
                <Spin/>
            </div>
            <div className="cmr-loading-text">{typeof text !== 'undefined' ? text : cmrLocale.text}</div>
        </div>
    );

    const classList = ['cmr-loading-container'];
    if(loading){
        classList.push('cmr-loading-blur');
    }

    return (
        !full ? 
        <div className="cmr-loading">
            <div className={classList.join(' ')}>{children}</div>
            {loading && wrapper}            
        </div> :
        <Popover visible={loading}>
            <div className="cmr-loading cmr-loading-full">
                <div className={classList.join(' ')}>{children}</div>
                {wrapper}            
            </div>
        </Popover>
    );
    
}

Loading.propTypes = {
    full: PropTypes.bool,
    loading: PropTypes.bool,
    text: PropTypes.oneOfType([PropTypes.string, PropTypes.node])
};

Loading.defaultProps = {
    full: false,
    loading: false
};