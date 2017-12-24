import React from 'react';
import { monotonicFactory } from 'ulid';
import PropTypes from '../../base/prop-types';
import BaseComponent from '../../base/BaseComponent';

export default class Item extends BaseComponent {

    static __NAVIGATION_ITEM__ = true

    

    static propTypes = {
        mark: PropTypes.string,
        active: PropTypes.bool,
        disabled: PropTypes.bool,
        onItemClick: PropTypes.func,
        onItemSelect: PropTypes.func
    }

    static get defaultProps(){
        const ulid = monotonicFactory();
        return {
            active: false,
            disabled: false,
            mark: ulid(150000),
            onItemSelect(){}
        };
    }

    handleClick(){
        const { onItemClick, disabled, mark, onItemSelect } = this.props;
        if(disabled) return;
        onItemClick(mark, onItemSelect);
    }

    render(){
        const { disabled, children, activeMark, mark } = this.props;
        return (
            <li className={this.classNames({
                'cmr-navigation-item': true,
                'cmr-navigation-item-active': activeMark === mark,
                'cmr-navigation-item-disabled': disabled
            })} onClick={() => this.handleClick()}>{children}</li>
        );
    }

}