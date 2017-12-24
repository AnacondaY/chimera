import React, { Children } from 'react';
import PropTypes from '../../base/prop-types';
import BaseComponent from '../../base/BaseComponent';

export default class LocaleProvider extends BaseComponent {

    static propTypes = {
        locale: PropTypes.object.isRequired
    }

    static childContextTypes = {
        cmrLocale: PropTypes.object
    }

    getChildContext(){
        return {
            cmrLocale: {
                ...this.props.locale
            }
        };
    }

    render(){
        return Children.only(this.props.children);
    }

} 
