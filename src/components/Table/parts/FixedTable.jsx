import React from 'react';
import BaseComponent from '../../../base/BaseComponent';
import PropTypes from '../../../base/prop-types';
import TableHeader from './TableHeader';
import TableBody from './TableBody';

export default class FixedTable extends BaseComponent{

    static defaultProps = {
        placement: true
    }

    render(){
        let { placement, fixedColumns, fixedData } = this.props;
        const width = fixedColumns.reduce((prev, cur) => {
            return (prev.width || 0) + cur.width;
        }, 0);
        if(placement === true || placement === 'left'){
            placement = 'left';
        }
        return (
            <div className={this.classNames({
                'cmr-table': true,
                'cmr-table-fixed': true,
                [`cmr-table-fixed-${placement}`]: true
            })} style={{
                width
            }}>
                <TableHeader columns={fixedColumns}/>
                <TableBody columns={fixedColumns} data={fixedData} />
            </div>
        );
    }

}