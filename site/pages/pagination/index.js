import React from 'react';
import Block from '../../Block';
import Statement from '../../Statement';
import './demo.scss';

export default class DemoPagination extends React.PureComponent {
    
    render(){
        const locale = this.props.locale;
        return (
            <Statement locale={locale} componentName="Pagination">
                <Block locale={locale} componentName="Pagination" documentName="basic" />
                <Block locale={locale} componentName="Pagination" documentName="mini" />
                <Block locale={locale} componentName="Pagination" documentName="layout" />
                <Block locale={locale} componentName="Pagination" documentName="pageSize" />
                <Block locale={locale} componentName="Pagination" documentName="total" />
            </Statement>
        );
    }
}