import React, { Children, cloneElement } from 'react';
import BaseComponent from '../../base/BaseComponent';
import PropTypes from '../../base/prop-types';

const noop = () => {};

export default class Drop extends BaseComponent {

    constructor(props: Object){
        super(props);
        this.handleDragLeave = this.handleDragLeave.bind(this);
        this.handleDragOver = this.handleDragOver.bind(this);
        this.handleDrop = this.handleDrop.bind(this);
    }

    handleDragOver(evt: React.SyntheticEvent): void{
        evt.preventDefault();
        this.props.onDragOver(evt);
    }

    handleDragLeave(evt: React.SyntheticEvent): void{
        evt.preventDefault();
        this.props.onDragLeave(evt);
    }

    handleDrop(evt: React.SyntheticEvent): void{
        evt.preventDefault();
        evt.persist();
        this.props.onDrop(evt.dataTransfer.files);
    }

    render(){
        return cloneElement(Children.only(this.props.children), {
            onDrop: this.handleDrop,
            onDragOver: this.handleDragOver,
            onDragLeave: this.handleDragLeave
        });
    }

}

Drop.propTypes = {
    onDragOver: PropTypes.func,
    onDragLeave: PropTypes.func,
    onDrop: PropTypes.func
};

Drop.defaultProps = {
    onDragOver: noop,
    onDragLeave: noop,
    onDrop: noop
};