import React from 'react';
import Block from '../../Block';
import Statement from '../../Statement';
import { Row, Col } from 'components';
import './demo.scss';

export default class DemoDropdown extends React.PureComponent {

    render(){
        const locale = this.props.locale;
        return (
            <Statement locale={locale} componentName="Dropdown">
                <Row>
                    <Col xs={24} sm={24} md={12} lg={12}>
                        <Block locale={locale} componentName="Dropdown" documentName="basic" /> 
                        <Block locale={locale} componentName="Dropdown" documentName="placement" />   
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={12}>
                        <Block locale={locale} componentName="Dropdown" documentName="trigger"/>
                        <Block locale={locale} componentName="Dropdown" documentName="button" />
                    </Col>
                </Row>    
            </Statement>
        );
    }
}