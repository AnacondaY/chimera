import React from 'react';
import PropTypes from '../../../base/prop-types';
import _Slider from './_Slider';

export default class AlphaSlider extends _Slider {

    type = 'alpha'

    updatePositionByColor(color){
        let x = 0;
        let y = 0;
        const { width, height } = this.refs.bar.getBoundingClientRect();
        if(this.props.mode === 'horizontal'){
            x = color.alpha * width;
        }else{
            y = color.alpha * height;
        }
        this.setState({
            thumbX: x,
            thumbY: y
        });
    }

    handleMove(position: Number, span: Number){
        const { color, onAlphaChange } = this.props;
        color.alpha = position / span;
        onAlphaChange(color);
    }
}