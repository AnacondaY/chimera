import React, { cloneElement, Children } from 'react';
import BaseComponent from '../../base/BaseComponent';
import PropTypes from '../../base/prop-types';

export default class Collapse extends BaseComponent {

    static propTypes = {
        defaultActiveIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.arrayOf(PropTypes.number)]),
        only: PropTypes.bool,
        simple: PropTypes.bool,
        onChange: PropTypes.func
    }

    static defaultProps = {
        defaultActiveIndex: 0,
        only: false,
        simple: false
    }

    constructor(props: Object){
        super(props);
        let activeIndex = Array.isArray(props.defaultActiveIndex) ? [].concat(props.defaultActiveIndex) : [props.defaultActiveIndex];
        if(props.only){
            activeIndex.splice(1, activeIndex.length - 1);
        }
        this.state = {
            activeIndex
        };
        this.handleItemClick = this.handleItemClick.bind(this);
    }

    handleItemClick(index: Number){
        this.setState(({activeIndex}) => {
            const idx = activeIndex.indexOf(index);
            if(idx === -1){
                if(this.props.only){
                    activeIndex = [index];
                }else{
                    activeIndex = [index].concat(activeIndex);
                }
            }else{
                if(this.props.only){
                    activeIndex = [];
                }else{
                    activeIndex.splice(idx, 1);
                    activeIndex = [].concat(activeIndex); 
                }
            }
            return {
                activeIndex
            };
        }, () => {
            typeof this.props.onChange === 'function' && this.props.onChange(index, this.state.activeIndex.indexOf(index) === -1);
        });
    }

    render(){
        const children = this.props.children;
        return (
            <div className={this.classNames('cmr-collapse', {
                'cmr-collapse-simple': this.props.simple
            })} style={this.styles()}>
                {Children.map(children, (c, i) => {
                    return cloneElement(c, {
                        ...c.props,
                        index: i,
                        active: this.state.activeIndex.indexOf(i) !== -1,
                        key: `cmr-collapse-item-${i}`,
                        onClick: this.handleItemClick
                    });
                })}
            </div>
        );
    }

}