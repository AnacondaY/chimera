import React, { cloneElement, Children } from 'react';
import { findDOMNode } from 'react-dom';
import { monotonicFactory } from 'ulid';
import Animate from '../_Animate';
import PropTypes from '../../base/prop-types';
import BaseComponent from '../../base/BaseComponent';
import Icon from '../Icon';
import Popover from '../_Popover';
import { getOffset } from '../../base/utils/dom';

function Menu(props: Object){
    const { children, onItemClick, activeMark, closePortal, trigger } = props;
    const eventHandles = {};
    if(trigger === 'hover'){
        eventHandles['onMouseLeave'] = closePortal;
    }
    return (
        <ul className="cmr-navigation-menu" {...eventHandles}>
            {Children.map(children, (child, i) => {
                return cloneElement(child, {
                    ...child.props,
                    onItemClick,
                    activeMark
                });
            })}
        </ul>
    );
}

export default class Subnav extends BaseComponent {

    static __NAVIGATION_SUBNAV__ = true

    static propTypes = {
        mark: PropTypes.string,
        opened: PropTypes.bool,
        disabled: PropTypes.bool,
        title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
        trigger: PropTypes.oneOf(['click', 'hover']),
        activeMark: PropTypes.string,
        isVertical: PropTypes.bool,
        onItemClick: PropTypes.func,
        handleOpen: PropTypes.func,
        handleClose: PropTypes.func,
        onMenuOpen: PropTypes.func,
        onMenuClose: PropTypes.func
    }

    static get defaultProps(){
        const ulid = monotonicFactory();
        return {
            opened: false,
            disabled: false,
            trigger: 'hover',
            mark: ulid(150000),
            onMenuOpen(){},
            onMenuClose(){}
        };
    }

    constructor(props: Object){
        super(props);
        this.state = {
            hovered: false
        };
    }

    handleOpen(node: HTMLDivElement){
        const { offsetTop, offsetLeft, offsetHeight } = getOffset(this.refs.subnav);
        this.menuLeft = offsetLeft;
        this.menuTop = offsetTop + offsetHeight;
        node.style.left = this.menuLeft;
        node.style.top = this.menuTop;
        node.style.position = 'absolute';
    }

    handleItemClick(mark: String, onItemSelect: Function){
        const { onItemClick, handleClose, isVertical, onMenuClose } = this.props;
        onItemClick(mark, onItemSelect);
        if(!isVertical){
            handleClose(mark, onMenuClose);
        }
    }

    handleMouseLeave(){
        const { handleClose, mark } = this.props;
        const timer = setTimeout(() => {
            if(!this.state.hovered){
                handleClose(mark);
            }
            clearTimeout(timer);
        }, 350);
    }

    handleMenuEnter(){
        this.setState({
            hovered: true
        });
    }

    handleMenuLeave(){
        const { handleClose, mark } = this.props;
        this.setState({
            hovered: false
        }, () => {
            const timer = setTimeout(() => {
                clearTimeout(timer);
                handleClose(mark);
            }, 350);
        });
    }

    beforeClose(node: HTMLElement, closePortal: Function){
        const { handleClose, mark, onMenuClose } = this.props;
        Animate.collapse(node.childNodes[0], false, () => {
            closePortal();
            handleClose(mark, onMenuClose);
        });
    }

    render(){
        const { disabled, opened, title, children, trigger, handleClose, 
            handleOpen, mark, activeMark, isVertical, onItemClick, onMenuOpen, onMenuClose 
        } = this.props;      
        const eventHandler = {};
        const menuHandler = {};
        if(!disabled){
            if(!isVertical){
                if(trigger === 'hover'){
                    eventHandler.onMouseEnter = () => handleOpen(mark, onMenuOpen);  
                    eventHandler.onMouseLeave = this.handleMouseLeave.bind(this);
                    menuHandler.onMouseEnter = this.handleMenuEnter.bind(this);
                    menuHandler.onMouseLeave = this.handleMenuLeave.bind(this);
                }else if(trigger === 'click'){
                    eventHandler.onClick = () => {
                        if(opened){
                            handleClose(mark, onMenuClose);
                        }else{
                            handleOpen(mark, onMenuOpen);
                        }
                    };
                }
            }else{
                eventHandler.onClick = opened ? () => handleClose(mark, onMenuClose) : () => handleOpen(mark, onMenuOpen);
            }
        } 
        const marks = [];
        Children.forEach(this.props.children, child => {
            const { type, props: { mark } } = child;
            if(type.__NAVIGATION_ITEM__){
                marks.push(mark);
            }else if(type.__NAVIGATION_ITEMGROUP__){
                Children.forEach(child, c => {
                    if(c.type.__NAVIGATION_ITEM__){
                        marks.push(c.props.mark);
                    }
                });
            }
        });
        const menu = (
            <ul className="cmr-navigation-menu" ref="menu" {...menuHandler}>
                {Children.map(children, (child, i) => {
                    return cloneElement(child, {
                        ...child.props,
                        onItemClick: this.handleItemClick.bind(this),
                        activeMark
                    });
                })}
            </ul>
        );     
        return (
            <li className={this.classNames({
                'cmr-navigation-subnav': true,
                'cmr-navigation-subnav-open': opened,
                'cmr-navigation-subnav-active': marks.indexOf(activeMark) !== -1,
                'cmr-navigation-subnav-disabled': disabled
            })}
                {...eventHandler}
                ref="subnav"
            >
                <div className="cmr-navigation-subnav-title">
                    {title}
                    <span className={this.cx({
                        'cmr-navigation-arrow': true,
                        'cmr-navigation-arrow-active': opened
                    })}>
                        <Icon type="arrow-down" />
                    </span>
                </div>
                {isVertical ? 
                    <Animate initial={false} active={opened} effect="collapse">
                        {menu}
                    </Animate>: 
                    <Popover 
                        visible={opened} 
                        escToClose 
                        outsideClickToClose 
                        onOpen={this.handleOpen.bind(this)}
                        beforeClose={this.beforeClose.bind(this)}
                    >
                        <Animate active={opened} effect="collapse">
                            {menu}
                        </Animate>
                    </Popover>
                }
            </li>
        );
    }

}