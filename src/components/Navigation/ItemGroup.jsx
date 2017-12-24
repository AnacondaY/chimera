import React,{ Children, cloneElement } from 'react';
import PropTypes from '../../base/prop-types';
import BaseComponent from '../../base/BaseComponent';

export default class ItemGroup extends BaseComponent {

    static __NAVIGATION_ITEMGROUP__ = true

    static propTypes = {
        title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
        mark: PropTypes.string,
        activeMark: PropTypes.string,
        onItemClick: PropTypes.func
    }

    render(){
        let { title, children, mark, activeMark, onItemClick } = this.props;
        return (
            <li className="cmr-navigation-item-group">
                <div className="cmr-navigation-item-group-title">{title}</div>
                <ul className="cmr-navigation-item-group-list">
                    {Children.map(children, (child, i) => {
                        if(child.type.__NAVIGATION_ITEM__){
                            return cloneElement(child, {
                                ...child.props,
                                activeMark,
                                onItemClick
                            });
                        }
                    })}
                </ul>
            </li>
        );
    }

}