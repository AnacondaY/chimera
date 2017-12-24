import React from 'react';
import marked from '../../marked';

export default class Theme extends React.PureComponent{
    render(){
        const locale = this.props.locale;
        const html = marked(require(`../../../docs/${locale}/theme.md`));
        return <div className="cmr-demo-overview" dangerouslySetInnerHTML={{__html: html}}/>;   
    }
}