import React from 'react';
import ReactDOM from 'react-dom';
import cx from 'classnames';
import { asideMap } from './siteMap';
import { Row, Col, Select } from 'components';
import NotFound from './NotFound';
import './app.scss';

const req = require.context('../src/components', true, /^\.\/[\w-]+\/style\/index.scss$/);
req.keys().forEach(mod => {
    req(mod);
});

export default class App extends React.PureComponent{

    constructor(props: Object){
        super(props);
        this.state = {
            locale: 'zh-CN',
            hash: '',
            searchContent: ''
        };
        this.handleSearch = this.handleSearch.bind(this);
        this.handleSearchChange = this.handleSearchChange.bind(this);
    }

    renderPage(){
        let hash = window.location.hash.split('/');
        hash = hash.length > 1 ? hash[1] : hash[0];
        if(!hash){
            hash = 'quick-start';
        }
        this.setState({
            hash
        });
        this.importPage(hash)
            .then(Page => {
                ReactDOM.render(<Page locale={this.state.locale}/>, document.getElementById('content'));
            })
            .catch(err => {
                ReactDOM.render(<NotFound locale={this.state.locale}/>, document.getElementById('content'));
            });
    }

    importPage(hash: String): Promise{
        return new Promise((resolve, reject) => {
            require.context('./pages', true, /\.js$/);
            require.ensure([], require => {
                try{
                    const Page = require(`./pages/${hash}/index.js`).default;
                    resolve(Page);
                }catch(err){
                    reject(err);
                }
            });
        });
    }

    handleSearch(value: String){
        this.setState({
            searchContent: value
        });
    }

    handleSearchChange(hash: String){
        window.location.href = `${window.location.pathname}#/${hash}`;
        this.setState({
            searchContent: ''
        });
    }

    changeLocale(lang: String){
        this.setState({
            locale: lang
        });
    }

    componentDidMount() {
        this.renderPage();
        window.addEventListener('hashchange', () => {
            this.renderPage();
        });
        document.addEventListener('DOMContentLoaded', () => {
            document.querySelector('.app-aside').style.height = document.body.offsetHeight;
        });
    }

    componentDidUpdate(prevProps, prevState) {
        this.renderPage();
    }

    render(){
        const { locale, hash, searchContent } = this.state;
        const options = asideMap[2].children.reduce((prevOpts, cur) => {
            const filteredArr = cur.children.filter(item => item[locale].indexOf(searchContent) !== -1);
            return prevOpts.concat(filteredArr);
        }, []);
        return (
            <div className="app">
                <div className="app-header">
                    <div className="app-header-inner">
                        <div className="app-header-search">
                            <Select filterable size="large" 
                                placeholder={locale === 'zh-CN' ? '搜索组件' : 'Search Components ...'} 
                                menuStyle={{maxHeight: 320}}
                                onSearch={this.handleSearch}
                                onChange={this.handleSearchChange}
                            >
                                {options.map((op, i) =>{
                                    return (
                                        <Select.Option label={op[locale]} key={op.hash} value={op.hash}/>
                                    );
                                })}
                            </Select>
                        </div>
                        <ul className="app-header-nav">
                            <li className="app-header-nav-item github">
                                <a href="https://github.com/AnacondaY/chimera"/>
                            </li>
                            <li className="app-header-nav-item language">
                                <span className={cx('language-item', {
                                    'active': locale === 'zh-CN'
                                })} onClick={this.changeLocale.bind(this, 'zh-CN')}>中文
                                </span>/
                                <span className={cx('language-item', {
                                    'active': locale === 'en'
                                })} onClick={this.changeLocale.bind(this, 'en')}>En
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="app-body">
                    <Row gap={0}>
                        <Col span={6}>
                            <div className="app-aside">
                                <ul className="app-aside-nav">
                                    {asideMap.map((item, index) => {
                                        if(!item.children){
                                            return (
                                                <li key={`demo-nav-item-${index}`} className={cx('app-aside-nav-item', {
                                                    'app-aside-nav-item-active': hash === item['hash']
                                                })}>
                                                    <a href={`#/${item['hash']}`}>{item[locale]}</a>
                                                </li>
                                            );
                                        }else{
                                            return (
                                                <li key={`demo-nav-subnav-${index}`} className="app-aside-nav-subnav">
                                                    <div className="app-aside-nav-subnav-title">{item[locale]}</div>
                                                    <ul className="app-aside-nav-subnav-menu">
                                                        {item.children.map((components, idx) => {
                                                            return (
                                                                <li key={`demo-nav-group-${idx}`} className="app-aside-nav-item-group">
                                                                    <div className="app-aside-nav-item-group-title">{components[locale]}</div>
                                                                    <ul className="app-aside-nav-item-group-menu">
                                                                        {components.children.map((c, i) => {
                                                                            return (
                                                                                <li key={`demo-nav-group-item-${i}`} className={cx('app-aside-nav-item', {
                                                                                    'app-aside-nav-item-active': hash === c['hash']
                                                                                })}>
                                                                                    <a href={`#/${c['hash']}`}>{c[locale]}</a>
                                                                                </li>                                                            
                                                                            );
                                                                        })}
                                                                    </ul>
                                                                </li>
                                                            );
                                                        })}
                                                    </ul>    
                                                </li>
                                            );
                                        }
                                    })}
                                </ul>
                            </div>
                        </Col>
                        <Col span={18}>
                            <div className="app-content">
                                <Row>
                                    <div id="content"></div>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }

}