import React from 'react';
import Icon from '../../Icon';
import BaseComponent from '../../../base/BaseComponent';
import PropTypes from '../../../base/prop-types';

export default class SortIcon extends BaseComponent{

    static propTypes = {
        onAscend: PropTypes.func,
        onDescend: PropTypes.func
    }

    constructor(){
        super();
        this.state = {};
    }

    changeSortation(isAscend){
        this.setState({
            isAscend
        }, () => {
            if(isAscend){
                this.props.onAscend();
            }else{
                this.props.onDescend();
            }
        });
    }

    render(){
        const isAscend = this.state.isAscend;
        return (
            <span className="cmr-table-sort-icon">
                <div className={this.classNames({
                    'cmr-table-sort-icon-up': true,
                    'cmr-table-sort-icon-highlight': isAscend === true
                })} onClick={this.changeSortation.bind(this, true)}>
                    <Icon type="caret-up" />
                </div>
                <div className={this.classNames({
                    'cmr-table-sort-icon-down': true,
                    'cmr-table-sort-icon-highlight': isAscend === false
                })} onClick={this.changeSortation.bind(this, false)}>
                    <Icon type="caret-down" />                
                </div>
            </span>
        );
    }

}