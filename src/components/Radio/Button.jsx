import React from 'react';
import BaseComponent from '../../base/BaseComponent';
import { radioProps, radioDefaultProps } from './define';

export default class Button extends BaseComponent {

    static __RADIO_BUTTON__ = true

    static propTypes = radioProps

    static defaultProps = radioDefaultProps

    constructor(props: Object){
        super(props);
        this.state = {
            checked: this.isChecked(props)
        };
        this.handleChange = this.handleChange.bind(this);
    }

    isChecked(props: Object): Boolean{
        const { model, value, checked } = props;
        return (model !== undefined && value !== undefined && model === value) || !!checked;
    }

    handleChange(evt: React.SyntheticEvent){
        const checked = evt.target.checked;
        if(checked){
            this.props.onChange(this.props.value);            
        }
        this.setState({
            checked
        });
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            checked: this.isChecked(nextProps)
        });
    }  

    render(){
        const checked = this.state.checked;
        const { children } = this.props;
        return (
            <label className={this.classNames({
                'cmr-radio': true,
                'cmr-radio-button': true,
                'cmr-radio-checked': checked
            })}>
                <input 
                    type="radio" 
                    className="cmr-radio-input"
                    checked={checked}
                    onChange={this.handleChange}
                />
                {children && <span className="cmr-radio-label">{children}</span>}
            </label>
        );
    }

}