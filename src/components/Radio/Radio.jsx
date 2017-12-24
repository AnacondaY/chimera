import React from 'react';
import BaseComponent from '../../base/BaseComponent';
import { radioProps, radioDefaultProps } from './define';

export default class Radio extends BaseComponent {

    static __RADIO__ = true;

    static propTypes = radioProps

    static defaultProps = radioDefaultProps

    constructor(props: Object){
        super(props);
        this.state = {
            checked: this.isChecked(props)
        };
        this.handleChange = this.handleChange.bind(this);        
    }

    isChecked(props: Object){
        //model value用于按钮组的情况
        const { model, value, checked } = props;
        return (model !== undefined && value !== undefined && model === value) || !!checked;
    }  

    handleChange(evt: React.SyntheticEvent){
        if(this.props.disabled) return;
        const checked = evt.target.checked;
        if(checked){
            this.props.onChange(this.props.value);            
        }
        this.setState({
            checked
        });
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.disabled) return;
        this.setState({
            checked: this.isChecked(nextProps)
        });
    }

    render(){
        const { checked, focused } = this.state;
        const { children, value, disabled } = this.props;
        return (
            <label className={this.classNames({
                'cmr-radio': true,
                'cmr-radio-checked': checked,
                'cmr-radio-disabled': disabled
            })}>
                <span className="cmr-radio-input">
                    <input 
                        type="radio" 
                        className="cmr-radio-origin" 
                        onChange={this.handleChange}
                        checked={checked}
                        disabled={disabled}
                    />
                    <span className="cmr-radio-mock"></span>
                </span>
                {children && children.length > 0 && <span className="cmr-radio-label">{children}</span>}
            </label>
        );
    }

}
