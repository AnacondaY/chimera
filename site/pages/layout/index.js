import React from 'react';
import { Row, Col } from 'components';
import Block from '../../Block';
import Statement from '../../Statement';
import './demo.scss';

export default class DemoLayout extends React.PureComponent {

    render(){
        return (
            <div>
                <Statement componentName="Layout">
                    <Block componentName="Layout" documentName="basic" />
                    <Block componentName="Layout" documentName="nav" />
                </Statement>
            </div>
        );
    }
}