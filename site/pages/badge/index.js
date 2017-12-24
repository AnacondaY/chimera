import React from 'react';
import Block from '../../Block';
import Statement from '../../Statement';
import { Row, Col } from 'components';
import './demo.scss';

export default class DemoBadge extends React.PureComponent {

    render(){
        const locale= this.props.locale;
        return (
            <Statement locale={locale} componentName="Badge">
                <Row>
                    <Col xs={24} sm={24} md={12} lg={12}>
                        <Block locale={locale} componentName="Badge" documentName="basic" />
                        <Block locale={locale} componentName="Badge" documentName="dot"/>
                        <Block locale={locale} componentName="Badge" documentName="template" />
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={12}>
                        <Block locale={locale} componentName="Badge" documentName="type"/>
                        <Block locale={locale} componentName="Badge" documentName="blink"/>
                    </Col>
                </Row>
            </Statement>
        );
    }
}