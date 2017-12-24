import React from 'react';
import Block from '../../Block';
import Statement from '../../Statement';
import { Row, Col } from 'components';
import './demo.scss';

export default class DemoDialog extends React.PureComponent {

    render(){
        return (
            <Statement componentName="Dialog">
                <Row>
                    <Col xs={24} sm={24} md={12} lg={12}>
                        <Block componentName="Dialog" documentName="basic" />    
                        <Block componentName="Dialog" documentName="async"/>                                                                 
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={12}>
                        <Block componentName="Dialog" documentName="footer" />
                        <Block componentName="Dialog" documentName="presets" />
                    </Col>
                </Row>    
            </Statement>
        );
    }
}