import React,{ PureComponent } from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import PropTypes from 'prop-types';
import marked from 'marked';
import { transform } from 'babel-standalone';
import { ulid } from 'ulid';
import cx from 'classnames';
import * as Components from 'components';

export default class Block extends PureComponent {

    static propTypes = {
        componentName: PropTypes.string.isRequired,
        locale: PropTypes.string,
        documentName: PropTypes.string.isRequired
    }

    static defaultProps = {
        locale: 'zh-CN'
    }

    constructor(props: Object){
        super(props);
        this.uuid = ulid();
        this.state = {
            meta: '',
            source: '',
            showCode: false
        };
        this.toggleSource = this.toggleSource.bind(this);
    }

    toggleSource(){
        this.setState(({showCode}) => ({
            showCode: !showCode
        }));
    }
    
    renderCode(props: Object){
        const { locale, componentName, documentName } = props;
        this.readMarkdown(componentName, locale, documentName).then(markdown => {
            const doc = markdown.match(/([^]*)\n?(```[^]+```)/);
            const meta = doc[1];
            const codeSegment = doc[2].match(/```\w*\n?([^]+)```/)[1];
            const args = ['React', 'render'];
            const params = [React, render];
            for(const key in Components){
                args.push(key);
                params.push(Components[key]);
            }
            const code = transform(`
                ${codeSegment}\n
                render(<Demo/>, document.getElementById('${this.uuid}'))
            `, {
                presets: ['es2015', 'react']
            }).code;
            args.push(code);
            new Function(...args).apply(null, params);
            this.setState({
                source: codeSegment,
                meta
            });
        }).catch(err => {
            console.error(err);
        });    
    }

    readMarkdown(componentName: String, locale: String, fileName: String): Promise{
        return new Promise((resolve, reject) => {
            require.ensure([], require => {
                try{              
                    const text = require(`components/${componentName}/demo/${locale}/${fileName}.md`);
                    resolve(text);
                }catch(error){
                    reject(error);
                }
            });
        });
    }

    componentDidMount() {
        this.renderCode(this.props);
    }

    componentWillReceiveProps(nextProps: Object) {
        unmountComponentAtNode(document.getElementById(this.uuid));
        this.renderCode(nextProps);   
    }

    render(){
        const { showCode, source, meta } = this.state;
        return (
            <div className="cmr-demo">
                <div className="cmr-demo-meta" dangerouslySetInnerHTML={{__html: marked(meta)}} />
                <div className="cmr-demo-render" id={this.uuid}/>
                <div className="cmr-demo-control">
                    <button className={cx('cmr-demo-control-button', {
                        'cmr-demo-control-button-active': showCode
                    })} onClick={this.toggleSource}>
                        <span className="cmr-demo-control-button-text">
                            <span className="cmr-demo-control-button-arrow" style={{
                                transform: `rotate(${!showCode ? 0 : 180}deg)`
                            }}>
                                <Components.Icon type="arrow-down"/>
                            </span>
                            {this.props.locale === 'en' ? ( showCode ? 'Hide Code' : 'Show Code' ) : ( showCode ? '隐藏代码': '显示代码' )}
                        </span>
                    </button>
                    {showCode && 
                        <div className="cmr-demo-code" dangerouslySetInnerHTML={{__html: marked(source)}} />
                    }
                </div>
            </div>
        );
    }
}