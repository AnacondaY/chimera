import React, { cloneElement, createElement } from 'react';
import { noop } from 'lodash';
import BaseComponent from '../../../base/BaseComponent';
import PropTypes from '../../../base/prop-types';

const defaultOptions = {
    valueProp: 'value',
    rules: {},
    onChange: noop,
    onBlur: noop,
    onFocus: noop
};

export default function fieldEnhancer({
    valueProp,
    validateTrigger,
    validateDelay,
    rules,
    onValid,
    onInvalid,
    onChange,
    onBlur,
    onFocus  
} = defaultOptions){
    return WrappedField => {
        return class EnhancedField extends BaseComponent {
            
            static propTypes = {
                name: PropTypes.string.isRequired
            }

            static contextTypes = {
                cmrForm: PropTypes.object
            }

            constructor(props: Object, ctx: Object){
                super(props);
                if(!ctx.cmrForm){
                    throw new Error('the enhanced field must be inside an enhanced form');
                }
                const { values = {}, initialValues = {} } = ctx.cmrForm;
                this.state = {
                    initialValue: props.value,
                    value: values[props.name],
                    valid: true,
                    validating: false,
                    active: false,
                    dirty: false,
                    error: null,
                };
                this.handleChange = this.handleChange.bind(this);
                this.handleFocus = this.handleFocus.bind(this);
                this.handleBlur = this.handleBlur.bind(this);
                this.setValue = this.setValue.bind(this);
                this.resetValue = this.resetValue.bind(this);
            }

            get validateTrigger(){
                return validateTrigger || this.context.cmrForm.validateTrigger;
            }

            get validateDelay(){
                return typeof validateDelay !== 'undefined' ? validateDelay : this.context.cmrForm.validateDelay;
            }

            setValue(value: mixed){
                this.setState({
                    value
                });
            }

            resetValue(){
                this.setState({
                    value: this.state.initialValue,
                    dirty: false
                });
            }

            getFieldValue(eventOrValue: mixed): mixed{
                if(eventOrValue && eventOrValue.stopPropagation && eventOrValue.preventDefault){
                    const { target: { type, value, checked, files }, dataTransfer } = eventOrValue;
                    if(type === 'checkbox' || type === 'radio'){
                        return checked;
                    }else if(type === 'file'){
                        return files ? files : (dataTransfer && dataTransfer.files);
                    }else{
                        return value;
                    }
                }
                return eventOrValue;
            }

            filterError(errors: Array): Object{
                if(!errors || !errors.length){
                    return null;
                }
                return errors.filter(error => error.field === this.props.name);
            }

            handleFocus(){
                this.setState({
                    active: true
                }, onFocus);
            }

            handleChange(eventOrValue: mixed){
                const value = this.getFieldValue(eventOrValue);
                this.setState({
                    value,
                    dirty: true
                }, () => {
                    onChange(this.state.value);
                    this.context.cmrForm.updateField(this.props.name, this.state.value, () => {
                        if(this.validateTrigger === 'change'){
                            this.context.cmrForm.validateField(this.props.name);
                        }
                    });
                });
            }

            handleBlur(eventOrValue: mixed){
                const value = this.getFieldValue(eventOrValue);
                this.setState({
                    value,
                    active: false
                }, onBlur(value));
                if(this.validateTrigger === 'blur'){
                    this.context.validateField(this.props.name, value, (errors, fields) => {
                        if(errors){
                            this.setState({
                                valid: false,
                                error: errors[this.props.name]
                            });
                        }
                    });
                }
            }

            render(){
                return createElement(WrappedField, {
                    ...this.props,
                    ...this.state,
                    onChange: this.handleChange,
                    onFocus: this.handleFocus,
                    onBlur: this.handleBlur,
                    cmrField: {
                        setValue: this.setValue,
                        resetValue: this.resetValue
                    }
                });
            }
        };
    };
}