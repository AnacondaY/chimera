import React, { cloneElement, Children } from 'react';
import PropTypes from '../../base/prop-types';
import BaseComponent from '../../base/BaseComponent';

export default class Form extends BaseComponent{
    
    static PropTypes = {
        mode: PropTypes.oneOf(['horizontal', 'vertical', 'inline']),
        onSubmit: PropTypes.func,
        labelWidth: PropTypes.number,
        labelAlign: PropTypes.oneOf(['left', 'center', 'right'])
    }

    static defaultProps = {
        mode: 'horizontal',
        labelAlign: 'right',
        onSubmit(){}
    }

    render(){
        const { mode, children, onSubmit, labelWidth, labelAlign } = this.props;
        return (
            <form noValidate onSubmit={onSubmit} className={this.classNames({
                'cmr-form': true,
                [`cmr-form-${mode}`]:true
            })} style={this.styles()} autoComplete="off">
                {Children.map(children, (c, i) => {
                    const { labelWidth: childLabelWidth, labelAlign: childLabelAlign, ...others } = c.props;
                    return cloneElement(c, {
                        ...others,
                        mode,
                        key: `cmr-form-field-${i}`,
                        labelWidth: childLabelWidth  || labelWidth,
                        labelAlign: childLabelAlign || labelAlign,
                    });
                })}
            </form>
        );
    }

}