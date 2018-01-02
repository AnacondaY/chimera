import React from 'react';
import Block from '../../Block';
import Statement from '../../Statement';
import { Row, Col } from 'components';
import './demo.scss';

export default class DemoDialog extends React.PureComponent {

    render(){
        return (
            <Statement componentName="Dialog">
                <Block componentName="Dialog" documentName="basic" /> 
                <Block componentName="Dialog" documentName="footer" />
            </Statement>
        );
    }
}