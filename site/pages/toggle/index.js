import React from 'react';
import { Row, Col } from 'components';
import Block from '../../Block';
import Statement from '../../Statement';

export default class DemoToggle extends React.PureComponent {

    render(){
        const locale = this.props.locale;
        return (
            <Statement componentName="Toggle" locale={locale}>
                <Row>
                    <Col xs={24} md={24} sm={24} lg={12}>
                        <Block locale={locale} componentName="Toggle" documentName="basic" />
                        <Block locale={locale} componentName="Toggle" documentName="control" />
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={12}>
                        <Block locale={locale} componentName="Toggle" documentName="disabled" />
                        <Block locale={locale} componentName="Toggle" documentName="text" />
                    </Col>
                </Row>
            </Statement>
        );
    }
}