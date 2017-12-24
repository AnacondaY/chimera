import React, { Children, cloneElement } from 'react';
import Indicator from './Indicator';
import Controller from './Controller';
import PropTypes from '../../base/prop-types';
import BaseComponent from '../../base/BaseComponent';
import support  from '../../base/utils/supports';

const { transform, transition, transitionEnd } = support();

export default class Carousel extends BaseComponent {

    static propTypes = {
        effect: PropTypes.oneOf(['fade', 'slide']),
        autoplay: PropTypes.bool,
        activeIndex: PropTypes.number,
        interval: PropTypes.number,
        speed: PropTypes.number,
        hoverToStop: PropTypes.bool,
        showController: PropTypes.bool,
        showIndicators: PropTypes.bool,
        onChange: PropTypes.func
    }

    static defaultProps = {
        effect: 'slide',
        autoplay:true,
        showController: true,
        showIndicators: true,
        activeIndex: 0,
        interval: 3000,
        speed: 250,
        hoverToStop:true
    }

    constructor(props: Object){
        super(props);
        this.state = {
            activeIndex: 0,
            acturalIndex: 0,
            moving: false,
            children: Children.toArray(props.children)        
        };
        this.handleTransitionEnd = this.handleTransitionEnd.bind(this);
        this.prev = this.prev.bind(this);
        this.next = this.next.bind(this);
        this.handleMouseEnter = this.handleMouseEnter.bind(this);
        this.handleMouseLeave = this.handleMouseLeave.bind(this);
        this.handleInicatorClick = this.handleInicatorClick.bind(this);
    }

    get itemCount(){
        return this.items.length;
    }

    goTo(index: Number, moving: Boolean): void{
        //4 1 2 3 4 1
        //-1 0 1 2 3 4
        let activeIndex = index;
        let acturalIndex = index;
        if(index === -2){
            activeIndex = this.itemCount - 3;
        }else if(index === this.itemCount - 1){
            activeIndex = 0;
        }
        if(index === this.itemCount - 2){
            acturalIndex = 0;
        }else if(index === -1){
            acturalIndex = this.itemCount - 3;
        }
        this.setState({
            activeIndex,
            acturalIndex,
            moving
        }, () => {
            const { moving, acturalIndex } = this.state;
            //防止克隆项改变时触发onChange
            moving && typeof this.props.onChange === 'function' && this.props.onChange(acturalIndex);
        });
    }

    fadeTo(index: Number){
        if(index < 0){
            index = this.itemCount - 1;
        }else if(index > this.itemCount - 1){
            index = 0;
        }
        this.setState({
            activeIndex: index
        }, () => {
            typeof this.props.onChange === 'function' && this.props.onChange(index);    
        });
    }

    prev(){
        let activeIndex = this.state.activeIndex;
        activeIndex -= 1;
        if(this.props.effect === 'slide'){
            this.goTo(activeIndex, true);
        } else if(this.props.effect === 'fade'){
            this.fadeTo(activeIndex);
        }
    }

    next(){
        let activeIndex = this.state.activeIndex;
        activeIndex += 1;
        if(this.props.effect === 'slide'){
            this.goTo(activeIndex, true);
        } else if(this.props.effect === 'fade'){
            this.fadeTo(activeIndex);
        }
    }

    startTimer(){
        const { interval, effect } = this.props;
        this.timer = setInterval(() => {
            let activeIndex = this.state.activeIndex;
            activeIndex += 1;
            if(effect === 'slide'){
                this.goTo(activeIndex, true);            
            }else if(effect === 'fade'){
                this.fadeTo(activeIndex);
            }
        }, this.props.interval);
    }

    clearTimer(){
        clearInterval(this.timer);
    }

    handleMouseEnter(){
        const { autoplay, hoverToStop } = this.props;
        if(autoplay && hoverToStop){
            this.clearTimer();
        }
    }

    handleMouseLeave(){
        if(this.props.autoplay){
            this.startTimer();
        }
    }

    handleTransitionEnd(){
        if(this.state.activeIndex === this.itemCount - 2){
            this.goTo(0, false);
        }
        
        if(this.state.activeIndex === -1){
            this.goTo(this.itemCount - 3, false);
        }
    }

    handleInicatorClick(index: Number){
        if(this.props.effect === 'slide'){
            this.goTo(index, true);
        }else if(this.props.effect === 'fade'){
            this.fadeTo(index);
        }
    }

    componentWillMount() {
        if(this.props.effect === 'slide'){
            const children = this.props.children;
            this.items = [cloneElement(children[Children.count(children) - 1])]
                            .concat(Children.toArray(children))
                            .concat([cloneElement(children[0])]);
        }else if(this.props.effect === 'fade'){
            this.items = Children.toArray(this.props.children);
        }
    }
    
    componentDidMount() {
        const { autoplay, effect } = this.props;
        if(effect === 'slide'){
            const { visible, list } = this.refs;
            const width = visible.offsetWidth;
            this.itemWidth = width;
            list.style.width = `${this.itemCount * width}px`;
            list.style[transform]= `translate(-${this.itemWidth}px, 0)`;
        }
        if(autoplay){
            this.startTimer();
        }
    }

    componentWillUnmount() {
        this.clearTimer();   
    }

    render(){
        const { speed, children, effect, showController, showIndicators } = this.props;
        const { activeIndex, acturalIndex, moving } = this.state;
        const style = {};
        let itemStyle;
        if(this.itemWidth && effect === 'slide'){
            style[transform] = `translate(${-(activeIndex + 1) * this.itemWidth}px, 0)`;
            if(moving){
                style[transition] = `${transform} ${speed}ms`;            
            }
        }
        return (
            <div style={this.styles()} className={this.classNames({
                'cmr-carousel': true,
                'cmr-carousel-fade': effect === 'fade'
            })} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
                <div className="cmr-carousel-visible" ref="visible">
                    <ul className="cmr-carousel-list" ref="list" onTransitionEnd={effect === 'slide' && this.handleTransitionEnd} style={this.styles(style)}>
                        {this.items.map((item, i) =>{
                            if(effect === 'slide'){
                                return cloneElement(item, {
                                    key: `cmr-carousel-item-${i}`,
                                    style: {
                                        width: `${1/this.itemCount*100}%`
                                    }
                                });
                            }else if(effect === 'fade'){
                                return cloneElement(item, {
                                    key: `cmr-carousel-item-${i}`,
                                    style: {
                                        transition: `opacity ${speed}ms`,
                                        opacity: i === activeIndex ? 1 : 0
                                    }
                                });
                            }
                        })}
                    </ul>
                    { showController && <Controller onLeftClick={this.prev} onRightClick={this.next} /> }
                    { showIndicators && 
                        <Indicator activeIndex={effect === 'slide' ? acturalIndex : activeIndex} count={effect === 'slide' ? this.itemCount - 2 : this.itemCount} onIndicatorClick={this.handleInicatorClick} />
                    }
                </div>
            </div>
        );
    }

}