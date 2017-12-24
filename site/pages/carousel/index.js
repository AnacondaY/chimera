import React from 'react';
import Block from '../../Block';
import Statement from '../../Statement';
import { Row, Col } from 'components';
import './demo.scss';

export default class DemoCarousel extends React.PureComponent {

    render(){
        const locale = this.props.locale;
        return (
            <Statement locale={locale} componentName="Carousel">
                <Row>
                    <Col xs={24} sm={24} md={24} lg={12}>
                        <Block locale={locale} componentName="Carousel" documentName="basic" />    
                        <Block locale={locale} componentName="Carousel" documentName="fade"/>  
                        <Block locale={locale} componentName="Carousel" documentName="interval"/>      
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={12}>
                        <Block locale={locale} componentName="Carousel" documentName="speed"/>    
                        <Block locale={locale} componentName="Carousel" documentName="manual"/>
                    </Col>
                </Row>                        
            </Statement>
        );
    }
}