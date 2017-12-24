import React from 'react';
import BaseComponent from '../../../base/BaseComponent';
import TableCell from './TableCell';
import { headerPropTypes, contextTypes } from '../define';
import ColGroup from './ColGroup';
import Animate from '../../_Animate';

export default class TableHeader extends BaseComponent {

    static contextTypes = contextTypes

    handleRowHover(rowKey: String){
        if(this.props.hoverHighlight){
            this.context.hub.updateHoveredRowKey(rowKey);
        }
    }

    handleRowLeave(){
        this.context.hub.updateHoveredRowKey(null);
    }

    handleScroll(evt: React.SyntheticEvent){
        if(!this.props.fixed){
            const scrollTop = evt.target.scrollTop;
            if(typeof this.props.onMainScroll === 'function'){
                this.props.onMainScroll(scrollTop);        
            }        
        }
    }

    render(){
        const { fixed, expandedRowRender, summaryRender, summaryText, striped } = this.props;
        const { state: { data, expandedRows, hoveredRowKey }, isExpanded, isExpandedTable, props: {cmrLocale} } = this.context.hub;
        const { leftFixedFlatColumns, rightFixedFlatColumns, flatColumns, bodyWidth, summaryRow } = this.context.display;
        
        let columns = flatColumns;
        return (
            <div className="cmr-table-body-wrapper" onScroll={this.handleScroll.bind(this)}>
                <table className="cmr-table-body">
                    <ColGroup />
                    <tbody>
                        {!data.length ?
                            <tr className="cmr-table-row">
                                <td colSpan={columns.length} className="cmr-table-body-cell cmr-table-body-cell-none">{cmrLocale.noRecord}</td>
                            </tr>
                        : data.map((row, i) => {
                            row.key = `cmr-table-row-${i}`;
                            return [(
                                <tr className={this.classNames({
                                    'cmr-table-row': true,
                                    'cmr-table-row-highlight': row.key === hoveredRowKey,
                                    [i % 2 ? 'cmr-table-row-even' : 'cmr-table-row-odd']: striped
                                })} 
                                    key={row.key} 
                                    onMouseEnter={this.handleRowHover.bind(this, row.key)}
                                    onMouseLeave={this.handleRowLeave.bind(this)}
                                >
                                    {columns.map((col, j) => {
                                        return (
                                            <TableCell 
                                                rowIndex={i} 
                                                colIndex={j} 
                                                row={row} 
                                                col={col} 
                                                key={`cmr-table-body-cell-${String(i)}-${String(j)}`}
                                                {...this.props}    
                                            />
                                        );
                                    })}
                                </tr>
                            ), isExpanded(row.key) && (
                                <tr className="cmr-table-row cmr-table-row-expanded" key={`cmr-table-row-expanded-${i}`}>
                                    <td className="cmr-table-body-cell"/>
                                    <td className="cmr-table-body-cell" colSpan={flatColumns.length - 1}>
                                        {expandedRowRender(row)}
                                    </td>
                                </tr>
                            )];
                        })}
                        { summaryRender && 
                            <tr className="cmr-table-row cmr-table-row-summary" key={'cmr-table-row-summary'}>
                                {summaryRow.map((value, i) => {
                                    return (
                                        <TableCell
                                            value={i ? value: summaryText || cmrLocale.summaryText}
                                            col={{}}
                                            key={`cmr-table-body-cell-${String(data.length)}-${String(i)}`}
                                        />
                                    );
                                })}
                            </tr>
                        }
                    </tbody>
                </table>
            </div>
        );
    }

}