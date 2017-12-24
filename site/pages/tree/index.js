import React from 'react';
import Block from '../../Block';
import Statement from '../../Statement';

export default class DemoTree extends React.PureComponent {

    render(){
        return (
            <Statement componentName="Tree">
                <Block componentName="Tree" documentName="basic" />
            </Statement>
        );
    }
    
}