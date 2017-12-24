import React from 'react';
import { Row, Col } from 'components';
import Block from '../../Block';
import Statement from '../../Statement';
import './demo.scss';

export default class DemoSlider extends React.PureComponent {

    render(){
        const locale = this.props.locale;
        return (
            <div>
                <Statement locale={locale} componentName="Slider">
                    <Row>
                        <Col xs={24} sm={24} md={24} lg={12}>
                            <Block locale={locale} componentName="Slider" documentName="basic" />
                            <Block locale={locale} componentName="Slider" documentName="vertical" />
                            <Block locale={locale} componentName="Slider" documentName="template"/>
                        </Col>
                        <Col xs={24} sm={24} md={24} lg={12}>
                            <Block locale={locale} componentName="Slider" documentName="disabled"/>
                            <Block locale={locale} componentName="Slider" documentName="ticks"/>
                            <Block locale={locale} componentName="Slider" documentName="include"/>
                            <Block locale={locale} componentName="Slider" documentName="control" />
                        </Col>
                    </Row>            
                </Statement>
            </div>
        );
    }
}