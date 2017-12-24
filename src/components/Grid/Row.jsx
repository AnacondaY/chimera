import React, { createElement, cloneElement, Children } from 'react';
import PropTypes from '../../base/prop-types';
import BaseComponent from '../../base/BaseComponent';

export default class Row extends BaseComponent {

    static propTypes = {
        gap: PropTypes.number,
        tagName: PropTypes.string
    }

    static defaultProps = {
        gap: 16,
        tagName: 'div'
    }

    render(){
        const { tagName, gap, children, style } = this.props;
        const styledChildren = Children.map(children, child => {
            return cloneElement(child, {
                style: {
                    paddingLeft: gap/2,
                    paddingRight: gap/2,
                    ...child.props.style
                }
            });
        });
        return createElement(tagName, {
            style:{
                marginLeft: -gap/2,
                marginRight: -gap/2,
                ...style
            },
            className: this.classNames('cmr-row')
        }, styledChildren);
    }

}