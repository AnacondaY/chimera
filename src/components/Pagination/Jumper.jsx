import React from 'react';
import PropTypes from '../../base/prop-types';
import BaseComponent from '../../base/BaseComponent';
import Input from '../Input';
import { ENTER } from '../../base/utils/keyCode';

export default class Jumper extends BaseComponent {

    static propTypes = {
        page: PropTypes.number,
        onEnter: PropTypes.func,
        range: PropTypes.arrayOf(PropTypes.number)
    }

    constructor(props){
        super(props);
        this.state = {
            page: props.page
        };
        this.handleEnter = this.handleEnter.bind(this);
    }

    handleEnter(evt: React.SyntheticEvent){
        if(evt.which === ENTER){
            let page = Number(evt.target.value);
            const [min, max] = this.props.range;        
            page = Number(page);
            if(isNaN(page)){
                page = min;
            }
            if(page < min){
                page = min;
            }else if(page > max){
                page = max;
            }
            this.setState({
                page
            }, () => this.props.onEnter(page));
        }
    }

    render(){
        const page = this.state.page;
        return (
            <div className="cmr-pagination-jumper cmr-pagination-item">
                跳转到<Input size="small" value={page} onKeyPress={this.handleEnter}/>页
            </div>
        );
    }

}