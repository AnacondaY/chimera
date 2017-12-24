import React from 'react';
import Block from '../../Block';
import Statement from '../../Statement';
import './demo.scss';

export default class DemoCarousel extends React.PureComponent {

    render(){
        const locale = this.props.locale;
        return (
            <Statement locale={locale} componentName="Collapse">
                <Block locale={locale} componentName="Collapse" documentName="basic" />    
                <Block locale={locale} componentName="Collapse" documentName="only"/>
                <Block locale={locale} componentName="Collapse" documentName="disabled"/>   
                <Block locale={locale} componentName="Collapse" documentName="customize"/>  
                <Block locale={locale} componentName="Collapse" documentName="simple"/>                              
            </Statement>
        );
    }
}