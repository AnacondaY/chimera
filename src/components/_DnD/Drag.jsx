import React, { Children, cloneElement } from 'react';
import PropTypes from '../../base/prop-types';
import BaseComponent from '../../base/BaseComponent';
import support from '../../base/utils/supports';

const { transform } = support();

export default class Drag extends BaseComponent {

    constructor(props: Object){
        super(props);
        this.state = {
            canDrag: false,
            x: props.initialX,
            y: props.initialY
        };
        this.handleMouseDown = this.handleMouseDown.bind(this);
        this.handleMouseMove = this.handleMouseMove.bind(this);
        this.handleMouseUp = this.handleMouseUp.bind(this);
    }

    handleMouseDown(evt: React.SyntheticEvent){
        if(evt.button) return;
        evt.persist();       
        this.setState({
            canDrag: true
        }, () => {
            document.addEventListener('mousemove', this.handleMouseMove);
            document.addEventListener('mouseup', this.handleMouseUp);
            this.props.onMouseDown(evt);
        });
    }

    handleMouseMove(evt: React.SyntheticEvent){
        evt.preventDefault();
        if(!this.state.canDrag) return;
        const { minX, minY, maxX, maxY, horizontal, vertical, startX, startY, onMouseMove } = this.props;
        this.setState(({x, y}) => {
            x = evt.pageX - startX;
            y = evt.pageY - startY;
            if(typeof minX === 'number' && x < minX){
                x = minX;
            }else if(typeof maxX === 'number' && x > maxX){
                x = maxX;
            }
            if(typeof minY === 'number' && y < minY){
                y = minY;
            }else if(typeof maxY === 'number' && y > maxY){
                y = maxY;
            }
            if(horizontal){
                return {
                    x
                };
            }else if(vertical){
                return {
                    y
                };
            }else{
                return {
                    x,
                    y
                };
            }
        }, () => this.props.onMouseMove(this.state.x, this.state.y));
    }

    handleMouseUp(evt: React.SyntheticEvent){
        this.setState({
            canDrag: false
        }, () => {
            document.removeEventListener('mousemove', this.handleMouseMove);
            document.removeEventListener('mouseup', this.handleMouseUp);
            this.props.onMouseUp(evt);
        });
    }

    componentWillReceiveProps(nextProps) {
        const { x, y } = nextProps;
        if(typeof x === 'number' && typeof y === 'number'){
            this.setState({
                x,
                y
            });
        }  
    }

    render(){
        const { x, y } = this.state;
        const style = {
            [transform]: `translate(${x}px, ${y}px)`
        };
        const onlyChild = Children.only(this.props.children);
        return cloneElement(onlyChild, {
            onMouseDown: this.handleMouseDown,
            style: {
                ...onlyChild.props.style,
                ...style
            }
        });
    }

}

Drag.propTypes = {
    initialX: PropTypes.number,
    initialY: PropTypes.number,
    startX: PropTypes.number,
    startY: PropTypes.number,
    minX: PropTypes.number,
    maxY: PropTypes.number,
    maxX: PropTypes.number,
    minY: PropTypes.number,
    x: PropTypes.number,
    y: PropTypes.number,
    horizontal: PropTypes.bool,
    vertical: PropTypes.bool,
    onMouseDown: PropTypes.func,
    onMouseMove: PropTypes.func,
    onMouseUp: PropTypes.func
};

Drag.defaultProps = {
    initialX: 0,
    initialY: 0,
    startX:0,
    startY: 0,
    horizontal: false,
    vertical: false,
    onMouseDown(){},
    onMouseMove(){},
    onMouseUp(){}
};