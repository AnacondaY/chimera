import React from 'react';
import Block from '../../Block';
import Statement from '../../Statement';
import { Row, Col } from 'components/Grid';
import './demo.scss';

export default class DemoNumberInput extends React.PureComponent {
    
    render(){
        const locale= this.props.locale;
        return (
            <Statement locale={locale} componentName="NumberInput">
                <Row>
                    <Col xs={24} sm={24} md={24} lg={12}>
                        <Block locale={locale} componentName="NumberInput" documentName="basic" />
                        <Block locale={locale} componentName="NumberInput" documentName="disabled" />
                        <Block locale={locale} componentName="NumberInput" documentName="regulate"/>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={12}>
                        <Block locale={locale} componentName="NumberInput" documentName="size"/>
                        <Block locale={locale} componentName="NumberInput" documentName="formatter" />
                    </Col>
                </Row>
            </Statement>
        );
    }
}