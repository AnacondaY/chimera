import React, { cloneElement } from 'react';
import { unstable_renderSubtreeIntoContainer, unmountComponentAtNode } from 'react-dom';
import BaseComponent from '../../base/BaseComponent';
import PropTypes from '../../base/prop-types';
import { ESC } from '../../base/utils/keyCode';

const noop = () => {};
export default class Portal extends BaseComponent {

    static propTypes = {
        visible: PropTypes.bool,
        trigger: PropTypes.oneOf(['click', 'hover', 'focus']),
        escToClose: PropTypes.bool,
        outsideClickToClose: PropTypes.bool,
        triggerElement: PropTypes.element,
        onMount: PropTypes.func,
        onOpen: PropTypes.func,
        onClose: PropTypes.func
    }

    static defaultProps = {
        trigger: 'click',
        escToClose: false,
        outsideClickToClose: false,
        onMount:noop,
        onOpen:noop,
        onClose: noop
    }

    constructor(props: Object){
        super(props);
        this.state = {
            visible: false
        };
        this.portalInstance = null;
        this.node = null;
        this.handleClick = this.handleClick.bind(this);
        this.handleKeydown = this.handleKeydown.bind(this);
        this.openPortal = this.openPortal.bind(this);
        this.closePortal = this.closePortal.bind(this);
        this.resetPortal = this.resetPortal.bind(this);
        this.togglePortal = this.togglePortal.bind(this);
    }

    renderPortal(props){
        if(!this.node){
            this.node = document.createElement('div');
            document.body.appendChild(this.node);
        }
        let children = this.props.children;
        if(typeof children.type === 'function'){
            children = cloneElement(children, {
                closePortal: this.closePortal
            });
        }
        this.portalInstance = unstable_renderSubtreeIntoContainer(
            this,
            children,
            this.node,
            this.props.onMount
        );
    }

    resetPortal(){
        this.setState({
            visible: false
        }, () => {
            if(this.node){
                unmountComponentAtNode(this.node);
                document.body.removeChild(this.node);
            }
            this.node = null;
            this.portalInstance = null;
        });
    }

    openPortal(){
        this.setState({
            visible: true
        }, () => {
            this.renderPortal();
            this.props.onOpen(this.node);
        });
    }

    closePortal(){
        const { beforeClose, onClose } = this.props;    
        if(this.state.visible){
            if(typeof beforeClose === 'function'){
                beforeClose(this.node, this.resetPortal);
            }else{
                this.resetPortal();
            }
            onClose();
        }
    }

    togglePortal(){
        if(this.state.visible){
            this.closePortal();
        }else{
            this.openPortal();
        }
    }

    handleClick(evt: React.SyntheticEvent){
        if(!this.state.visible) return;
        if(this.node && !this.node.contains(evt.target) && evt.button === 0){
            this.closePortal();
        }
    }

    handleKeydown(evt: React.SyntheticEvent){
        if(this.state.visible && evt.which === ESC){
            this.closePortal();
        }
    }

    componentDidMount(){
        const { outsideClickToClose, escToClose, trigger, visible } = this.props;
        if(outsideClickToClose){
            document.addEventListener('click', this.handleClick, true);
        }   
        if(escToClose){
            document.addEventListener('keydown', this.handleKeydown, true);
        }
        if(visible){
            this.openPortal();
        }
    }

    componentWillReceiveProps(nextProps) {
        if(typeof nextProps.visible !== 'undefined'){
            if(nextProps.visible){
                if(this.state.visible){
                    this.renderPortal();
                }else{
                    this.openPortal();
                }
            }
            if(!nextProps.visible && this.state.visible){
                this.closePortal();
            }
        }   
    }

    shouldComponentUpdate(nextProps, nextState) {
        return nextState.visible !== this.state.visible;   
    }

    componentWillUnmount() {
        const { outsideClickToClose, escToClose } = this.props;
        if(outsideClickToClose){
            document.removeEventListener('click', this.handleClick);
        }    
        if(escToClose){
            document.removeEventListener('keypress', this.handleKeydown);
        }
        this.resetPortal();
    }
    
    render(){
        const { triggerElement, trigger } = this.props;
        const eventHanders = {};
        if(trigger === 'click'){
            eventHanders['onClick'] = this.togglePortal;
        }else if(trigger === 'hover'){
            eventHanders['onMouseEnter'] = this.openPortal;
        }else if(trigger === 'focus'){
            eventHanders['onFocus'] = this.openPortal;
        }
        if(triggerElement){
            return cloneElement(triggerElement, {
                ...eventHanders
            });
        }
        return null;
    }
}