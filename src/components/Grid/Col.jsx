import React, { createElement } from 'react';
import PropTypes from '../../base/prop-types';
import BaseComponent from '../../base/BaseComponent';

const config = {
    span: PropTypes.rangeOf([0, 24]),
    offset: PropTypes.rangeOf([0, 24]),
    push: PropTypes.rangeOf([0, 24]),
    pull: PropTypes.rangeOf([0, 24])
};

const responseType = PropTypes.oneOfType([PropTypes.rangeOf([0, 24]), PropTypes.shape(config)]);

export default class Col extends BaseComponent {

    static propTypes = {
        ...config,
        xs: responseType,
        sm: responseType,
        md: responseType,
        lg: responseType,
        tagName: PropTypes.string
    }

    static defaultProps = {
        tagName: 'div',
        offset:0,
        pull:0,
        push:0
    }

    render(){
        const { span, offset, pull, push, tagName, children } = this.props;
        const classNames = ['span', 'offset', 'push', 'pull'].map(prop => {
            return prop === 'span' ? this.props[prop] !== undefined ? `cmr-col-${this.props[prop]}` : '' : `cmr-col-${prop}-${this.props[prop]}`;
        });
        ['xs', 'sm', 'md', 'lg'].forEach(size => {
            const prop = this.props[size];
            if(Object.prototype.toString.call(prop) === '[object Object]'){
                Object.keys(prop).forEach(key => {
                    if(key === 'span'){
                        classNames.push(`cmr-col-${size}-${prop[key]}`);
                    }else{
                        classNames.push(`cmr-col-${size}-${key}-${prop[key]}`);
                    }
                });
            }
            if(typeof prop === 'number'){
                classNames.push(`cmr-col-${size}-${prop}`);
            }
        });
        return createElement(tagName, {
            className: this.classNames('cmr-col', classNames),
            style: this.styles()
        }, children);
    }

}