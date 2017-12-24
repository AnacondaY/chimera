import React from 'react';
import { Row, Col } from 'components';
import Block from '../../Block';
import Statement from '../../Statement';

export default class DemoNavigation extends React.PureComponent {
    render(){
        const locale = this.props.locale;
        return (
            <Statement locale={locale} componentName="Navigation">
                <Block locale={locale} componentName="Navigation" documentName="basic" />
                <Block locale={locale} componentName="Navigation" documentName="vertical" />
                <Block locale={locale} componentName="Navigation" documentName="disabled" />
                <Block locale={locale} componentName="Navigation" documentName="trigger" />
            </Statement>
        );
    }
}