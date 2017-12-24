import React from 'react';
import BaseComponent from '../../base/BaseComponent';

export default class Item extends BaseComponent{

    render(){
        const { active, children } = this.props;
        return (
            <div className={this.classNames({
                'cmr-carousel-item': true,
                'cmr-carousel-item-active': active
            })} style={this.styles()}>
                {children}
            </div>
        );
    }

}