import React from 'react';
import BaseComponent from '../../base/BaseComponent';
import PropTypes from '../../base/prop-types';

export default class Sider extends BaseComponent {

    static __LAYOUT_SIDER__ = true

    static propTypes = {
        width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        collapsible: PropTypes.bool,
        collapsed: PropTypes.bool,
        onCollapse: PropTypes.func
    }

    static defaultProps = {
        width: 200,
        collapsed: false
    }

    componentWillReceiveProps(nextProps) {
        if(this.props.collapsed !== nextProps.collapsed){
            nextProps.onCollapse(nextProps.collapsed);
        }
    }

    render(){
        const { width, children, collapsed, collapsible } = this.props;
        return (
            <div className={this.classNames('cmr-layout-sider')} style={this.styles({
                width: !collapsed ? width : 0 
            })}>{children}</div>
        );
    }

}