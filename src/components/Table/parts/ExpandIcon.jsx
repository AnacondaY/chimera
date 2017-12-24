import React from 'react';
import PropTypes from '../../../base/prop-types';
import BaseComponent from '../../../base/BaseComponent';
import Icon from '../../Icon';

export default class ExpandIcon extends BaseComponent{

    constructor(props: Object){
        super(props);
        this.state = {
            expanded: props.expanded
        };
    }

    toggle(){
        this.setState(({expanded}) => {
            return {
                expanded: !expanded
            };
        }, () => {
            this.props.onCollapse(this.state.expanded);
        });
    }

    render(){
        return (
            <span className="cmr-table-expand-icon" onClick={this.toggle.bind(this)}>
                {this.state.expanded ? <Icon type="minus"/> : <Icon type="plus"/>}
            </span>
        );
    }

}

ExpandIcon.propTypes = {
    expanded: PropTypes.bool,
    onCollapse: PropTypes.func
};

ExpandIcon.defaultProps = {
    expanded: false,
    onCollapse(){}
};