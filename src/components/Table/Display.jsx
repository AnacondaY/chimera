import React from 'react';
import { findDOMNode } from 'react-dom';
import BaseComponent from '../../base/BaseComponent';
import PropTypes from '../../base/prop-types';
import Table from './Table';

const keys = [
    'hasLeftFixedColumns', 
    'hasRightFixedColumns', 
    'leftFixedColumns', 
    'rightFixedColumns',
    'leftFixedFlatColumns',
    'rightFixedFlatColumns'
];

export default class Display extends BaseComponent {

    static childContextTypes = {
        display: PropTypes.object
    }

    getChildContext(){
        return {
            display: this.state
        };
    }

    constructor(props: Object){
        super(props);
        const flatColumns = this.flatColumns(props.columns);
        this.state = {
            ...this.update(props),
            flatColumns,
            summaryRow: this.summaryRow(flatColumns, props)
        };
    }

    update(props: Object): Object{
        const ret = {};
        keys.forEach(key => {
            ret[key] = this[key].call(this, props.columns);
        });
        return ret;
    }
    
    hasLeftFixedColumns(columns: Array){
        return columns.some(col => col.fixed === true || col.fixed === 'left');
    }

    hasRightFixedColumns(columns: Array){
        return columns.some(col => col.fixed === 'right');
    }

    leftFixedColumns(columns: Array){
        return columns.filter(col => col.fixed === true || col.fixed === 'left');
    }

    rightFixedColumns(columns: Array){
        return columns.filter(col => col.fixed === 'right');
    }

    leftFixedFlatColumns(columns: Array){
        columns = columns.filter(col => col.fixed === true || col.fixed === 'left');
        return this.flatColumns(columns);
    }

    rightFixedFlatColumns(columns: Array){
        columns = columns.filter(col => col.fixed === 'right');        
        return this.flatColumns(columns);
    }

    flatColumns(columns: Array, flatColumns: Array = []): Object[]{
        columns.forEach(col => {
            if(col.children && col.children.length){
                this.flatColumns(col.children, flatColumns);
            }else{
                flatColumns.push(col);
            }
        });
        return flatColumns;
    }

    calcBodyWidth(flatColumns: Array): Number{
        return flatColumns.reduce((prev, cur) => prev + cur.width, 0);
    }

    flexColumnsWidth(){
        let bodyWidth;
        const flatColumns = this.state.flatColumns;
        const hasSomeColumnsWithoutWidth = flatColumns.some(col => typeof col.width !== 'number');
        if(hasSomeColumnsWithoutWidth){
            const tableNode: HTMLTableElement = findDOMNode(this.refs.table);
            const tableWidth = tableNode.offsetWidth;
            const columnsWidthoutWidth = flatColumns.filter(col => typeof col.width !== 'number');
            const currentTotalWidth = flatColumns.reduce((prevWidth, cur) => {
                if(typeof cur.width === 'number'){
                    return prevWidth + cur.width;
                }
                return prevWidth;
            }, 0);
            const fitWidth = (tableWidth - currentTotalWidth)/columnsWidthoutWidth.length;
            const fitFlatColumns = flatColumns.map(col => {
                col.width = col.width || fitWidth;
                return col;
            });
            const bodyWidth = this.calcBodyWidth(fitFlatColumns);
            this.setState({
                flatColumns: fitFlatColumns,
                bodyWidth
            });
        }else{
            const bodyWidth = this.calcBodyWidth(flatColumns);
            this.setState({
                bodyWidth
            });
        }
    }

    summaryRow(flatColumns:Array, props: Object): Array{
        const { data, summaryRender } = props;
        if(typeof summaryRender === 'function' && Array.isArray(summaryRender(data, flatColumns))){
            return summaryRender(data, flatColumns);
        }
        const totalRow = [];
        for(let i = 0; i < flatColumns.length; i ++){
            let total = 0;
            const valueKey = flatColumns[i]['key'];
            for(let j = 0; j < data.length; j ++){
                let value = data[j][valueKey];
                if(typeof value === 'number'){
                    total += value;
                }else{
                    total = '';
                    break;
                }  
            }
            totalRow.push(total);
        }
        return totalRow;
    }

    componentWillReceiveProps(nextProps) {
        this.setState(this.update(nextProps.hub));
    }

    componentDidMount() {
        this.flexColumnsWidth();   
    }

    componentDidUpdate(prevProps, prevState) {
        this.flexColumnsWidth();   
    }
    
    render(){
        return <Table ref="table" {...this.props} display={this.state} />;
    }

}