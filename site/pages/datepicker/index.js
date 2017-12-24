import React from 'react';
import Block from '../../Block';
import Statement from '../../Statement';
import { Row, Col } from 'components/Grid';
import './demo.scss';

export default class DemoDatePicker extends React.PureComponent {

    render(){
        const locale = this.props.locale;
        return (
            <Statement locale={locale} componentName="DatePicker">
                <Row>
                    <Col xs={24} sm={24} md={24} lg={12}>
                        <Block locale={locale} componentName="DatePicker" documentName="basic" />   
                        <Block locale={locale} componentName="DatePicker" documentName="disabled"/> 
                        <Block locale={locale} componentName="DatePicker" documentName="size"/>
                        <Block locale={locale} componentName="DatePicker" documentName="mode" />
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={12}>
                        <Block locale={locale} componentName="DatePicker" documentName="range"/>
                        <Block locale={locale} componentName="DatePicker" documentName="formatter"/>
                        <Block locale={locale} componentName="DatePicker" documentName="disable" />
                    </Col>
                </Row>
            </Statement>
        );
    }
}