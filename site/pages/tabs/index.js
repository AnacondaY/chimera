import React from 'react';
import Block from '../../Block';
import Statement from '../../Statement';
import './demo.scss';

export default class DemoTabs extends React.PureComponent {

    render(){
        const locale = this.props.locale;
        return (
            <Statement locale={locale} componentName="Tabs">
                <Block locale={locale} componentName="Tabs" documentName="basic" />  
                <Block locale={locale} componentName="Tabs" documentName="vertical" />  
                <Block locale={locale} componentName="Tabs" documentName="disabled" />
                <Block locale={locale} componentName="Tabs" documentName="card"/>
                <Block locale={locale} componentName="Tabs" documentName="dynamic"/>
            </Statement>
        );
    }
}