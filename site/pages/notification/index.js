import React from 'react';
import Block from '../../Block';
import Statement from '../../Statement';
import { Row, Col } from 'components/Grid';
import './demo.scss';

export default class DemoNotification extends React.PureComponent {  
    render(){
        const locale = this.props.locale;
        return (
            <Statement locale={locale} componentName="Notification">
                <Row>
                    <Col xs={24} sm={24} md={24} lg={12}>
                        <Block locale={locale} componentName="Notification" documentName="basic" />
                        <Block locale={locale} componentName="Notification" documentName="offset" />
                        <Block locale={locale} componentName="Notification" documentName="duration"/>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={12}>
                        <Block locale={locale} componentName="Notification" documentName="type" />     
                        <Block locale={locale} componentName="Notification" documentName="config"/>           
                    </Col>
                </Row>
            </Statement>
        );
    }
}