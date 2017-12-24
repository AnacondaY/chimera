import React,{ PureComponent } from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';
import marked from 'marked';
import { transform } from 'babel';

export default class Markdown extends PureComponent {

    constructor(props: Object){
        super(props);
        this.randomId = `${Math.round(Math.random() * 1e6)}-${Date.now()}`;
        //this.doc = 
        this.state = {
            showCode: false
        };
    }

    renderCode(codeSegment){
        const code = transform(`
            class Demo extends React.PureComponent {
                ${codeSegment}
            }
            ReactDOM.render(<Demo {...props} />, document.getElementById(${this.randomId}))
        `, require('../../../.babelrc')).code;
    }

    render(){
        const showCode = this.state.showCode;
        return (
            <div className="cmr-demo">
                <div className="cmr-demo-block" id={this.randomId}>

                    {showCode && 
                        <div className="">
                            
                        </div>
                    }
                </div>
            </div>
        );
    }

}