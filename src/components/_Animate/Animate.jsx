import React, { cloneElement, Children } from 'react';
import { findDOMNode } from 'react-dom';
import PropTypes from '../../base/prop-types';
import BaseComponent from '../../base/BaseComponent';
import collapse from './effects/collapse';
import zoom from './effects/zoom';
import slide from './effects/slide';

export default class Animate extends BaseComponent {

    static propTypes = {
        effect: PropTypes.oneOf(['collapse', 'fade', 'zoom', 'slide']),
        active: PropTypes.bool,
        initial: PropTypes.bool
    }

    static defaultProps = {
        active: false,
        initial: true
    }

    collapse(props: Object){
        collapse(this.target, props.active);
    }

    zoom(props: Object){
        zoom(this.target, props.active);
    }

    slide(props: Object){
        slide(this.target, props.active);
    }

    componentDidMount() {
        const { effect, initial } = this.props;
        this.target = findDOMNode(this);
        if(effect && initial){
            this[effect](this.props);
        }
    }

    componentWillReceiveProps(nextProps) {
        if(this.props.effect && nextProps.active !== this.props.active){
            this[this.props.effect](nextProps);
        }   
    }

    render(){
        return Children.only(this.props.children);
    }

}