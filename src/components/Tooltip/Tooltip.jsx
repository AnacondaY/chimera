import React, { createElement, Children, cloneElement } from 'react';
import { findDOMNode } from 'react-dom';
import Popover from '../_Popover';
import PropTypes from '../../base/prop-types';
import BaseComponent from '../../base/BaseComponent';
import Animate from '../_Animate';
import { getOffset } from '../../base/utils/dom';

export default class Tooltip extends BaseComponent {

    static propTypes = {
        offset: PropTypes.number,
        placement: PropTypes.oneOf([
            'top-center', 
            'bottom-center', 
            'left-center', 
            'right-center', 
            'left-top', 
            'left-bottom', 
            'right-bottom', 
            'right-top',
            'top-left',
            'top-right',
            'bottom-left',
            'bottom-right'
        ]),
        visible: PropTypes.bool,
        trigger: PropTypes.oneOf(['click', 'hover', 'focus']),
        enterTimeout: PropTypes.number,
        leaveTimeout: PropTypes.number,
        content: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
        onVisibleChange: PropTypes.func
    }

    static defaultProps = {
        offset: 0,
        placement:'top-center',
        visible: false,
        trigger: 'hover',
        enterTimeout: 0,
        leaveTimeout: 0,
        onVisibleChange(){}
    }

    constructor(props: Object){
        super(props);
        this.state = {
            visible: props.visible,
            contentPosition: {}
        };
        this.show = this.show.bind(this);
        this.hide = this.hide.bind(this);
        this.toggle = this.toggle.bind(this);
        this.handleOpen = this.handleOpen.bind(this);
        this.beforeClose = this.beforeClose.bind(this);
    }

    toggle(visible: Boolean){
        const { enterTimeout, leaveTimeout, onVisibleChange } = this.props;
        const timer = setTimeout(() => {
            this.setState({
                visible
            }, () => {
                clearTimeout(timer);
                typeof onVisibleChange === 'function' && onVisibleChange(visible);
            });
        }, visible ? enterTimeout : leaveTimeout);
    }

    show(){
        this.toggle(true);
    }

    hide(){
        this.toggle(false);
    }

    calcPosition(main: HTMLDivElement): void{
        main = main.childNodes[0];             
        const offset = this.props.offset;
        const offsetX = this.props.offsetX || 0;
        const { scrollTop, scrollWidth } = document.body;
        let { arrow, content, wrapper } = this.refs;
        this.wrapper = findDOMNode(wrapper);
        const { offsetLeft: wrapperLeft, offsetTop: wrapperTop, offsetWidth: wrapperWidth, offsetHeight: wrapperHeight } = getOffset(this.wrapper);
        const { offsetLeft: mainLeft, offsetTop: mainTop, offsetWidth: mainWidth, offsetHeight: mainHeight } = getOffset(main);
        const { offsetWidth: arrowWidth, offsetHeight: arrowHeight } = arrow;  
        switch(this.props.placement){
        case 'top-center':
            main.style.transformOrigin = 'center bottom';
            main.style.left = wrapperLeft - (mainWidth - wrapperWidth)/2 - offsetX;
            main.style.top = wrapperTop - mainHeight - arrowHeight - offset;
            break;
        case 'bottom-center':
            main.style.transformOrigin = 'center top';
            main.style.left = wrapperLeft - (mainWidth - wrapperWidth)/2;
            main.style.top = wrapperTop + wrapperHeight + arrowHeight + offset;
            break;
        case 'left-center':
            main.style.transformOrigin = 'right center';
            main.style.top = wrapperTop - (mainHeight - wrapperHeight)/2 - offsetX;
            main.style.left = wrapperLeft - mainWidth - arrowWidth - offset;
            break;
        case 'right-center':
            main.style.transformOrigin = 'left center';
            main.style.top = wrapperTop - (mainHeight - wrapperHeight)/2;
            main.style.left = wrapperLeft + wrapperWidth + arrowWidth + offset;
            break;
        case 'top-left':
            main.style.transformOrigin = 'left bottom';
            main.style.left = wrapperLeft;
            main.style.top = wrapperTop - mainHeight - arrowHeight - offset;
            break;
        case 'top-right':
            main.style.transformOrigin = 'right bottom';
            main.style.left = wrapperLeft - (mainWidth - wrapperWidth);
            main.style.top = wrapperTop - mainHeight - arrowHeight - offset;
            break;
        case 'bottom-left':
            main.style.transformOrigin = 'left top';
            main.style.left = wrapperLeft;
            main.style.top = wrapperTop + wrapperHeight + arrowHeight + offset;
            break;
        case 'bottom-right':
            main.style.transformOrigin = 'right top';
            main.style.left = wrapperLeft - (mainWidth - wrapperWidth);
            main.style.top = wrapperTop + wrapperHeight + arrowHeight + offset;
            break;
        case 'left-top':
            main.style.transformOrigin = 'right top';
            main.style.top = wrapperTop;
            main.style.left = wrapperLeft - mainWidth - arrowWidth - offset;
            break;
        case 'right-top':
            main.style.transformOrigin = 'left top';
            main.style.top = wrapperTop;
            main.style.left = wrapperLeft + wrapperWidth + arrowWidth + offset;
            break;
        case 'left-bottom':
            main.style.transformOrigin = 'right bottom';
            main.style.top = wrapperTop - (mainHeight - wrapperHeight);
            main.style.left = wrapperLeft - mainWidth - arrowWidth - offset; 
            break;
        case 'right-bottom':
            main.style.transformOrigin = 'left bottom';
            main.style.top = wrapperTop - (mainHeight - wrapperHeight);
            main.style.left = wrapperLeft + wrapperWidth + arrowWidth + offset;
            break;
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            visible: nextProps.visible 
        }, () => this.props.onVisibleChange(this.state.visible));
    }

    componentDidUpdate(prevProps, prevState) {
        this.props.onVisibleChange(this.state.visible);   
    }

    handleOpen(main: HTMLElement){
        this.calcPosition(main);
    }

    beforeClose(dom: HTMLElement, closePortal: Function){
        Animate.zoom(dom.childNodes[0], false, () => {
            closePortal();
            this.setState({
                visible: false
            });
        });
    }

    render(){
        const { children, content, trigger, placement } = this.props;
        let onlyChild = Children.only(children);
        const { visible, contentPosition } = this.state;

        let eventListener = {};
        if(trigger === 'hover'){
            eventListener = {
                onMouseEnter: evt => {
                    this.transformOrigin = [ evt.pageX, evt.pageY ];
                    this.show();
                },
                onMouseLeave: this.hide    
            };
        }
        if(trigger === 'click'){
            eventListener = {
                onClick: () => this.toggle(!visible)
            };
        }
        if(trigger === 'focus'){
            eventListener = {
                onFocus: this.show,
                onBlur: this.hide
            };
        }
        onlyChild = cloneElement(onlyChild, {
            ...eventListener,
            ref: 'wrapper'
        });
        return (
            <span>
                {onlyChild}
                <Popover 
                    visible={visible} 
                    trigger={trigger} 
                    onOpen={this.handleOpen}
                    beforeClose={this.beforeClose}
                >
                    <Animate active={visible} effect="zoom">
                        <div className={this.classNames({
                            'cmr-tooltip': true,
                            [`cmr-tooltip-${placement}`]: true
                        })}>
                            <div className="cmr-tooltip-main">
                                <i className="cmr-tooltip-arrow" ref="arrow"/>
                                <div className="cmr-tooltip-content" ref="content">{content}</div>
                            </div>
                        </div>
                    </Animate>
                </Popover>
            </span>
        );
    }

}