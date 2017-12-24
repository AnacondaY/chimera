import React from 'react';
import PropTypes from '../../../base/prop-types';
import BaseComponent from '../../../base/BaseComponent';
import { getOffset } from '../../../base/utils/dom';
import { Drag } from '../../_DnD';
import Color from '../color';

export default class _Slider extends BaseComponent {

    static propTypes = {
        color: PropTypes.instanceOf(Color).isRequired,
        mode: PropTypes.oneOf(['horizontal', 'vertical']),
    }

    static defaultProps = {
        mode: 'horizontal',
    }

    constructor(props: Object){
        super(props);
        this.state = {
            thumbX:0,
            thumbY:0
        };
    }

    get isVertical(){
        return this.props.mode === 'vertical';
    }
    
    handleThumbDown(){
        const { offsetLeft, offsetTop, offsetWidth, offsetHeight } = getOffset(this.refs.bar);
        this.barWidth = offsetWidth;
        this.barHeight = offsetHeight;
        this.barLeft = offsetLeft;
        this.barTop = offsetTop;
        this.forceUpdate();
    }
    
    handleThumbMove(x: Number, y: Number){
        if(!this.isVertical){
            this.handleMove(x, this.barWidth);
        }else{
            this.handleMove(y, this.barHeight);
        }
    }

    componentDidMount() {
        this.updatePositionByColor(this.props.color);
    }

    componentWillReceiveProps(nextProps) {
        this.forceUpdate();
        this.updatePositionByColor(this.props.color);
    }
    
    render(){
        const { mode, color } = this.props;
        const { r, g, b } = color.toRGB();
        const { thumbX, thumbY } = this.state;
        let props;
        if(!this.isVertical){
            props = {
                horizontal: true,
                minX: 0,
                maxX: this.barWidth,
                startX: this.barLeft
            };
        }else{
            props = {
                vertical: true,
                minY:0,
                maxY: this.barHeight,
                startY: this.barTop
            };
        }
        return (
            <div className={this.classNames({
                'cmr-colorpicker-slider': true,
                [`cmr-colorpicker-slider-${mode}`]: true,
                [`cmr-colorpicker-slider-${this.type}`]: true
            })}>
                <div className="cmr-colorpicker-slider-inner" ref="bar"
                    style={this.type === 'hue' ? {} : {
                        background: `linear-gradient(to right, rgba(${r}, ${g}, ${b}, 0) 0%, rgba(${r}, ${g}, ${b}, 1) 100%)`
                    }}
                >
                    <Drag {...props} 
                        onMouseMove={this.handleThumbMove.bind(this)} 
                        onMouseDown={this.handleThumbDown.bind(this)} 
                        x={thumbX}
                        y={thumbY}
                    >
                        <span className="cmr-colorpicker-slider-thumb" ref="thumb"/>
                    </Drag>
                </div>
            </div>
        );
    }

}