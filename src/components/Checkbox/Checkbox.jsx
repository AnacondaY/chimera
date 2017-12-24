import React from 'react';
import PropTypes from '../../base/prop-types';
import BaseComponent from '../../base/BaseComponent';

export default class Checkbox extends BaseComponent {

    static propTypes = {
        checked: PropTypes.bool,
        indeterminate: PropTypes.bool,
        disabled: PropTypes.bool,
        onChange: PropTypes.func
    }

    static defaultProps = {
        checked: false,
        indeterminate: false,
        disabled: false
    }

    constructor(props: Object){
        super(props);
        this.state = {
            checked: !!props.checked
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(evt: React.SyntheticEvent){
        if(this.props.disabled) return;
        const checked = evt.target.checked;
        this.setState({
            checked
        }, () => {
            typeof this.props.onChange === 'function' && this.props.onChange(checked);
        });
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            checked: nextProps.checked
        });
    }

    render(){
        const { disabled, children, indeterminate } = this.props;
        const checked = this.state.checked;
        return (
            <label className={this.classNames({
                'cmr-checkbox':true,
                'cmr-checkbox-checked': checked,
                'cmr-checkbox-indeterminate': indeterminate && !checked,
                'cmr-checkbox-disabled': disabled
            })}>
                <span className="cmr-checkbox-input">
                    <input type="checkbox" className="cmr-checkbox-origin" checked={checked} 
                        onChange={this.handleChange}/>                
                    <span className="cmr-checkbox-mock"/>               
                </span>
                <span className="cmr-checkbox-text">{children}</span>          
            </label>
        );
    }
}
