import React from 'react';
import { Row, Col } from 'components';
import Block from '../../Block';
import Statement from '../../Statement';
import './demo.scss';

export default class DemoInput extends React.PureComponent {

    render(){
        const locale = this.props.locale;
        return (
            <Statement locale={locale} componentName="Input">
                <Row>
                    <Col xs={24} sm={24} md={24} lg={12}>
                        <Block locale={locale} componentName="Input" documentName="basic" />
                        <Block locale={locale} componentName="Input" documentName="addon"/>
                        <Block locale={locale} componentName="Input" documentName="disabled" />
                        <Block locale={locale} componentName="Input" documentName="size"/>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={12}>
                        <Block locale={locale} componentName="Input" documentName="icon" />
                        <Block locale={locale} componentName="Input" documentName="textarea" />
                        <Block locale={locale} componentName="Input" documentName="cleanable"/>
                    </Col>
                </Row>            
            </Statement>
        );
    }
}