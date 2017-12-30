import React from 'react';
import { findDOMNode } from 'react-dom';
import PropTypes from '../../base/prop-types';
import BaseComponent from '../../base/BaseComponent';
import Tooltip from '../Tooltip';
import { getOffset } from '../../base/utils/dom';
import { Drag } from '../_DnD';

export default class Slider extends BaseComponent {

    static propTypes = {
        minimum: PropTypes.number,
        maximum: PropTypes.number,
        defaultValue: PropTypes.number,
        disabled: PropTypes.bool,
        exclude: PropTypes.bool,
        showTicks: PropTypes.bool,
        range: PropTypes.bool,
        mode: PropTypes.oneOf(['horizontal', 'vertical']),
        tooltipTemplate: PropTypes.oneOfType([PropTypes.func, PropTypes.string, PropTypes.bool]),
        step:function(props, propName, componetName){
            const { maximum, minimum, step } = props;
            if(!(maximum - minimum) % step){
                console.error('the prop \'step\' cannot be divided integrately by (maximum - minimum)');
            }
        },
        onChange: PropTypes.func
    }

    static get defaultProps(){
        const props = {
            minimum: 0,
            maximum: 100,
            step:1,
            disabled: false,
            showTicks: false,
            exclude: false,
            range: false,
            mode: 'horizontal',
            tooltipTemplate: true,
            onChange(){}
        };
        return props;
    }

    start = 0

    constructor(props: Object){
        super(props);
        const { defaultValue, value, minimum } = props;
        let state = {
            canDrag: false,
            position: 0,
            value: typeof value !== 'undefined' ? value : ( typeof defaultValue !== 'undefined' ? defaultValue : minimum )
        };
        this.state = state;
        this.handleMouseDown = this.handleMouseDown.bind(this);
        this.handleMouseMove = this.handleMouseMove.bind(this);
        this.handleMouseUp = this.handleMouseUp.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    get isVertical(){
        return this.props.mode === 'vertical';
    }

    get isRange(){
        return this.props.range;
    }

    // (value - min)/(max - min) = position/width
    calcPosition(value: Number): Number{
        const { maximum, minimum } = this.props;
        const slider = this.refs.slider;
        const width = slider.offsetWidth;
        const height = slider.offsetHeight;
        return ( value - minimum ) / ( maximum - minimum ) * (this.isVertical ? height : width);
    }

    calcValue(position: Number): Number{
        const slider = this.refs.slider;
        if(!slider){
            return this.state.value;
        }
        const { offsetWidth: width, offsetHeight: height } = slider;
        const { maximum, minimum } = this.props;
        return position / (this.isVertical ? height : width) * (maximum - minimum) + minimum;
    }

    renderTooltip(value: Number): React.ReactNode | String | Number{
        const tooltipTemplate = this.props.tooltipTemplate;
        if(typeof tooltipTemplate === 'function'){
            return tooltipTemplate(value);
        }
        return typeof tooltipTemplate === 'string' ? tooltipTemplate : value;
    }

    handleClick(evt: React.SyntheticEvent){
        if(this.props.disabled) return;
        const step = this.props.step;
        const slider = this.refs.slider;
        const { offsetLeft, offsetTop } = getOffset(slider);
        const current = this.isVertical ? offsetTop + slider.offsetHeight - evt.pageY :evt.pageX - offsetLeft;
        const value = this.calcValue(current);
        const temp = Math.round(value / step) * step;
        const position = this.calcPosition(temp);
        this.setState({
            position,
            value
        }, () => this.props.onChange(value));
    }

    handleMouseDown(evt: React.SyntheticEvent){
        evt.persist();
        if(this.props.disabled) return;
        this.setState({
            canDrag: true
        }, () => {
            document.addEventListener('mousemove', this.handleMouseMove);
            document.addEventListener('mouseup', this.handleMouseUp);
        });
    }

    handleMouseMove(evt){
        if(!this.state.canDrag) return;
        const { onChange, step } = this.props;
        let current;
        const { offsetLeft, offsetTop, offsetWidth, offsetHeight } = getOffset(this.refs.slider);
        if(!this.isVertical){
            current = evt.pageX - offsetLeft;
            if(current < 0){
                current = 0;
            }else if(current > offsetWidth){
                current = offsetWidth;
            }
        }else{
            current = offsetTop + offsetHeight - evt.pageY;
            if(current < 0){
                current = 0;
            }else if(current > offsetHeight){
                current = offsetHeight;
            }
        }
        const value = this.calcValue(current);
        const temp = Math.round(value/step) * step;
        const position = this.calcPosition(temp);
        this.setState({
            position,
            value
        }, () => {
            onChange(value);
        });
    }

    handleMouseUp(){
        this.setState({
            canDrag: false
        }, () => {
            document.removeEventListener('mousemove', this.handleMouseMove);
            document.removeEventListener('mouseup', this.handleMouseUp);
        });
    }

    componentDidMount() {
        const position = this.calcPosition(this.state.value);
        this.setState({
            position
        });
    }

    componentWillReceiveProps(nextProps) {
        if(this.state.value === nextProps.value) return;
        if(typeof nextProps.value === 'number'){
            let value = nextProps.value;
            value = Math.max(this.props.minimum, value);
            value = Math.min(this.props.maximum, value);
            this.setState({
                value,
                position: this.calcPosition(value)
            });
        }   
    }
    
    render(){
        const { mode, step, maximum, minimum, showTicks, disabled, range, exclude, tooltipTemplate } = this.props;
        const isVertical = this.isVertical;
        const position = this.state.position;
        const value = this.calcValue(position);
        const count = (maximum - minimum) / step;
        const chunk = (
            <div onMouseDown={this.handleMouseDown} className="cmr-slider-chunk"
                style={this.styles({
                    [isVertical ? 'bottom': 'left']: position
                })}
            >
                <i className="cmr-slider-trigger"/>
            </div>
        );
        const wrappedChunk =(
            <Tooltip offsetX={!this.isVertical ? 9 : -9} offset={12}  
                placement={!this.isVertical ? 'top-center' : 'left-center'}
                content={this.renderTooltip(value)}>
                {chunk}
            </Tooltip>
        );
        return (
            <div className={this.classNames({
                'cmr-slider': true,
                [`cmr-slider-${mode}`]: true,
                'cmr-slider-disabled': disabled,
                'cmr-slider-exclude': exclude
            })} ref="slider"
                onClick={this.handleClick}
            >          
                <div className="cmr-slider-inner">
                    <div className="cmr-slider-trace" style={this.styles({
                        [isVertical ? 'height' : 'width']: position
                    })}>
                        {!tooltipTemplate ? chunk : wrappedChunk }
                    </div>
                    <div className="cmr-slider-ticks">
                        {showTicks && 
                        new Array(count)
                            .fill(minimum)
                            .map((v, i) => {
                                return v + i * step;
                            })
                            .map((value, i) => {
                                const position = (value - minimum) / (maximum - minimum) * 100;
                                if(!i){
                                    return null;
                                }
                                return (
                                    <span className="cmr-slider-tick" 
                                        key={`cmr-slider-tick-${i}`} 
                                        style={{[!this.isVertical ? 'left': 'bottom']: `${position}%`}} 
                                    />
                                );    
                            })
                        }
                    </div>
                </div>
            </div>
        );
    }

}