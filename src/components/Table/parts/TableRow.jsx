import React from 'react';
import BaseComponent from '../../../base/BaseComponent';
import PropTypes from '../../../base/prop-types';

export default class TableRow extends BaseComponent {
    render(){
        const { children } = this.props;
        return (
            <tr className={this.classNames('cmr-table-row', {

            })}>
                {children}
            </tr>
        );
    }
}