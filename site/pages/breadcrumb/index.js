import React from 'react';
import Block from '../../Block';
import Statement from '../../Statement';

export default class DemoBreadcrumb extends React.PureComponent {

    render(){
        return (
            <div>
                <Statement componentName="Breadcrumb">
                    <Block componentName="Breadcrumb" documentName="basic" />                    
                    <Block componentName="Breadcrumb" documentName="jsx"/>
                    <Block componentName="Breadcrumb" documentName="separator"/>
                </Statement>
            </div>
        );
    }
}