import React, { cloneElement, Children } from 'react';
import { findDOMNode } from 'react-dom';
import PropTypes from '../../base/prop-types';
import BaseComponent from '../../base/BaseComponent';
import Popover from '../_Popover';
import Animate from '../_Animate';
import { getOffset } from '../../base/utils/dom';

const noop = () => {};

export default class Dropdown extends BaseComponent {

    static propTypes = {
        trigger: PropTypes.oneOf(['click', 'hover']),
        onVisibleChange: PropTypes.func,
        placement: PropTypes.oneOf([
            'bottom-left',
            'bottom-center',
            'bottom-right',
            'top-left',
            'top-center',
            'top-right'
        ])
    }

    static defaultProps = {
        trigger: 'click',
        placement: 'bottom-left',
        visible: false,
        onVisibleChange: noop,
        onItemClick: noop
    }

    constructor(props){
        super(props);
        this.state = {
            visible: false,
            hovered: false
        };
        this.toggle = this.toggle.bind(this);
        this.show = this.show.bind(this);
        this.hide = this.hide.bind(this);
        this.handleOpen = this.handleOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleMouseLeave = this.handleMouseLeave.bind(this);
        this.handleMenuEnter = this.handleMenuEnter.bind(this);
        this.handleMenuLeave = this.handleMenuLeave.bind(this);
        this.beforeClose = this.beforeClose.bind(this);
    }

    show(){
        this.setState({
            visible: true
        }, () => this.props.onVisibleChange(true));
    }

    hide(){
        this.setState({
            visible: false
        }, () => {
            this.props.onVisibleChange(false);
        });
    }

    handleOpen(node: HTMLElement){     
        //const trigger = findDOMNode(this.refs.trigger);  
        const menuNode = node.childNodes[0];
        const { offsetLeft, offsetTop, offsetHeight: triggerHeight, offsetWidth: triggerWidth } = getOffset(this.trigger);            
        const { offsetWidth: menuWidth, offsetHeight: menuHeight } = menuNode;
        switch(this.props.placement){
        case 'bottom-left':
            menuNode.style.left = offsetLeft;
            menuNode.style.top = triggerHeight + offsetTop;
            menuNode.style.marginTop = 6;
            break;
        case 'bottom-center':
            menuNode.style.left = (triggerWidth - menuWidth)/2 + offsetLeft;
            menuNode.style.marginTop = 6;
            menuNode.style.top = triggerHeight + offsetTop;
            break;
        case 'bottom-right':
            menuNode.style.left = triggerWidth - menuWidth + offsetLeft;
            menuNode.style.marginTop = 6;
            menuNode.style.top = triggerHeight + offsetTop;
            break;
        case 'top-left':
            menuNode.style.left = offsetLeft;
            menuNode.style.top = offsetTop;
            menuNode.style.marginBottom = 6;            
            break;
        case 'top-center':
            menuNode.style.left = (triggerWidth - menuWidth)/2 + offsetLeft;
            menuNode.style.top = offsetTop - menuHeight;
            menuNode.style.marginBottom = 6;            
            break;
        case 'top-right':
            menuNode.style.left = triggerWidth - menuWidth + offsetLeft;
            menuNode.style.top = offsetTop - menuHeight;
            menuNode.style.marginBottom = 6;            
            break;
        }
    }

    handleMouseLeave(){
        const timer = setTimeout(() => {
            if(!this.state.hovered){
                this.hide();
            }
            clearTimeout(timer);
        }, 300);      
    }

    handleMenuEnter(){
        this.setState({
            hovered: true
        });
    }

    handleMenuLeave(){
        this.setState({
            hovered: false
        }, this.hide);
    }

    handleClose(){
        this.setState({
            visible: false
        });
    }

    beforeClose(node: HTMLElement, closePortal: Function){
        Animate.collapse(node.childNodes[0], false, () => {
            closePortal();
            this.setState({
                visible: false
            });
        });
    }

    toggle(){
        this.setState(({ visible }) => {
            return {
                visible: !visible
            };
        });
    }

    componentDidMount() {
        this.trigger = findDOMNode(this.refs.trigger);
        const offsetObj = getOffset(this.refs.trigger);
        //cache
        Object.keys(offsetObj).keys(key => this[key] = offsetObj[key]);
    }

    render(){
        const { children, placement, trigger, menu } = this.props;
        const visible = this.state.visible;
        const eventHandlers = {};
        const menuHandlers = {};
        if(trigger === 'click'){
            eventHandlers['onClick'] = this.toggle.bind(this);
        }else if(trigger === 'hover'){
            eventHandlers['onMouseEnter'] = this.show;
            eventHandlers['onMouseLeave'] = this.handleMouseLeave;
            menuHandlers['onMouseEnter'] = this.handleMenuEnter;
            menuHandlers['onMouseLeave'] = this.handleMenuLeave;
        }
        return (
            <div className="cmr-dropdown">
                <div className="cmr-dropdown-trigger" ref="trigger">
                    {cloneElement(Children.only(children), {
                        ...eventHandlers
                    })}
                </div>
                <Popover 
                    onClose={this.handleClose} 
                    onOpen={this.handleOpen}
                    visible={visible} 
                    escToClose 
                    outsideClickToClose
                    beforeClose={this.beforeClose}
                >
                    <Animate active={visible} effect="collapse">
                        {cloneElement(menu, {
                            ...menu.props,
                            ref: 'menu',
                            placement,
                            onItemClick: this.hide,
                            ...menuHandlers
                        })}
                    </Animate>
                </Popover>
            </div>
        );
    }

}