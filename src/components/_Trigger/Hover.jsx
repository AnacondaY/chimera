import React, { cloneElement, Children } from 'react';
import BaseComponent from '../../base/BaseComponent';

export default class Hover extends BaseComponent {

    constructor(props: Object){
        super(props);
        this.state = {
            hovered: false
        };
        this.handleTriggerEnter = this.handleTriggerEnter.bind(this);
        this.handleTriggerLeave = this.handleTriggerLeave.bind(this);
        this.handleMenuEnter = this.handleMenuEnter.bind(this);
        this.handleMenuLeave = this.handleMenuLeave.bind(this);
    }

    handleTriggerEnter(){
        this.props.open();
    }

    handleTriggerLeave(){
        const timer = setTimeout(() => {
            if(!this.state.hovered){
                this.props.close();
            }
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
        }, this.props.close);
    }

    componentDidMount() {
        const { menu, open, close } = this.props;
        if(menu){
            menu.addEventListener('mouseenter', this.handleMenuEnter);
            menu.addEventListener('mouseleave', this.handleMenuLeave);
        }
    }    

    render(){
        const { children } = this.props;
        const onlyChild = Children.only(children);
        return cloneElement(onlyChild, {
            ...onlyChild.props,
            onMouseEnter: this.handleTriggerEnter,
            onMouseLeave: this.handleTriggerLeave
        });
    }

}