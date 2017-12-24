import React from 'react';
import Block from '../../Block';
import Statement from '../../Statement';
import './demo.scss';

export default class DemoLoading extends React.PureComponent {

    render(){
        const locale = this.props.locale;
        return (
            <Statement locale={locale} componentName="Loading">
                <Block locale={locale} componentName="Loading" documentName="basic" />
                <Block locale={locale} componentName="Loading" documentName="full"/>
            </Statement>
        );
    }
}