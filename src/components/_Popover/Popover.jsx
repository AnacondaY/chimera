import React from 'react';
import { findDOMNode } from 'react-dom';
import BaseComponent from '../../base/BaseComponent';
import PropTypes from '../../base/prop-types';
import Portal from './Portal';
import { ESC } from '../../base/utils/keyCode';

const noop = () => {};
export default class Popover extends BaseComponent {

    static propTypes = {
        visible: PropTypes.bool,
        outsideClickToclosePortal:PropTypes.bool,
        escToclosePortal: PropTypes.bool,
        onVisibleChange: PropTypes.func,
        mountNode: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
        onMount: PropTypes.func,
    }

    static defaultProps = {
        visible: false,
        outsideClickToclosePortal: true,
        escToclosePortal: true,
        onVisibleChange: noop,
        onMount: noop
    }

    constructor(props: Object){
        super(props);
        this.state = {
            visible: props.visible
        };
        this.openPortal = this.openPortal.bind(this);
        this.closePortal = this.closePortal.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    openPortal(){
        if(this.state.visible){
            return;
        }
        this.setState({
            visible: true
        }, () => this.props.onVisibleChange(true));
    }

    closePortal(){
        if(!this.state.visible){
            return;
        }
        this.setState({
            visible: false
        }, () => this.props.onVisibleChange(false));
    }

    handleClick(evt: React.SyntheticEvent){
        if(!this.state.visible){
            return;
        }
        if(this.node && this.node.contains(evt.target) && evt.button === 0){
            this.closePortal();
        }
    }

    handleKeyPress(evt: React.SyntheticEvent){
        if(this.state.visible && evt.which === ESC){
            this.closePortal();
        }
    }

    componentDidMount() {
        document.addEventListener('click', this.handleClick, true);
        document.addEventListener('keypress', this.handleKeyPress, true);
        this.props.onMount(this.node);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            visible: nextProps.visible
        }, () => this.props.onVisibleChange(nextProps.visible));   
    }

    componentDidUpdate(prevProps, prevState) {
        this.props.onMount(this.node);    
    }
    
    componentWillUnmount() {
        document.removeEventListener('click', this.handleClick);
        document.removeEventListener('keypress', this.handleKeyPress);
    }

    wrapWithPortal(){
        !this.state.visible ? null : (
            <Portal>

            </Portal>
        );   
    }
    
    render(){
        const { children, className, style, mountNode } = this.props;
        return this.state.visible && (
            <Portal
                className={className}
                style={style}
                onMount={node => this.node = node}
                mountNode={mountNode}
            >
                {children}
            </Portal>
        );
    }

}