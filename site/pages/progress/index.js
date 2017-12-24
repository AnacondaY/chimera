import React from 'react';
import { Row, Col } from 'components';
import Block from '../../Block';
import Statement from '../../Statement';
import './demo.scss';

export default class DemoProgress extends React.PureComponent {

    render(){
        const locale = this.props.locale;
        return (
            <Statement locale={locale} componentName="Progress">
                <Row>
                    <Col xs={24} sm={24} md={24} lg={12}>
                        <Block locale={locale} componentName="Progress" documentName="basic" />
                        <Block locale={locale} componentName="Progress" documentName="outside"/>
                        <Block locale={locale} componentName="Progress" documentName="circle" />
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={12}>
                        <Block locale={locale} componentName="Progress" documentName="size"/>
                        <Block locale={locale} componentName="Progress" documentName="template" />
                    </Col>
                </Row>            
            </Statement>
        );
    }
}