import React from 'react';
import marked from '../../marked';
import zhCN from '../../../docs/zh-CN/quick-start.md';
import './demo.scss';

export default class Guide extends React.PureComponent{
    render(){
        const locale = this.props.locale;
        const html = marked(require(`../../../docs/${locale}/quick-start.md`));
        return <div className="cmr-demo-overview" dangerouslySetInnerHTML={{__html: html}}/>;   
    }
}