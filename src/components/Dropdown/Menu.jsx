import React, { Children, cloneElement } from 'react';
import PropTypes from '../../base/prop-types';
import BaseComponent from '../../base/BaseComponent';

export default class Menu extends BaseComponent{
    render(){
        const { placement, children, onItemClick, onMouseEnter, onMouseLeave } = this.props;
        return (
            <ul className={this.classNames({
                'cmr-dropdown-menu': true,
                'cmr-dropdown-menu-top': placement.indexOf('top') != -1
            })} 
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                style={this.styles()}
            >
                {Children.map(children, (c, i) => {
                    return cloneElement(c, {
                        key: `cmr-dropdown-menu-item-${i}`,
                        onItemClick
                    });
                })}
            </ul>
        );
    }
}

Menu.propTypes = {
    style: PropTypes.object
};
