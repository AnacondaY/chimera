import React from 'react';
import Block from '../../Block';
import Statement from '../../Statement';
import { Row, Col } from 'components/Grid';

export default class DemoColorPicker extends React.PureComponent {

    render(){
        return (
            <Statement componentName="ColorPicker">
                <Row>
                    <Col xs={24} sm={24} md={24} lg={12}>
                        <Block componentName="ColorPicker" documentName="basic" />   
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={12}>

                    </Col>
                </Row>
            </Statement>
        );
    }
}