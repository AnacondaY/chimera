import React from 'react';
import Block from '../../Block';
import Statement from '../../Statement';
import './demo.scss';

export default class DemoTable extends React.PureComponent {
    
    render(){
        return (
            <Statement componentName="Table">
                <Block componentName="Table" documentName="basic" />
                <Block componentName="Table" documentName="bordered"/>
                <Block componentName="Table" documentName="striped"/>
                <Block componentName="Table" documentName="render" />
                <Block componentName="Table" documentName="index" />
                <Block componentName="Table" documentName="selectable" />
                <Block componentName="Table" documentName="sortable" />
                <Block componentName="Table" documentName="sorter" />
                <Block componentName="Table" documentName="filterable" />
                <Block componentName="Table" documentName="filter"/>
                <Block componentName="Table" documentName="expandable"/>
                <Block componentName="Table" documentName="complex" />
                <Block componentName="Table" documentName="remote"/>
                <Block componentName="Table" documentName="summary"/>
                <Block componentName="Table" documentName="summaryRender"/>
            </Statement>
        );
    }
}