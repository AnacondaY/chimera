import React, { Children, cloneElement } from 'react';
import BaseComponent from '../../base/BaseComponent';
import { contextTypes, tableProps, defaultTableProps } from './define';
import { monotonicFactory } from 'ulid';
import Display from './Display';

const ulid = monotonicFactory(10000000);

export default class Hub extends BaseComponent{

    static propTypes = tableProps

    static defaultProps = defaultTableProps

    static childContextTypes = contextTypes

    getChildContext(){
        return {
            hub: this
        };
    }

    constructor(props: Object){
        super(props);
        const columns = this.getColumns(props);
        this.state = {
            columns: this.groupColumns(columns),
            data:props.data,
            selectedRows: [],
            expandedRows: [],
            filterValues: [],
            scrollerWidth: 0
        };
        this.allChecked = false;
        this.updateColumns = this.updateColumns.bind(this);
        this.toggleAllSelection = this.toggleAllSelection.bind(this);
        this.updateSelection = this.updateSelection.bind(this);
        this.isExpanded = this.isExpanded.bind(this);
        this.updateScrollerWidth = this.updateScrollerWidth.bind(this);
        this.originData = props.data.slice();
    }

    getColumns(props: Object){
        const columns = props.columns;
        if(typeof props.expandedRowRender === 'function'){
            columns.unshift({
                width:48,
                expandable: true
            });
        }
        return columns;
    }

    get isAllSelected(): Boolean{
        const { selectedRows, data } = this.state;
        return selectedRows.length === data.length;
    }

    get isExpandedTable(): Boolean{
        return typeof this.props.expandedRowRender === 'function'; 
    }

    isSelected(row: Object): Boolean{
        return this.state.selectedRows.indexOf(row) !== -1;
    }

    isExpanded(rowKey: String): Boolean{
        return this.state.expandedRows.some(row => row.key === rowKey);
    }

    groupColumns(columns: Array, parentColumn: Object = {}, currentIndex: Number = 0, rows: Array = []){
        rows[currentIndex] = rows[currentIndex] || [];
        const newColumns = [];
        columns.forEach(col => {
            const newCol = col;
            rows[currentIndex].push(newCol);
            parentColumn.colSpan = parentColumn.colSpan || 0;           
            if(newCol.children && newCol.children.length){
                newCol.children = this.groupColumns(newCol.children, newCol, currentIndex+1, rows);
                parentColumn.colSpan += newCol.colSpan;
            }else{
                parentColumn.colSpan += 1;
            }
            rows[currentIndex].forEach(c => {
                if(c.children && c.children.length){
                    c.rowSpan = 1;
                }else{
                    c.rowSpan = rows.length - currentIndex;
                }
            });
            newColumns.push(newCol);
        });
        return newColumns;
    }

    updateColumns(columns: Array){
        this.setState({
            columns: columns.splice()
        });
    }

    toggleAllSelection(checked: Boolean){
        this.setState(prevState => {
            const data = prevState.data;
            if(checked){
                return {
                    selectedRows: [].concat(data)
                };
            }else{
                return {
                    selectedRows: []
                };
            }
        });
    }

    updateSelection(checked: Boolean, row: Object){
        this.setState(prevState => {
            const selectedRows = prevState.selectedRows;
            if(checked){
                selectedRows.push(row);
            }else{
                const index = selectedRows.indexOf(row);        
                selectedRows.splice(index, 1);
            }
            return {
                selectedRows: [].concat(selectedRows)
            };
        });
    }

    toggleSortation(column: Object, isAscend: Boolean){
        this.setState(prevState => {
            if(typeof isAscend !== 'undefined'){
                const dataCopy = [].concat(prevState.data);
                const indicator = isAscend ? 1 : -1;
                if(typeof column.sorter === 'function'){
                    return {
                        data: dataCopy.sort((value1, value2) => column.sorter(value1, value2, isAscend))
                    };
                }else{
                    return {
                        data: dataCopy.sort((row1, row2) => {
                            const valueKey = column['key'];
                            const value1 = row1[valueKey];
                            const value2 = row2[valueKey];
                            if(value1 > value2){
                                return indicator;
                            }else if(value1 < value2){
                                return -indicator;
                            }else{
                                return 0;
                            }
                        })
                    };
                }
            }
        });
    }

    updateFilteration(filterValues: Array, column: Object){
        const { filter, key } = column;
        this.setState(prevState => {
            let filteredData;
            if(typeof filter === 'function'){
                filteredData = this.originData.filter((row, i) => {
                    return filter(filterValues, row);
                });                
            }else{
                if(filterValues.length){
                    filteredData = this.originData.filter((row, i) => {
                        return filterValues.indexOf(row[key]) !== -1;
                    });
                }else{
                    filteredData = this.originData.slice();
                }
            }
            return {
                data: filteredData,
                filterValues
            };
        });
    }

    updateHoveredRowKey(rowKey: String){
        this.setState({
            hoveredRowKey: rowKey
        });
    }

    updateExpandation(row: Object){
        this.setState(({expandedRows}) => {
            const index = expandedRows.indexOf(row);
            if(index === -1){
                expandedRows.push(row);
            }else{
                expandedRows.splice(index, 1);
            }
            expandedRows = expandedRows.slice();
            return {
                expandedRows
            };
        });
    }

    updateScrollerWidth(width: Number){
        this.setState({
            scrollerWidth: width
        });
    }

    componentWillReceiveProps(nextProps) {
        const columns = this.getColumns(nextProps);
        this.setState({
            columns: this.groupColumns(columns),
            data:nextProps.data,
            selectedRows: [],
            expandedRows: [],
            filterValues: [],
            scrollerWidth: 0
        });
    }

    render(){
        return <Display hub={this.state} {...this.props} />;
    }

}