import React from 'react';
import Block from '../../Block';
import Statement from '../../Statement';
import './demo.scss';

export default class DemoPanel extends React.PureComponent {
    
    render(){
        const locale = this.props.locale;
        return (
            <Statement locale={locale} componentName="Panel">
                <Block locale={locale} componentName="Panel" documentName="basic" />
                <Block locale={locale} componentName="Panel" documentName="append" />
                <Block locale={locale} componentName="Panel" documentName="footer" />
                <Block locale={locale} componentName="Panel" documentName="image" />
            </Statement>
        );
    }
}