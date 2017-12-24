import React from 'react';
import { findDOMNode } from 'react-dom';
import PropTypes from '../../base/BaseComponent';
import Portal from './Portal';

export default class PortalWidthState extends React.Component {

    static propTypes = {
        children: PropTypes.func.isRequired,
        defaultOpen: PropTypes.bool,
        node: PropTypes.any,
        openByClickOn: PropTypes.element,
        closeOnEsc: PropTypes.bool,
        closeOnOutsideClick: PropTypes.bool,
        onOpen: PropTypes.func,
        onClose: PropTypes.func
    }

    static defaultProps = {
        onOpen: () => {},
        onClose: () => {}
    }

    constructor(props: Object){
        super(props);
        this.node = null;
        this.state = {
            active: props.visible
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleKeypress = this.handleKeypress.bind(this);
        this.wrapWithPortal = this.wrapWithPortal.bind(this);
    }

    handleClick(){

    }

    handleKeypress(){

    }

    openPortal(){

    }

    closePortal(){
        
    }

    componentDidMount() {
        document.addEventListener('click');
    }

    componentWillUnmount() {
        
    }
    
    wrapWithPortal(children: any){
        if(!this.state.active) return;
        return (
            <Portal
                onMount={node => this.node.bind(this)}
            >
                {children}
            </Portal>
        );
    }

    render(){
        const { openPortal, closePortal, wrapWithPortal } = this;
        return this.props.children({
            openPortal,
            closePortal,
            wrapWithPortal,
            visible: this.state.active
        });
    }

}