import React from 'react';
import { Col, Row } from 'components';
import Block from '../../Block';
import Statement from '../../Statement';

export default class DemoCheckbox extends React.PureComponent {

    render(){
        const locale = this.props.locale;
        return (
            <Statement locale={locale} componentName="Checkbox">
                <Row>
                    <Col xs={24} sm={24} md={24} lg={12}>
                        <Block locale={locale} componentName="Checkbox" documentName="basic" /> 
                        <Block locale={locale} componentName="Checkbox" documentName="control"/>
                        <Block locale={locale} componentName="Checkbox" documentName="indeterminate"/>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={12}>
                        <Block locale={locale} componentName="Checkbox" documentName="disabled" /> 
                        <Block locale={locale} componentName="Checkbox" documentName="group" />
                    </Col>
                </Row>   
            </Statement>
        );
    }
}