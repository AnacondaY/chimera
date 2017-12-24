import React from 'react';
import Block from '../../Block';
import Statement from '../../Statement';
import { Row, Col } from 'components/Grid';
import './deom.scss';

export default class DemoMessage extends React.PureComponent {

    render(){
        const locale = this.props.locale;
        return (
            <Statement locale={locale} componentName="Message">
                <Row>
                    <Col xs={24} sm={24} md={24} lg={12}>
                        <Block locale={locale} componentName="Message" documentName="basic" />
                        <Block locale={locale} componentName="Message" documentName="offset"/>
                        <Block locale={locale} componentName="Message" documentName="config" />
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={12}>
                        <Block locale={locale} componentName="Message" documentName="type" />    
                        <Block locale={locale} componentName="Message" documentName="duration"/>               
                    </Col>
                </Row>
            </Statement>
        );
    }
}