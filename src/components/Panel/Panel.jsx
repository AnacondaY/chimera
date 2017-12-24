import React from 'react';
import PropTypes from 'prop-types';
import BaseComponent from '../../base/BaseComponent';

export default class Panel extends BaseComponent{

    static propTypes = {
        append: PropTypes.node,
        footer: PropTypes.node,
        title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
        full: PropTypes.bool,
        showHeader: PropTypes.bool
    }

    static defaultProps = {
        full: false,
        showHeader: true
    }

    render(){
        const { title, children, append, footer, showHeader, full } = this.props;
        return (
            <div className={this.classNames({
                'cmr-panel':true,
                'cmr-panel-full': full
            })} style={this.styles()}>
                {showHeader && 
                    <div className="cmr-panel-header">
                        <h3 className="cmr-panel-title">{title}</h3>
                        {append && <div className="cmr-panel-append">{append}</div>}
                    </div>
                }
                <div className="cmr-panel-body">
                    {children}
                </div>
                {footer && <div className="cmr-panel-footer">{footer}</div>}
            </div>
        );
    }

}