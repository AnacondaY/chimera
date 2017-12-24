import React from 'react';
import PropTypes from '../../base/prop-types';
import BaseComponent from '../../base/BaseComponent';
import Input from '../../components/Input';
import Icon from '../../components/Icon';

const noop = () => {};

export default class NumberInput extends BaseComponent {

    static propTypes = {
        defaultValue: PropTypes.number,
        initialValue: PropTypes.number,
        maximum: PropTypes.number,
        minimum: PropTypes.number,
        value: PropTypes.number,
        size: PropTypes.oneOf(['large', 'middle', 'small']),
        step: PropTypes.number,
        disabled: PropTypes.bool,
        formatter: PropTypes.func,
        parser: PropTypes.func,
        showIncreaser: PropTypes.bool,
        showDecreaser: PropTypes.bool,
        onChange: PropTypes.func,
        onBlur: PropTypes.func
    }

    static defaultProps = {
        maximum: 100,
        minimum: 0,
        size: 'middle',
        step: 1,
        disabled: false,
        showIncreaser: true,
        showDecreaser: true,
        onChange: noop,
        onBlur: noop
    }

    constructor(props: Object){
        super(props);
        const { defaultValue, value, minimum } = props;
        this.state = {
            //value: typeof props.initialValue === 'undefined' ? props.minimum : props.initialValue,
            value: typeof value === 'undefined' ? (typeof defaultValue === 'undefined' ? minimum : defaultValue) : value
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
        this.increase = this.increase.bind(this);
        this.decrease = this.decrease.bind(this);
    }

    get isMinReached(){
        return this.state.value === this.props.minimum;
    }

    get isMaxReached(){
        return this.state.value === this.props.maximum;
    }

    isNumber(value: mixed): Boolean{
        return typeof value === 'number';
    }

    change(delta: Number){
        if(this.props.disabled) return;
        this.setState(({value}) => {     
            value = this.parse(value);
            //value = Number(value);
            return {
                value: value + delta
            };
        }, () => this.props.onChange(this.state.value));
    }

    increase(){
        if(this.isMaxReached) return;
        this.change(this.props.step);
    }

    decrease(){
        if(this.isMinReached) return;
        this.change(-this.props.step);
    }

    handleChange(evt: React.SyntheticEvent){
        let value = evt.target.value;       
        value = this.parse(value);
        this.setState({
            value
        }, () => this.props.onChange(value));
    }

    handleBlur(evt: React.SyntheticEvent){
        let value = this.state.value;
        value = this.validateValue(value);
        this.setState({
            value
        }, evt => this.props.onBlur(evt));
    }

    validateValue(value: Number | String): Number{
        const { minimum, maximum, defaultValue } = this.props;
        value = parseFloat(value);
        if(isNaN(value)){
            return typeof defaultValue !== 'undefined' ? defaultValue : minimum;
        }else{
            value = Math.max(minimum, value);
            value = Math.min(maximum, value);
            return value;
        }
    }

    parse(value: mixed){
        if(typeof this.props.parser === 'function'){
            return this.props.parser(value);
        }
        return value;
    }

    componentWillReceiveProps(nextProps) {
        const { value, onChange } = nextProps;
        this.setState(({value}) => {
            value = this.parse(value);
            return {
                value: this.validateValue(value)
            };
        });
    }

    render(){
        const { size, disabled, formatter, style } = this.props;
        let value = this.state.value;
        if(typeof formatter === 'function'){
            value = formatter(value);
        }
        return (
            <div className={this.classNames({
                'cmr-input': true,
                'cmr-input-number': true,
                'cmr-input-disabled': disabled,
                [`cmr-input-${size}`]: true
            })} style={this.styles()}>
                <input 
                    type="text" 
                    className="cmr-input-origin" 
                    value={value}
                    disabled={disabled}
                    onChange={this.handleChange}
                    onBlur={this.handleBlur}
                />
                <div className="cmr-input-control">
                    <button type="button" className={this.cx('cmr-input-control-button', {
                        'cmr-input-control-button-disabled': this.isMaxReached
                    })} onClick={this.increase}>
                        <Icon type="caret-up"/>
                    </button>
                    <div className="cmr-input-control-divider" />
                    <button type="button" className={this.cx('cmr-input-control-button', {
                        'cmr-input-control-button-disabled': this.isMinReached
                    })} onClick={this.decrease}>
                        <Icon type="caret-down"/>
                    </button>
                </div>
            </div>
        );
    }
}