import React, { PureComponent, Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default class BaseComponent extends (PureComponent || Component){
    
    static __PREFIX__ = 'cmr';

    static propTypes = {
        style: PropTypes.object,
        className: PropTypes.string
    }
    
    constructor(){
        super();
    }

    autoPrefix(...suffix){
        const prefix = BaseComponent.__PREFIX;
        return classNames.apply(this, suffix.map(sf => `${prefix}-${sf}`));
    }

    classNames(...cls): String{
        return classNames.apply(this, [this.props.className].concat(cls));
    }

    cx(...cls): String{
        return classNames(cls);
    }

    styles(stl: Object): Object{
        const { style } = this.props;
        return {
            ...stl,
            ...style
        };
    }
}