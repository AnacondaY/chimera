import React from 'react';
import BaseComponent from '../../base/BaseComponent';
import PropTypes from '../../base/prop-types';

export default class Badge extends BaseComponent {

    static propTypes = {
        number: PropTypes.number,
        dot: PropTypes.bool,
        blink: PropTypes.bool,
        maximum: PropTypes.number,
        showZero: PropTypes.bool,
        maxTemplate: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
        type: PropTypes.oneOf(['primary', 'default', 'error', 'warning', 'success', 'info'])
    }

    static defaultProps = {
        dot: false,
        blink: false,
        maximum: 99,
        showZero: false,
        type: 'error',
    }

    renderNumber(): React.ReactNode{
        const { number, maximum, maxTemplate, showZero } = this.props;
        if(number <= maximum){
            return number;
        }else{
            if(maxTemplate){
                if(typeof maxTemplate === 'function'){
                    return maxTemplate(number, maximum);
                }else{
                    return maxTemplate;
                }
            }
            return `${maximum}+`;
        }
    }

    render(){
        const { number, maximum, showZero, maxTemplate, dot, type, blink, children } = this.props;
        const symbolNode = (
            <span className={this.classNames({
                'cmr-badge-symbol': true,
                'cmr-badge-symbol-dot': dot,
                'cmr-badge-symbol-blink': dot && blink
            })}>
                {!dot && this.renderNumber()}
            </span>
        );
        return (
            <span className={this.classNames({
                'cmr-badge': true,
                [`cmr-badge-${type}`]: true
            })}>
                {children}
                { number === 0 ? ( showZero ? symbolNode : null) : symbolNode  }
            </span>
        );
    }

}