import React, { cloneElement } from 'react';
import PropTypes from '../../base/prop-types';
import BaseComponent from '../../base/BaseComponent';

export default class Field extends BaseComponent {

    static __FORM_FIELD__ = true

    static propTypes = {
        name: PropTypes.string,
        label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
        labelAlign: PropTypes.oneOf(['left', 'center', 'right']),
        labelWidth: PropTypes.number,
        status: PropTypes.oneOf(['success', 'error', 'warning', 'normal']),
        required: PropTypes.bool
    }

    static defaultProps = {
        required: false
    }

    get labelStyle(): Object{
        const { labelWidth, labelAlign, mode } = this.props;
        let style;
        if(mode !== 'vertical'){
            style = {
                textAlign: labelAlign,
                width: labelWidth
            };
        }else{
            style = {
                textAlign: 'left'
            };
        }
        return style;
    }

    get controlStyle(){
        const { labelWidth, mode } = this.props;
        return {
            marginLeft: mode !== 'vertical' ? labelWidth : 0
        };
    }
    
    render(){
        const { label, required, status, value, children, feedback, extra } = this.props;
        return (
            <div className={this.classNames({
                'cmr-form-field':true,
                [`cmr-form-field-${status}`]: status
            })}>
                <label className="cmr-form-label" style={this.labelStyle}>
                    {required && <span className="cmr-form-field-required">*</span>}
                    {label}
                </label>
                <div className="cmr-form-control" style={this.controlStyle}>
                    {children}
                    {extra && <div className="cmr-form-extra">{extra}</div>}
                    {feedback && <div className="cmr-form-feedback">{feedback}</div>}
                </div>
            </div>
        );
    }

}
