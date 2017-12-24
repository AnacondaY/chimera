import React from 'react';
import BaseComponent from '../../../base/BaseComponent';
import ColGroup from './ColGroup';
import { columnDescriptor, columnDefaultProps, contextTypes } from '../define';
import { Drag } from '../../_DnD';
import { getOffset } from '../../../base/utils/dom';
import Checkbox from '../../Checkbox';
import SortIcon from './SortIcon';
import FilterMenu from './FilterMenu';
import Animate from '../../_Animate';
import Icon from '../../Icon';

export default class TableHeader extends BaseComponent {

    static propTypes = columnDescriptor;
    
    static contextTypes = contextTypes;

    constructor(props: Object){
        super(props);
        this.state = {
            draggerStyle: {},
            canDrag: false
        };
        this.cells = [];        
    }

    handleMouseDown(column: Object, evt: React.SyntheticEvent): void{
        this.resizeColumn = column;
        this.start = evt.pageX;
    }

    handleMove(x: Number, y: Number): void{
        this.setState({
            draggerStyle: {
                left: x,
                visibility: 'visible'
            }
        });
    }

    handleMouseUp(evt: React.SyntheticEvent){
        this.setState({
            draggerStyle: {
                visibility: 'hidden'
            }   
        }, () => {
            this.resizeColumn.width += evt.pageX - this.start;
            this.context.hub.updateColumns(this.props.columns);
        });
    }

    getHeaderRows(columns: Array, rows: Array = [], index: Number = 0): Object[][]{
        const currentRow = rows[index] || [];
        columns.forEach(col => {
            currentRow.push(col);
            if(col.children && col.children.length){
                rows[index] = currentRow;
                this.getHeaderRows(col.children, rows, index + 1);
            }
        });
        rows[index] = currentRow;
        return rows;
    }

    renderLabel(column: Object, rowIndex: Number, colIndex: Number): React.ReactNode{
        const { index, selectable, sortable, filterableList, filterable, filterIcon, label } = column;
        if(index){
            return label || this.context.hub.props.cmrLocale.indexLabel;
        }else if(selectable){
            return (
                <Checkbox 
                    checked={this.context.hub.isAllSelected} 
                    onChange={this.context.hub.toggleAllSelection}
                />
            );
        }
        return (
            <span>
                { label }
                { sortable &&  
                    <SortIcon
                        onAscend={() => this.context.hub.toggleSortation(column, true)}
                        onDescend={() => this.context.hub.toggleSortation(column, false)}
                    />
                }
                { filterable &&  
                    <FilterMenu filterableList={filterableList} column={column}>
                        <span className={this.classNames({
                            'cmr-table-filter-icon': true,
                            'cmr-table-filter-icon-active': this.context.hub.state.filterValues.length
                        })}>
                            <Icon type="filter"/>
                        </span>
                    </FilterMenu>
                }
            </span>
        );
    }

    saveCell(cell: HTMLElement, length: Number): void{
        if(this.cells.length < length && cell){
            this.cells.push(cell);
        }        
    }

    componentDidMount() {
        const { offsetLeft, offsetWidth } = getOffset(this.refs.header);
        this.tableLeft = offsetLeft;  
        this.tableWidth = offsetWidth; 
        this.cells = this.cells.slice(0, 4);
        this.forceUpdate();
    }
    
    render(){
        const { columns, bordered, resizable } = this.props;
        const rows = this.getHeaderRows(columns);
        const scrollerWidth = this.context.hub.state.scrollerWidth;
        return (
            <div className="cmr-table-header-wrapper" ref="header">
                <table className="cmr-table-header">
                    <ColGroup/>
                    <thead>
                        {rows.map((row, rowIndex) => {
                            return (
                                <tr key={`cmr-table-header-row-${rowIndex}`}>
                                    {row.map((cell, cellIndex) => {
                                        return (
                                            <th className={this.classNames({
                                                'cmr-table-header-cell': true,
                                                'cmr-table-header-cell-selectable': cell.selectable 
                                            })} key={`cmr-table-header-${rowIndex}-${cellIndex}`} 
                                                colSpan={cell.colSpan} 
                                                rowSpan={cell.rowSpan}    
                                                ref={cell => this.saveCell(cell, row.length)}
                                            >
                                                <div className="cmr-table-header-cell-label">{this.renderLabel(cell, rowIndex, cellIndex)}</div>
                                                { bordered && resizable && cellIndex < row.length - 1 && (
                                                    <Drag onMove={this.handleMove.bind(this)} 
                                                        compensationX={this.tableLeft} 
                                                        onMouseUp={this.handleMouseUp.bind(this)} 
                                                        onMouseDown={evt => this.handleMouseDown(cell, evt)}
                                                        minX={this.cells[cellIndex] ? this.cells[cellIndex].offsetLeft + 28 : 0}
                                                        maxX={this.tableWidth}
                                                        horizontal
                                                    >
                                                        <div className="cmr-table-header-cell-resize"/>
                                                    </Drag>)
                                                }
                                            </th>
                                        );
                                    })}
                                </tr>
                            );
                        })}
                    </thead>
                </table>
                <div className="cmr-table-dragger" style={this.state.draggerStyle} />
            </div>
        );
    }

}