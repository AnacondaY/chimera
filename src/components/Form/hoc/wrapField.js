import React from 'react';
import Field from '../Field';
import isEqual from 'lodash/isEqual';
import BaseComponent from '../../../base/BaseComponent';
import PropTypes from '../../../base/prop-types';

export default function wrapField(Control: React.ReactElement, displayName: String){
    
    return class WrappedField extends BaseComponent {

        static displayName = displayName

        static contextTypes = {
            cmrForm: PropTypes.object
        }

        constructor(){
            super();
            this.state = {
                dirty: false
            };
            this.handleChange = this.handleChange.bind(this);
        }

        getStatus(error: Object): String{
            if(error && error.length){
                return 'error';
            }else{
                if(!this.state.dirty){
                    return 'normal';
                }else{
                    return 'success';
                }
            }
        }

        handleChange(){
            this.setState({
                dirty: true
            });
        }

        componentWillReceiveProps(nextProps) {
            const name = this.props.name;
            this.setState({
                value: this.context.cmrForm.model[name],
                error: this.context.cmrForm.errors[name]
            });
        }

        shouldComponentUpdate(nextProps, nextState) {
            const { error, value } = this.state;
            if(!isEqual(nextState.value, value)){
                return true;
            }   
            if(!isEqual(nextState.error, error)){
                return true;
            }
            return false;
        }
        
        render(){
            const { name, label, labelWidth, labelAlign, required, extra, mode, ...rest } = this.props;
            const error = this.state.error;
            return (
                <Field 
                    label={label}
                    labelWidth={labelWidth}
                    labelAlign={labelAlign}   
                    required={required}
                    feedback={error && error.length && error[0]}
                    status={this.getStatus(error)}
                    extra={extra}
                >    
                    <Control name={name} onChange={this.handleChange} {...rest}/>
                </Field>
            );
        }

    };

}