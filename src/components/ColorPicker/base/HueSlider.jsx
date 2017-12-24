import React from 'react';
import PropTypes from '../../../base/prop-types';
import _Slider from './_Slider';
import Color from '../color';

export default class HueSlider extends _Slider {

    type = 'hue'

    updatePositionByColor(color){
        let x = 0;
        let y = 0;
        const { width, height } = this.refs.bar.getBoundingClientRect();
        if(this.props.mode === 'horizontal'){
            x = color.hue * width / 360;
        }else{
            y = color.hue * height / 360;
        }
        this.setState({
            thumbX: x,
            thumbY: y
        });
    }

    handleMove(position: Number, span: Number){
        const { color, onHueChange } = this.props;
        color.hue = position * 360 / span;
        onHueChange(color);
    }
    
}