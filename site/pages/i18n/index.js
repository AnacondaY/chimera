import React from 'react';
import Block from '../../Block';
import Statement from '../../Statement';
import './demo.scss';

export default class DemoLocale extends React.PureComponent {

    render(){
        return (
            <div className="demo-i18n">
                <Statement componentName="i18n"/>
            </div>
        );
    }

}