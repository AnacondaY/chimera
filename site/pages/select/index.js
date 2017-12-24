import React from 'react';
import { Row, Col } from 'components';
import Block from '../../Block';
import Statement from '../../Statement';
import './demo.scss';

export default class DemoSelect extends React.PureComponent {

    render(){
        const locale = this.props.locale;
        return (
            <Statement locale={locale} componentName="Select">
                <Row>
                    <Col xs={24} sm={24} md={24} lg={12}>
                        <Block locale={locale} componentName="Select" documentName="basic" />
                        <Block locale={locale} componentName="Select" documentName="size"/>
                        <Block locale={locale} componentName="Select" documentName="group" />
                        <Block locale={locale} componentName="Select" documentName="filter"/>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={12}>
                        <Block locale={locale} componentName="Select" documentName="disabled" />
                        <Block locale={locale} componentName="Select" documentName="template" />
                        <Block locale={locale} componentName="Select" documentName="multiple" />
                        <Block locale={locale} componentName="Select" documentName="remote"/>
                    </Col>
                </Row>            
            </Statement>
        );
    }
}