import React, { createElement } from 'react';
import BaseComponent from '../../../base/BaseComponent';
import PropTypes from '../../../base/prop-types';

const noop = () => {};

export default function enhanceControl(Control: React.ReactElement, displayName: 'EnhancedControl'){

    return class EnhancedControl extends BaseComponent {
            
        static displayName = displayName

        static propTypes = {
            name: PropTypes.string.isRequired,
            validateTrigger: PropTypes.oneOf(['change', 'blur', null]),
            onFocus: PropTypes.func,
            onBlur: PropTypes.func,
            onChange: PropTypes.func
        }

        static defaultProps = {
            onFocus: noop,
            onBlur: noop,
            onChange: noop
        }

        static contextTypes = {
            cmrForm: PropTypes.object
        }

        constructor(props: Object, ctx: Object){
            super(props);
            if(!ctx.cmrForm){
                throw new Error('the enhanced control must be inside an enhanced form');
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
            return typeof this.props.validateTrigger !== 'undefined' ?
                    this.props.validateTrigger :
                    this.context.cmrForm.validateTrigger;
        }

        get validateDelay(){
            return typeof this.props.validateDelay !== 'undefined' ? 
                    this.props.validateDelay : 
                    this.context.cmrForm.validateDelay;
        }

        setValue(value: mixed){
            this.setState({
                value
            }, () => {
                this.context.cmrForm.updateField(this.props.name, value);                
            });
        }

        resetValue(){
            const value = this.state.initialValue;
            this.setState({
                value,
                dirty: false
            }, () => {
                this.context.cmrForm.updateField(this.props.name, value);
            });
        }

        getFieldValue(eventOrValue: mixed): mixed{
            if(eventOrValue && eventOrValue.stopPropagation && eventOrValue.preventDefault){
                const { target: { type, value, checked, files }, dataTransfer } = eventOrValue;
                if(type === 'checkbox' || type === 'radio'){
                    return checked;
                }else if(type === 'file'){
                    return files ? files : ( dataTransfer && dataTransfer.files);
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
            }, this.props.onFocus);
        }

        handleChange(eventOrValue: mixed){
            const value = this.getFieldValue(eventOrValue);
            this.setState({
                value,
                dirty: true
            }, () => {
                this.props.onChange(this.state.value);
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
            }, () => {
                if(this.validateTrigger === 'blur'){
                    this.context.cmrForm.validateField(this.props.name);
                }
            });
        }

        render(){
            return createElement(Control, {
                ...this.props,
                ...this.state,
                checked: this.state.value,
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
}