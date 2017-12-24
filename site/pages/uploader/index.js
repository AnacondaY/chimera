import React from 'react';
import { Row, Col } from 'components';
import Block from '../../Block';
import Statement from '../../Statement';

export default class DemoUploader extends React.PureComponent {

    render(){
        return (
            <div>
                <Statement componentName="Uploader">
                    <Block componentName="Uploader" documentName="basic" />
                </Statement>
            </div>
        );
    }
}