import React from 'react';
import Block from '../../Block';
import Statement from '../../Statement';
import './demo.scss';

export default class DemoSteps extends React.PureComponent {

    render(){
        const locale = this.props.locale;
        return (
            <Statement locale={locale} componentName="Steps">
                <Block locale={locale} componentName="Steps" documentName="basic" />    
                <Block locale={locale} componentName="Steps" documentName="icon" />  
                <Block locale={locale} componentName="Steps" documentName="vertical" />  
                <Block locale={locale} componentName="Steps" documentName="status"/> 
                <Block locale={locale} componentName="Steps" documentName="control" />
            </Statement>
        );
    }
}