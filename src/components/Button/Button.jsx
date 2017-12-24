import React from 'react';
import PropTypes from 'prop-types';
import BaseComponent from '../../base/BaseComponent';
import Icon from '../Icon';

export default class Button extends BaseComponent {

    static propTypes = {
        type: PropTypes.oneOf(['success', 'error', 'info', 'warning', 'primary', 'default']),
        size: PropTypes.oneOfType(['large', 'middle', 'small']),
        icon: PropTypes.string,
        loading: PropTypes.bool,
        htmlType: PropTypes.oneOf(['submit', 'reset', 'button']),
        disabled: PropTypes.bool,
        link: PropTypes.bool
    }

    static defaultProps = {
        type: 'default',
        size: 'middle',
        loading: false,
        htmlType: 'button',
        disabled: false,
        link: false
    }
    
    render(){
        const { children, type, size, icon, loading, htmlType, disabled, link, ...rest } = this.props;
        return (
            <button className={this.classNames({
                'cmr-button': true,
                [`cmr-button-${type}`]:true,
                [`cmr-button-${size}`]:true,
                'cmr-button-link': link,
                'cmr-button-loading': loading,
                'cmr-button-disabled': disabled
            })} type={htmlType}
                style={this.styles()}
                {...rest}
            >
                {loading && <Icon type="loading"/>}
                {icon && !loading && <Icon type={icon} />}
                <span>{children}</span>
            </button>
        );

    }

}