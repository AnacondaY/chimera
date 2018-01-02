import React from 'react';
import { Row, Col } from 'components';
import Block from '../../Block';
import Statement from '../../Statement';
import './demo.scss';

export default class DemoLayout extends React.PureComponent {

    render(){
        const locale = this.props.locale;
        return (
            <Statement locale={locale} componentName="Layout">
                <Block locale={locale} componentName="Layout" documentName="basic" />
                <Block locale={locale} componentName="Layout" documentName="nav" />
            </Statement>
        );
    }
}