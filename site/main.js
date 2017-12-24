import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './app';
import {LocaleProvider} from 'components';
import zhCN from 'components/i18n/lang/zh-CN';
import '../src/components/style';

render(
    <LocaleProvider locale={zhCN}>
        <App/>
    </LocaleProvider>
, document.getElementById('app'));

if(module.hot){
    module.hot.accept('./app', () => {
        const App = require('./app').default;
        render(
            <LocaleProvider locale={zhCN}>
                <App/>
            </LocaleProvider>
        , document.getElementById('app'));
    });
}