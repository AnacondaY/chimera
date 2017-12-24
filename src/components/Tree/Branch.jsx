import React from 'react';
import PropTypes from '../../base/prop-types';
import Icon from '../Icon';

export default function(props: Object){
    const { children, label, collapsed } = props;
    return (
        <div className="cmr-tree-branch">
            <span className="cmr-tree-branch-expander cmr-tree-branch-expander-collapsed">
                <Icon type="caret-down"/>
            </span>
            <span className="cmr-tree-branch-label">{label}</span>
            { children &&  <div className="cmr-tree-branch-content">{children}</div> }
        </div>
    );
}