import React from 'react';
import Checkbox from '../../Checkbox';
import Button from '../../Button';
import PropTypes from '../../../base/prop-types';
import BaseComponent from '../../../base/BaseComponent';
import Popover from '../../_Popover';
import { getOffset } from '../../../base/utils/dom';
import { contextTypes } from '../define';

class Menu extends BaseComponent{

    static contextTypes = contextTypes

    constructor(props, context){
        super(props);
        this.state = {
            checkedValues: context.hub.state.filterValues || []
        };
    }

    handleChange(checked: Boolean, value: Number | String){
        this.setState(({checkedValues}) => {
            const valuesCopy = checkedValues.slice();
            if(checked){
                valuesCopy.push(value);                
            }else{
                const index = valuesCopy.indexOf(value);
                if(value !== -1){
                    valuesCopy.splice(index, 1);
                }
            }
            return {
                checkedValues: valuesCopy
            };
        });
    }

    reset(){
        this.setState({
            checkedValues: []
        }, this.filter);
    }

    filter(){
        this.context.hub.updateFilteration(this.state.checkedValues, this.props.column);
        this.props.closePortal();
    }

    render(){
        const { filterableList, children, column } = this.props;
        return (
            <div className="cmr-table-menu">
                {filterableList.map((row, i) => {
                    const { value, label } = row;
                    return (
                        <div className="cmr-table-menu-item" key={`cmr-table-menu-item-${i}`}>
                            <Checkbox checked={this.state.checkedValues.indexOf(value) !== -1} onChange={checked => this.handleChange(checked, value)}
                                checked={this.state.checkedValues.indexOf(value) !== -1}>
                                {label}
                            </Checkbox>
                        </div>
                    );
                })}
                <div className="cmr-table-menu-item">
                    <div className="cmr-table-menu-item-left">
                        <Button link onClick={this.filter.bind(this)}>过滤</Button>
                    </div>
                    <div className="cmr-table-menu-item-right">
                        <Button link onClick={this.reset.bind(this)}>重置</Button>                
                    </div>
                </div>
            </div>
        );
    }
}

export default class FiterMenu extends BaseComponent{

    handleOpen(node: HTMLDivElement){
        const { offsetLeft, offsetTop, offsetHeight } = getOffset(this.refs.trigger);
        node.style.position = 'absolute';
        node.style.left = offsetLeft;
        node.style.top = offsetTop + offsetHeight;        
    }

    render(){
        const { children, filterableList, column } = this.props;
        const triggerEl = <span ref="trigger">{children}</span>;    
        return (
            <Popover triggerElement={triggerEl} onOpen={this.handleOpen.bind(this)}
                escToClose outsideClickToClose>
                <Menu filterableList={filterableList} column={column}/>
            </Popover>
        );
    }

}
