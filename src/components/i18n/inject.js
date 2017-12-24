import React from 'react';
import BaseComponent from '../../base/BaseComponent';
import PropTypes from '../../base/prop-types';

export default (componentType: String, defaultLocale: Object = {}) => (WrappedComponent: React.ReactElement) => {

    return class extends BaseComponent {
        
        static contextTypes = {
            cmrLocale:PropTypes.object
        }

        get locale(){
            const cmrLocale = this.context.cmrLocale;
            const localeFormCtx = cmrLocale && cmrLocale[componentType];
            const localeFromProps = this.props.locale;
            return {
                ...defaultLocale,
                ...localeFormCtx,
                ...localeFromProps
            };
        }

        render(){
            return <WrappedComponent {...this.props} cmrLocale={this.locale} />;
        }

    };

};