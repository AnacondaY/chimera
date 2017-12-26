import React, { cloneElement } from 'react';
import { findDOMNode } from 'react-dom';
import Validator from 'validate-promisify';
import isEqual from 'lodash/isEqual';
import noop from 'lodash/noop';
import PropTypes from '../../../base/prop-types';


const defaultOptions = {
    validateTrigger: 'change',
    validateDelay: 300,
    mapStateToModel: noop,
    onModelChange: noop,
    onError: noop,
    onFieldSuccess: noop
};

export default function enhanceForm(schema: Object, options: Object = {}){

    if(!schema){
        throw new Error('The property \'schema\' is required');
    }

    const {
        model,
        validateDelay,
        validateTrigger,
        mapStateToModel,
        onModelChange,
        onError,
        onFieldSuccess
    } = {
        ...defaultOptions,
        ...options
    };

    return WrappedForm => {
        return class EnhancedForm extends React.PureComponent {
            
            static childContextTypes = {
                cmrForm: PropTypes.object
            }

            getChildContext(){
                return {
                    cmrForm: {
                        validateTrigger,
                        validateDelay,
                        updateField: this.updateField,
                        validateField: this.validateField,
                        validateForm: this.validateForm,
                        model: this.state.model,
                        errors: this.state.errors,
                    }
                };
            }

            constructor(props:Object){
                super(props);
                this.state = {
                    model: model || {},
                    errors: {}
                };
                this.validateField = this.validateField.bind(this);
                this.validateForm = this.validateForm.bind(this);
                this.resetForm = this.resetForm.bind(this);
                this.updateField = this.updateField.bind(this);
                this.handleSubmit = this.handleSubmit.bind(this);
                this.validator = new Validator(schema);
            }

            validateField(name: String): void{
                this.validator
                    .validate(this.state.model, { fields: [ name ] })
                    .then(() => {
                        this.updateError(name);
                        onFieldSuccess(name);
                    })
                    .catch(error => {
                        this.updateError(name, error);
                        onError(error);
                    });
            }

            validateForm(): void{
                this.validator
                    .validate(this.state.model)
                    .then(() => this.setState({ errors: {} }))
                    .catch(errors => {
                        this.setState({
                            errors
                        }, () => onError(errors));
                        this.forceUpdate();
                    });         
            }

            updateError(name: String, error: mixed){
                this.setState(({errors}) => {
                    if(error){
                        errors[name] = error[name];
                    }else{
                        errors[name] = null;
                    }
                    return {
                        errors
                    };
                }, this.forceUpdate);
            }

            updateField(name: String, value: mixed, callback: Function){
                this.setState(prevState => {
                    return {
                        model: {
                            ...prevState.model,
                            [name]: value
                        }
                    };
                }, () => {
                    onModelChange(this.state.model);
                    callback && callback();
                });
            }

            resetForm(){
                this.setState({
                    model: {},
                    errors: {}
                }, this.forceUpdate);
            }

            handleSubmit(evt: React.SyntheticEvent): false{
                evt.preventDefault();
                this.validateForm();
            }

            componentDidMount() {
                this.form = findDOMNode(this);
                if(this.form.tagName !== 'FORM'){
                    throw new Error(`The wrapped DOM expects FORM, but receives ${this.form.tagName}`);
                }
            }
            
            componentWillReceiveProps(nextProps: Object) {
                if(!isEqual(this.state.model, nextProps.model)){
                    this.setState({
                        model: nextProps.model
                    });
                }
            }
            
            render(){      
                const { onSubmit, ...rest } = this.props; 
                const cmrForm = {
                    validateForm: this.validateForm,
                    resetForm: this.resetForm
                };
                return (
                    <WrappedForm 
                        ref="form"
                        onSubmit={this.handleSubmit} 
                        {...this.state} 
                        {...rest}
                        cmrForm={cmrForm} 
                    />
                );
            }
        };
    };
}