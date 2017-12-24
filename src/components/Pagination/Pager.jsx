import React from 'react';
import PropTypes from '../../base/prop-types';
import BaseComponent from '../../base/BaseComponent';

export default class Pager extends BaseComponent {

    static propTypes = {
        page: PropTypes.number,
        active: PropTypes.bool,
        disabled: PropTypes.bool,
        onItemClick: PropTypes.func
    }

    static defaultProps = {
        active: false
    }

    handleClick(){
        if(this.props.disabled) return; 
        this.props.onItemClick();
    }

    render(){
        const { active, children, onItemClick, page, disabled } = this.props;
        return (
            <li className={this.classNames({
                'cmr-pagination-pager': true,
                'cmr-pagination-pager-active': active,
                'cmr-pagination-pager-disabled': disabled
            })} onClick={() => onItemClick(page)}>
                {children}
            </li>
        );
    }

}