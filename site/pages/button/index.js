import React from 'react';
import { Row, Col } from 'components';
import Block from '../../Block';
import Statement from '../../Statement';
import './demo.scss';

export default class DemoButton extends React.PureComponent {

    render(){
        const locale = this.props.locale;
        return (
            <Statement locale={locale} componentName="Button">
                <Row>
                    <Col span={12}>
                        <Block locale={locale} componentName="Button" documentName="basic" />
                        <Block locale={locale} componentName="Button" documentName="disabled" />                                                                       
                        <Block locale={locale} componentName="Button" documentName="size"/>
                        <Block locale={locale} componentName="Button" documentName="group" /> 
                    </Col>
                    <Col span={12}>
                        <Block locale={locale} componentName="Button" documentName="icon" />
                        <Block locale={locale} componentName="Button" documentName="loading" />
                        <Block locale={locale} componentName="Button" documentName="link"/>
                    </Col>
                </Row>
            </Statement>
        );
    }
}