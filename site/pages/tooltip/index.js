import React from 'react';
import Block from '../../Block';
import Statement from '../../Statement';
import { Row, Col } from 'components';
import './demo.scss';
export default class DemoTooltip extends React.PureComponent {

    render(){
        return (
            <Statement componentName="Tooltip">
                <Row>
                    <Col xs={24} sm={24} md={24} lg={12}>
                        <Block componentName="Tooltip" documentName="basic" />   
                        <Block componentName="Tooltip" documentName="trigger" />    
                        <Block componentName="Tooltip" documentName="delay" />                                                                                    
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={12}>
                        <Block componentName="Tooltip" documentName="placement" />
                    </Col>
                </Row>    
            </Statement>
        );
    }
}