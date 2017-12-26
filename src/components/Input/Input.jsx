import React from 'react';
import debounce from 'lodash/debounce';
import Icon from '../Icon';
import PropTypes from '../../base/prop-types';
import BaseComponent from '../../base/BaseComponent';

const noop = () => { };

export default class Input extends BaseComponent {

    static propTypes = {
        size: PropTypes.oneOf(['small', 'middle', 'large']),
        placeholder: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        name: PropTypes.string,
        iconBefore: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
        iconAfter: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
        addonBefore: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
        addonAfter: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
        disabled: PropTypes.bool,
        cleanable: PropTypes.bool,
        textarea: PropTypes.bool,
        autoComplete: PropTypes.oneOf(['on', 'off']),
        rows: PropTypes.number,
        cols: PropTypes.number,
        autoFocus: PropTypes.bool,
        onChange: PropTypes.func,
        onFocus: PropTypes.func,
        onBlur: PropTypes.func,
        onEnter: PropTypes.func,
        onClick: PropTypes.func
    }

    static defaultProps = {
        size: 'middle',
        placeholder: '',
        defaultValue: '',
        textarea: false,
        disabled: false,
        cleanable: false,
        autoComplete: 'off',
        rows: 3,
        cols: 20,
        autoFocus: false,
        onFocus: noop,
        onBlur: noop,
        onChange: noop,
        onClick: noop,
        onBeforeClick: noop,
        onAfterClick: noop
    }

    constructor(props: Object) {
        super(props);
        this.state = {
            value: typeof props.value === 'undefined' ? props.defaultValue : props.value ,
            focused: false,
            hovered: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleFocus = this.handleFocus.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
        this.handleMouseEnter = this.handleMouseEnter.bind(this);
        this.handleMouseLeave = this.handleMouseLeave.bind(this);
        this.reset = this.reset.bind(this);
    }

    componentWillReceiveProps(nextProps: Object) {
        this.setState({
            value: nextProps.value
        });
    }

    handleChange(evt: React.SyntheticEvent){
        if(this.props.disabled) return;
        this.setState({
            value: evt.target.value
        }, () => {
            this.props.onChange(this.state.value);
        });
    }

    handleFocus(evt: React.SyntheticEvent){
        this.setState({
            focused: true
        }, evt => this.props.onFocus(evt));
    }

    handleBlur(evt: React.SyntheticEvent){
        this.setState({
            focused: false
        }, evt => this.props.onBlur(evt));
    }
    
    handleMouseEnter(){
        this.setState({
            hovered: true
        });
    }

    handleMouseLeave(){
        this.setState({
            hovered: false
        });
    }

    reset(){
        this.setState({
            value: ''
        }, () => {
            this.props.onChange(this.state.value);
        });
    }

    render() {
        const { textarea, iconBefore, iconAfter, addonBefore, cleanable, defaultValue, className, style,
                addonAfter, disabled,placeholder,onBeforeClick, onAfterClick, onChange, onBlur,
                rows, cols, onEnter, delay, size, onKeyPress, onClick, onFocus, 
                htmlType, autoComplete, ...rest} = this.props;
        if (textarea) {
            return (
                <div className={this.classNames({
                    'cmr-input': true,
                    'cmr-input-focused': this.state.focused,
                    'cmr-input-hovered': this.state.hovered,
                    'cmr-input-disabled': disabled
                })}>
                    <textarea
                        className="cmr-input-textarea"
                        cols={cols} rows={rows} disabled={disabled}
                        placeholder={placeholder}
                        value={this.state.value} 
                        onChange={this.handleChange} 
                        onKeyPress={onKeyPress} 
                        onClick={onClick}
                        onFocus={this.handleFocus}
                        onBlur={this.handleBlur}
                        onMouseEnter={this.handleMouseEnter}
                        onMouseLeave={this.handleMouseLeave}
                    />
                </div>
            );
        }
        return (
            <div className={this.classNames({
                'cmr-input': true,
                'cmr-input-disabled': disabled,
                'cmr-input-icon': iconBefore || iconAfter || cleanable,
                'cmr-input-addon': addonBefore || addonAfter,
                'cmr-input-addon-before-had': addonBefore,
                'cmr-input-addon-after-had': addonAfter,
                'cmr-input-icon-before-had': iconBefore,
                'cmr-input-icon-after-had': iconAfter,
                'cmr-input-focused': this.state.focused,
                'cmr-input-hovered': this.state.hovered,
                [`cmr-input-${size}`]: true
            }, this.props.className)} style={this.styles()}>
                { addonBefore && <span className="cmr-input-addon-before" onClick={onBeforeClick}>{addonBefore}</span> }
                { iconBefore && 
                    <span className="cmr-input-icon-before">
                        {typeof iconBefore === 'string' ? <Icon type={iconBefore} /> : iconBefore}
                    </span> 
                }
                <input 
                    disabled={disabled} 
                    type={htmlType} 
                    className="cmr-input-origin" 
                    value={this.state.value} 
                    onFocus={onFocus}
                    placeholder={placeholder} 
                    onChange={this.handleChange} 
                    onKeyPress={onKeyPress} 
                    onClick={onClick}
                    onFocus={this.handleFocus}
                    onBlur={this.handleBlur}
                    onMouseEnter={this.handleMouseEnter}
                    onMouseLeave={this.handleMouseLeave}
                />
                {cleanable && this.state.value &&
                    <span className="cmr-input-icon-after cmr-input-icon-clean" onClick={this.reset}>
                        <Icon type="error"/>
                    </span>
                }
                { iconAfter && !cleanable &&
                    <span className="cmr-input-icon-after">
                        {typeof iconAfter === 'string' ? <Icon type={iconAfter}/> : iconAfter}
                    </span> 
                }
                { addonAfter && <span className="cmr-input-addon-after" onClick={onAfterClick}>{addonAfter}</span> }
            </div>
        );
    }

}

