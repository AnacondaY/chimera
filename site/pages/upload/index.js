import React from 'react';
import { Row, Col } from 'components';
import Block from '../../Block';
import Statement from '../../Statement';
import './demo.scss';

export default class DemoUpload extends React.PureComponent {

    render(){
        const locale = this.props.locale;
        return (
            <Statement locale={locale} componentName="Upload">
                <Row>
                    <Col lg={12} md={24} sm={24} xs={24}>
                        <Block locale={locale} componentName="Upload" documentName="basic" />
                        <Block locale={locale} componentName="Upload" documentName="avatar" />
                        <Block locale={locale} componentName="Upload" documentName="drag" />
                    </Col>
                    <Col lg={12} md={24} sm={24} xs={24}>
                        <Block locale={locale} componentName="Upload" documentName="image"/>
                        <Block locale={locale} componentName="Upload" documentName="gallery" />
                        <Block locale={locale} componentName="Upload" documentName="manual"/>
                        <Block locale={locale} componentName="Upload" documentName="http" />
                    </Col>
                </Row>
            </Statement>
        );
    }
}