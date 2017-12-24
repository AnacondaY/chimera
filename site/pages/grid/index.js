import React from 'react';
import { Row, Col } from 'components';
import Block from '../../Block';
import Statement from '../../Statement';
import './demo.scss';

export default class DemoGrid extends React.PureComponent {

    render(){
        const locale = this.props.locale;
        return (
            <Statement locale={locale} componentName="Grid">
                <Block locale={locale} componentName="Grid" documentName="basic" />
                <Block locale={locale} componentName="Grid" documentName="gap"/>
                <Block locale={locale} componentName="Grid" documentName="offset" />
                <Block locale={locale} componentName="Grid" documentName="control" />
                <Block locale={locale} componentName="Grid" documentName="response" />                    
            </Statement>
        );
    }
}