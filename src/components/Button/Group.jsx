import React, { Children, cloneElement } from 'react';
import BaseComponent from '../../base/BaseComponent';
import PropTypes from '../../base/prop-types';

export default class Group extends BaseComponent{

    static propTypes = {
        size: PropTypes.oneOf(['small', 'middle', 'large'])
    }

    static defaultProps = {
        size: 'middle'
    }

    get buttonCount(){
        return Children.count(this.props.children);
    }

    getButtonClass(index: Number, type: String, size: String): String{
        let extraClass = '';
        const baseClass = 'cmr-button';
        if(this.buttonCount > 1){
            if(index === 0){
                extraClass = `${baseClass}-first`;
            }else if(index === this.buttonCount - 1){
                extraClass = `${baseClass}-last`;
            }else{
                extraClass = `${baseClass}-continuous`;
            }
        }
        const typeClass = `${baseClass}-${type}`;
        const sizeClass = `${baseClass}-${size}`;
        return this.classNames(baseClass, typeClass, extraClass, sizeClass);
    }

    render(){
        const { size, children } = this.props;
        return (
            <div className="cmr-button-group" style={this.styles()}>
                {Children.map(children, (child, i) => {

                    return cloneElement(child, {
                        ...child.props,
                        className: this.getButtonClass(i, child.props.type, child.props.size)
                    });
                })}
            </div>
        );
    }
}