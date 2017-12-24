import React from 'react';
import BaseComponent from '../../base/BaseComponent';
import PropTypes from '../../base/prop-types';
import support from '../../base/utils/supports';

const OFFSET = 2;
const { transform } = support();

export default class Toggle extends BaseComponent{

    static propTypes = {
        onText: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
        offText: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
        checked: PropTypes.bool,
        disabled: PropTypes.bool,
        onChange: PropTypes.func,
        defaultChecked: PropTypes.bool
    }

    static defaultProps = {
        disabled: false,
        defaultChecked: false,
        onText: '',
        offText: '',
        onChange(){}
    }

    constructor(props: Object){
        super(props);
        this.state = {
            isOn: 'checked' in props ? props.checked : props.defaultChecked
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(){
        if(this.props.disabled) return;
        this.setState(({isOn}) => {
            return {
                isOn: !isOn,
            };
        }, () => {
            this.props.onChange(this.state.isOn);
        });
    }

    componentDidMount() {
        this.innerWidth = this.refs.inner.offsetWidth;
        this.sliderWidth = this.refs.slider.offsetWidth;
        const defaultChecked = this.props.defaultChecked;
        const offset = defaultChecked ? this.innerWidth - this.sliderWidth - OFFSET : OFFSET;
        this.refs.slider.style[transform] = `translate(${offset}px, -50%)`;
        this.forceUpdate();
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            isOn: nextProps.checked
        });   
    }
    
    render(){
        const isOn = this.state.isOn;
        const { sliderWidth, innerWidth, props } = this; 
        const { offText, onText, disabled } = props;
        const offset = isOn ? innerWidth - sliderWidth -4 : OFFSET;
        return (
            <label className={this.classNames({
                'cmr-toggle': true,
                [`cmr-toggle-${isOn ? 'on' : 'off'}`]: true,
                'cmr-toggle-disabled': disabled
            })}>
               <div className="cmr-toggle-outer">
                    <input type="checkbox" className="cmr-toggle-input" onChange={this.handleChange}/>
                    <div className="cmr-toggle-inner" ref="inner">
                        {isOn ? 
                            <span className="cmr-toggle-text cmr-toggle-text-off">{offText}</span>:
                            <span className="cmr-toggle-text cmr-toggle-text-on">{onText}</span>
                        }
                        <span className="cmr-toggle-slider" ref="slider" style={{
                            [transform]: `translate(${offset}px, -50%)`
                        }}/>
                    </div>
               </div>
            </label>
        );
    }

}