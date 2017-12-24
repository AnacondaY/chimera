import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import marked from '../marked';
export default class Statement extends PureComponent{

    static propTypes = {
        componentName: PropTypes.string.isRequired,
        locale: PropTypes.string,
        documentName: PropTypes.string
    }

    static defaultProps = {
        locale: 'zh-CN',
        documentName: 'main'
    }

    constructor(props: Object){
        super(props);
        this.state = {
            meta: '',
            api: ''
        };
    }

    importMarkdown(componentName: String, locale: String, documentName: String): Promise{
        return new Promise((resolve, reject) => {
            require.ensure([], require => {
                try{
                    const md =  require(`components/${componentName}/demo/${locale}/${documentName}.md`);
                    resolve(md);
                }catch(err){
                    reject(err);
                }
            });
        });
    }

    updateMarkdown(props: Object){
        const { componentName, locale, documentName } = props;
        this.importMarkdown(componentName, locale, documentName).then(markdown => {
            const doc = markdown.match(/([^]*)\n?@@\-+@@\n?([^]*)/);
            this.setState({
                meta: doc[1],
                api: doc[2]
            });
        }).catch(err => {
            console.error(err);
        });
    }

    componentDidMount() {
        this.updateMarkdown(this.props);
    }

    componentWillReceiveProps(nextProps) {
        this.updateMarkdown(nextProps);    
    }
    
    render(){
        const { meta, api } = this.state;
        return (
            <div className="cmr-statement">
                <div className="cmr-statement-meta" dangerouslySetInnerHTML={{__html: marked(meta)}}/>
                {this.props.children}
                <div className="cmr-statement-api" dangerouslySetInnerHTML={{__html: marked(api)}}/>
            </div>
        );
    }

}