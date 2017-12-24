import React from 'react';
import PropTypes from 'prop-types';
import BaseComponent from '../../base/BaseComponent';

export default class Pane extends BaseComponent{
    
    static __TABS_PANE__ = true

    static propTypes = {
        label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
        disabled: PropTypes.bool,
        closable: PropTypes.bool,
        active: PropTypes.bool
    }

    static defaultProps = {
        disabled: false,
        closable: false,
        active: false
    }

    constructor(props: Object){
        super(props);
        this.state = {
            active: props.active
        };
    }

    render(){
        const { active, disabled, closable, children } = this.props;
        return (
            <div className={this.classNames('cmr-tabs-pane', {
                'cmr-tabs-pane-active': active
            })}>{children}</div>
        );
    }
}