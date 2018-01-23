import React from 'react';
import { findDOMNode } from 'react-dom';
import BaseComponent from '../../base/BaseComponent';
import PropTypes from '../../base/prop-types';
import TableHeader from './parts/TableHeader';
import TableBody from './parts/TableBody';
import BasicTable from './parts/BasicTable';
import Hub from './Hub';
import Display from './Display';
import { contextTypes } from './define';

export default class Table extends BaseComponent{

    static contextTypes = contextTypes;

    handleResizeEnd(){
        this.forceUpdate(() => {
            typeof this.props.onResizeEnd === 'function' && this.props.onResizeEnd();
        });
    }

    saveTableBody(wrapperName: String){
        return table => {
            const tableNode: HTMLTableElement = findDOMNode(table);
            if(tableNode){
                this[wrapperName] = tableNode.getElementsByTagName('table')[1].parentNode;
            }
        };
    }

    componentWillReceiveProps(nextProps) {
        if(Array.isArray(nextProps.columns) && this.props.columns !== nextProps.columns){
            this.context.hub.updateColumns(nextProps.columns);
        }    
    }

    handleMainScroll(scrollTop: Number){
        if(this.leftBodyWrapper){ 
            this.leftBodyWrapper.scrollTop = scrollTop;
        }
        if(this.rightBodyWrapper){
            this.rightBodyWrapper.scrollTop = scrollTop;
        }
    }
    
    render(){
        const { bordered, striped } = this.props;
        const { 
            hasLeftFixedColumns, 
            hasRightFixedColumns, 
            leftFixedFlatColumns, 
            rightFixedFlatColumns } = this.context.display;
        const { data, columns } = this.context.hub.state;
        return (
            <div className={this.classNames('cmr-table', {
                'cmr-table-bordered': bordered,
                'cmr-table-striped': striped
            })} style={this.styles()} ref="table">
                <BasicTable 
                    columns={columns} 
                    data={data} 
                    onMainScroll={this.handleMainScroll.bind(this)}
                    {...this.props}  
                />
                {hasLeftFixedColumns && 
                    <BasicTable 
                        data={data} 
                        columns={columns} 
                        fixedColumns={leftFixedFlatColumns} 
                        fixed="left" 
                        ref={this.saveTableBody('leftBodyWrapper')}
                        {...this.props} 
                /> }
                {hasRightFixedColumns && 
                    <BasicTable 
                        data={data} 
                        columns={columns} 
                        fixedColumns={rightFixedFlatColumns} 
                        fixed="right" 
                        ref={this.saveTableBody('rightBodyWrapper')}
                        {...this.props} 
                /> }
            </div>
        );
    }
}
