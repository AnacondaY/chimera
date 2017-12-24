import React from 'react';
import Block from '../../Block';
import Statement from '../../Statement';
import { Col, Row } from 'components';

export default class DemoRadio extends React.PureComponent {
    
    render(){
        const locale = this.props.locale;
        return (
            <Statement locale={locale} componentName="Radio">
                <Row>
                    <Col xs={24} sm={24} md={24} lg={12}>
                        <Block locale={locale} componentName="Radio" documentName="basic" />
                        <Block locale={locale} componentName="Radio" documentName="group"/>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={12}>
                        <Block locale={locale} componentName="Radio" documentName="disabled" />
                        <Block locale={locale} componentName="Radio" documentName="button"/>
                    </Col>
                </Row>
            </Statement>
        );
    }
}