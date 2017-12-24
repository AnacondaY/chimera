import React from 'react';
import BaseComponent from '../../../base/BaseComponent';
import PropTypes from '../../../base/prop-types';
import { cellPropTypes, contextTypes } from '../define';
import Checkbox from '../../Checkbox';
import ExpandedIcon from './ExpandIcon';

export default class TableCell extends BaseComponent {
    
    static propTypes = cellPropTypes;

    static contextTypes = contextTypes

    get cellClass(){
        const {rowIndex, colIndex, value, cellClass} = this.props;
        if(!cellClass){
            return false;
        }
        if(typeof cellClass !== 'function'){
            return cellClass;
        }
        return cellClass(value, rowIndex, colIndex);
    }

    get cellStyle(){
        const {rowIndex, colIndex, value, cellStyle} = this.props;
        if(!cellStyle){
            return {};
        }
        if(typeof cellClass !== 'function'){
            return cellStyle;
        }
        return cellStyle(value, rowIndex, colIndex);
    }

    expand(row){
        this.context.hub.updateExpandation(row);
    }

    renderCell(){
        let { rowIndex, colIndex, row, col, value, fixed } = this.props;        
        if(typeof value !== 'undefined'){
            return value;
        }
        const { isExpandedTable } = this.context.hub;
        const { selectable, key, index, expandable, render } = col;
        value = row[key];
        if(index){
            return rowIndex + 1;
        }else if(selectable){
            return (
                <Checkbox 
                    checked={this.context.hub.isSelected(row)} 
                    onChange={checked => this.context.hub.updateSelection(checked, row)} 
                />
            );
        }else if(expandable){
            return <ExpandedIcon onCollapse={this.expand.bind(this, row)} />;
        }
        if(typeof render === 'function'){
            return render(row, col, rowIndex, colIndex);
        }
        return value;
    }

    render(){
        const { selectable, expandable } = this.props.col;
        return (
            <td className={this.classNames('cmr-table-body-cell', this.cellClass ? this.cellClass : '', {
                'cmr-table-body-cell-selectable': selectable,
                'cmr-table-body-cell-expandable': expandable
            })} style={this.cellStyle}>
                <div className="cmr-table-body-cell-value">{this.renderCell()}</div>
            </td>
        );
    }
}