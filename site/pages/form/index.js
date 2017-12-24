import React from 'react';
import Block from '../../Block';
import Statement from '../../Statement';
import './demo.scss';

export default class DemoForm extends React.PureComponent {

    render(){
        return (
            <Statement componentName="Form">
                <Block componentName="Form" documentName="horizontal" />    
                <Block componentName="Form" documentName="inline"/>
                <Block componentName="Form" documentName="validate"/>
                <Block componentName="Form" documentName="trigger"/>
                <Block componentName="Form" documentName="async" />
                <Block componentName="Form" documentName="enhance" />
            </Statement>
        );
    }
}