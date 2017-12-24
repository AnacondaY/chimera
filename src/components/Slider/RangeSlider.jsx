import React from 'react';
import PropTypes from '../../base/prop-types';
import BaseComponent from '../../base/BaseComponent';
import Tooltip from '../Tooltip';

export default class RangeSlider extends BaseComponent {

    constructor(props: Object){
        super(props);
        this.state = {
            value: [0 ,0],
            canDrag: false
        };
        this.handleMouseDown = this.handleMouseDown.bind(this);
        this.handleMouseMove = this.handleMouseMove.bind(this);
        this.handleMouseUp = this.handleMouseUp.bind(this);
    }

    handleMouseDown(){
        this.setState({
            canDrag: true
        }, () => {
            document.addEventListener('mousemove', this.handleMouseMove);
            document.addEventListener('mouseup', this.handleMouseUp);
        });
    }

    handleMouseMove(){

    }

    handleMouseUp(){
        this.setState({
            canDrag: false
        }, () => {
            document.removeEventListener('mousemove', this.handleMouseMove);
            document.removeEventListener('mouseup', this.handleMouseUp);
        });
    }

}