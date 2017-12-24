import React, { cloneElement, Children } from 'react';
import { findDOMNode } from 'react-dom';
import PropTypes from '../../base/prop-types';
import BaseComponent from '../../base/BaseComponent';

export default class Steps extends BaseComponent {

    static propTypes = {
        currentIndex: PropTypes.number,
        mode: PropTypes.oneOf(['horizontal', 'vertical']),
        status: PropTypes.oneOf(['success', 'error', 'waiting', 'processing']),
    }

    static defaultProps = {
        currentIndex: 0,
        mode: 'horizontal',
        status: 'waiting'
    }

    get stepCount(){
        return Children.count(this.props.children);
    }

    get isVertical(){
        return this.props.mode === 'vertical';
    }

    constructor(){
        super();
        this.state = {
            compensation: 0
        };
    }

    validateStep(index: Number): Number{
        if(index < 0){
            index = 0;
        }else if(index > this.stepCount - 1){
            index = this.stepCount - 1;
        }
        return index;
    }

    componentDidMount() {
        //offsetHeight offsetWidth没有保留小数
        const { width, height } = findDOMNode(this.refs.lastStep).getBoundingClientRect();
        this.setState({
            compensation: !this.isVertical ? width : height
        });
    }

    render(){
        let { children, currentIndex, mode, status } = this.props;
        currentIndex = this.validateStep(currentIndex);
        return (
            <div className={this.classNames({
                'cmr-steps': true,
                [`cmr-steps-${mode}`]: true
            })}>
                {Children.map(children, (child, i) => {
                    const props = {
                        ...child.props,
                        stepIndex: i,
                        currentIndex,  
                        isVertical: this.isVertical,
                        stepCount: this.stepCount,
                        ref: 'lastStep',
                        status,
                        compensation: this.state.compensation
                    };
                    return cloneElement(child, props);
                })}
            </div>
        );
    }

}